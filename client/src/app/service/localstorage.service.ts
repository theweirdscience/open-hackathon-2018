import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  db;
  items = [];

  constructor() {

    this.db = window.localStorage.getItem('db');

    if (!this.db) {

      this.db = window.localStorage.setItem('db', JSON.stringify(this.items));

    }

  }

  private clearDB() {

    window.localStorage.removeItem('db');

  }

  private updateDB(items: any) {

    this.items.push(items);

    window.localStorage.setItem('db', JSON.stringify(items));

  }

}
