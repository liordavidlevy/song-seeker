import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent implements OnInit {
  @Input() name: string = '';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      this.name,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${this.name}.svg`));
  }
}
