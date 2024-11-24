import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { AlbumService } from '../../services/album.service';
import { AlbumItem } from '../../services/album.service.types';
import { AlbumSummaryLoaderComponent } from '../album-summary-loader/album-summary-loader.component';
import { AlbumSummaryComponent } from '../album-summary/album-summary.component';

const MAX_OPTIONS = 5;

@Component({
  selector: 'app-albums-search',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AlbumSummaryComponent,
    InfiniteScrollDirective,
    AlbumSummaryLoaderComponent
  ],
  providers: [AlbumService],
  templateUrl: './albums-search.component.html',
  styleUrl: './albums-search.component.scss',
})
export class AlbumsSearchComponent implements OnInit {
  albumName: string = '';
  options: string[] = [];

  albums: AlbumItem[] = [];
  isLoading = false;
  currentPage = 0;
  total = 0;
  currentSearch = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}

  search(): void {
    this.currentSearch = this.albumName;
    this.albums = [];
    this.options = this.options.filter((option) => option !== this.albumName);

    if (this.options.length === MAX_OPTIONS) {
      this.options.pop();
    }

    this.options = [this.albumName, ...this.options];
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.albumService
      .getAlbums(this.currentSearch, this.currentPage)
      .subscribe({
        next: ({total, items}) => {
          this.total = total;
          this.albums = items;
        },
        complete: () => (this.isLoading = false),
      });
  }

  appendData() {
    this.isLoading = true;
    this.albumService
      .getAlbums(this.currentSearch, this.currentPage)
      .subscribe({
        next: ({total, items}) => {
          this.total = total;
          this.albums = [...this.albums, ...items];
        },
        complete: () => (this.isLoading = false),
      });
  }

  onScroll() {
    if (this.total > this.albums.length) {
      this.currentPage++;
      this.appendData();
    }
  }
}
