import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, of } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { NotificationService } from './notification.service';
import { CookieService } from 'ngx-cookie-service';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

type HttpParams = {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
};

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private cookieService: CookieService, private notificationService: NotificationService) {
    const token: string = this.cookieService.get('spotify-token') || environment.spotifyAccessToken;

    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${SPOTIFY_BASE_URL}/${url}`, { params, headers: this.headers })
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError<T>(err: any, _caught: Observable<T>): ObservableInput<T> {
    console.log(err);
    this.notificationService.error();

    return of();
  }
}
