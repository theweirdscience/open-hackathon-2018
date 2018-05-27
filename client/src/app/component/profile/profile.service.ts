import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, Subject } from 'rxjs';
import { tap, map, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  firstname;
  lastname;
  address;
  city;

  constructor() {

    this.firstname = '';
    this.lastname = '';
    this.address = '';
    this.city = '';

  }

}
