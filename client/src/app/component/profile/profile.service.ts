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
  date;

  constructor() {

    this.firstname = this.firstname || 'Big';
    this.lastname = this.lastname || 'Bird';
    this.address = this.address || '123 Sesame street, Manhatten, New York';
    this.date = this.date || 'November 10, 1968';

  }

}
