import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { debounceTime, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilterNullPipe } from '../../../../shared/pipes/filter-null.pipe';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Albums, Artist } from '../../services/album.service.types';

const MAX_OPTIONS = 5;

const ALBU_TYPE_TO_COLOR = new Map<string, string>([
  ['single', 'aquamarine'],
  ['album', 'cornflowerblue'],
  ['compilation', 'lemonchiffon'],
]);

@Component({
  selector: 'app-albums-search',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    FilterNullPipe,
    MatGridListModule,
    RouterLink,
    NgxSkeletonLoaderModule,
    MatAutocompleteModule,
  ],
  providers: [AlbumService],
  templateUrl: './albums-search.component.html',
  styleUrl: './albums-search.component.scss',
})
export class AlbumsSearchComponent implements OnInit {
  albumName: string = '';
  albums$?: Observable<Albums | null>;
  options: string[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (!this.albumName) {
      this.albums$ = of(null);
      return;
    }

    this.options = this.options.filter(option => option !== this.albumName);

    if (this.options.length === MAX_OPTIONS) {
      this.options.pop();
    }

    this.options = [this.albumName, ...this.options];
    this.albums$ = this.albumService.getAlbums(this.albumName, 0);

    console.log(this.options)
  }

  getColor(albumType: string): string {
    return ALBU_TYPE_TO_COLOR.get(albumType) ?? 'gray';
  }

  getArtists(artists: Artist[]): string {
    return artists.map(({ name }) => name).join(', ');
  }
}
