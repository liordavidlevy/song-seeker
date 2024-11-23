import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlbumResponse, Artist } from '../../services/album.service.types';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent implements OnInit {
  album$?: Observable<AlbumResponse>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.album$ = this.albumService.getAlbum(id);
    }
  }

  getArtists(artists: Artist[]): string {
    return artists.map(({ name }) => name).join(', ');
  }
}
