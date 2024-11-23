import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  setJSONItem<T>(name: string, value: T): void {
    this.setItem(name, JSON.stringify(value));
  }

  getItem(name: string): string | null {
    return localStorage.getItem(name);
  }

  getJSONItem<T>(name: string): T | null {
    const item = this.getItem(name);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  }
}
