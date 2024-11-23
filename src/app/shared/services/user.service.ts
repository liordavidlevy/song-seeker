import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, ReplaySubject } from 'rxjs';

const USER_STORAGE_KEY = 'user'

export type User = {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: ReplaySubject<User | null> = new ReplaySubject(1);

  constructor(private localStorageService: LocalStorageService) { 
    const user = this.localStorageService.getJSONItem<User>(USER_STORAGE_KEY);

    this.user.next(user ?? null);
  }

  setUser(user: User): void {
    this.localStorageService.setJSONItem(USER_STORAGE_KEY, user);
    this.user.next(user);
  }

  getUser(): Observable<User | null> {
    return this.user.asObservable();
  }
}
