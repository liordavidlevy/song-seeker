import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NotificationService } from '../../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { User, UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide = true;
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{1}[a-zA-Z0-9]*$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=\S+$).*$/)])
  });

  constructor(private userService: UserService, private notificationService: NotificationService, private router: Router) { }

  submmitForm(): void {
    this.userService.setUser(this.userForm.value as User);
    this.notificationService.success('Registered User Successfully');
    this.router.navigate(['/home']);
  }
}
