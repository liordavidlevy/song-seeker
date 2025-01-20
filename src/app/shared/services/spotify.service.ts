import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, of } from 'rxjs';
import { NotificationService } from './notification.service';

export const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

type HttpParams = {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
};

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient, private notificationService: NotificationService) {
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${SPOTIFY_BASE_URL}/${url}`, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError<T>(err: any, _caught: Observable<T>): ObservableInput<T> {
    console.error(err);
    this.notificationService.error();

    return of();
  }
}
