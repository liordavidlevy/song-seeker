import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const ERROR_MESSAGE = 'Something went wrong...';
const NOTIFICATION_DURATION = 2000;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {}

  error(): void {
    this.snackbar.open(ERROR_MESSAGE, undefined, {
      duration: NOTIFICATION_DURATION,
      panelClass: 'mat-error',
      horizontalPosition: 'end',
    });
  }

  success(message: string): void {
    this.snackbar.open(message, undefined, {
      duration: NOTIFICATION_DURATION,
      panelClass: 'mat-success',
      horizontalPosition: 'end',
    });
  }
}
