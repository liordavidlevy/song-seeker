import { Injectable } from '@angular/core';
import { SpotifyService } from '../../../shared/services/spotify.service';
import { map, Observable } from 'rxjs';
import { AlbumResponse, Albums, AlbumsResponse } from './album.service.types';

const PAGE_SIZE = 20;

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private spotifyService: SpotifyService) { }

  getAlbums(albumName: string, page: number): Observable<Albums> {
    return this.spotifyService.get<AlbumsResponse>('search', { type: 'album', q: `album:${albumName}`, limit: PAGE_SIZE, offset: page * PAGE_SIZE})
      .pipe(map(({albums}) => albums));
  }

  getAlbum(id: string): Observable<AlbumResponse> {
    return this.spotifyService.get<AlbumResponse>(`albums/${id}`);
  }
}
