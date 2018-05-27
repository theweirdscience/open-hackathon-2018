import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  items = [];

  constructor() {

    window.localStorage.setItem('db', JSON.stringify(this.items));

  }

  private clearDB() {

    window.localStorage.removeItem('db');

  }

  private updateDB() {

    this.clearDB();
    window.localStorage.setItem('db', JSON.stringify(this.items));

  }

}
