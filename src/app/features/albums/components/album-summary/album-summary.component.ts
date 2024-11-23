import { Component, Input } from '@angular/core';
import { AlbumItem, Artist } from '../../services/album.service.types';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

const ALBU_TYPE_TO_COLOR = new Map<string, string>([
  ['single', 'aquamarine'],
  ['album', 'cornflowerblue'],
  ['compilation', 'lemonchiffon'],
]);

@Component({
  selector: 'app-album-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './album-summary.component.html',
  styleUrl: './album-summary.component.scss'
})
export class AlbumSummaryComponent {
  @Input() album!: AlbumItem;

  constructor() { }

  getArtists(artists: Artist[]): string {
    return artists.map(({ name }) => name).join(', ');
  }

  getColor(albumType: string): string {
    return ALBU_TYPE_TO_COLOR.get(albumType) ?? 'gray';
  }
}
