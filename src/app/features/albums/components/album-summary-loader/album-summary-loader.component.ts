import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-album-summary-loader',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './album-summary-loader.component.html',
  styleUrl: './album-summary-loader.component.scss'
})
export class AlbumSummaryLoaderComponent {

}
