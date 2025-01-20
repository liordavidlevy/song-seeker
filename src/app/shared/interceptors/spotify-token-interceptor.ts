import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http"
import { inject } from "@angular/core"
import { CookieService } from "ngx-cookie-service"
import { catchError, Observable, switchMap, throwError } from "rxjs"
import { environment } from "../../../environments/environment.development"
import { SPOTIFY_BASE_URL } from "../services/spotify.service"
import { stringify } from "querystring"
import { addSeconds } from "date-fns"

export const spotifyTokenInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    if (!request.url.startsWith(SPOTIFY_BASE_URL)) {
        return next(request);
    }

    const cookieService = inject(CookieService);
    let authToken = cookieService.get('spotify-token');

    const getToken = (next: () => Observable<HttpEvent<unknown>>) => {
        return inject(HttpClient).post<{ 'access_token': string, 'expires_in': number}>('https://accounts.spotify.com/api/token', stringify({
            'grant_type': 'client_credentials',
            'client_id': environment.clientId,
            'client_secret': environment.clientSecret
        }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).pipe(switchMap(response => {
            authToken = response['access_token'];
            cookieService.set('spotify-token', authToken, {expires: addSeconds(new Date(), 10)});

            return next();
        }));
    }

    const handleRequest = () => {
        const newReq = request.clone({
            headers: request.headers.append('Authorization', `Bearer ${authToken}`),
        });

        return next(newReq).pipe(catchError(res => {
            if (res instanceof HttpErrorResponse && res.status === 401) {
                return getToken(() => next(request));
            }

            return throwError(() => res);
        }));
    }

    if (!authToken) {
        return getToken(handleRequest);
    } else {
        return handleRequest();
    }
}