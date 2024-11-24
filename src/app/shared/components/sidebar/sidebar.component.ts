import { afterRender, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    SvgIconComponent,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  user$?: Observable<User | null>;

  constructor(
    private cookieService: CookieService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  addCoookie(): void {
    const token = prompt(
      'Please paste the spotify access token in here.\nImportant! The token is only valid for a maximum of 1 hour!'
    );

    if (!token) {
      alert('invalid token');
      return;
    }

    this.cookieService.set('spotify-token', token, { expires: 1 });
    location.reload();
  }

  getUserDetails(user: User): string {
    return `Username: ${user.username}, Email: ${user.email}`;
  }
}
