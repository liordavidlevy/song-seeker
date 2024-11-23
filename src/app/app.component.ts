import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { SvgIconComponent } from "./shared/components/svg-icon/svg-icon.component";
import {MatDividerModule} from '@angular/material/divider';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, SidebarComponent, CommonModule],
  providers: [Title],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title?: string;

  constructor(private titleService: Title) { }

  getTitle(): string {
    return this.titleService.getTitle();
  }
}
