import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

/**
 * @name ApiService
 * @description
 * This Service is used for retrieving data from an external API defined in todo
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class ApiService<T> {
  // todo this will go in env variables
  protected API_BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  // get all elements
  public getAll(params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${this.API_BASE_URL}`, this.getHttpOptions(params))
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // get element by id
  public getById(id: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.API_BASE_URL}/${id}`, this.getHttpOptions(params))
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public create(body: T, params?: any): Observable<{}> { // todo: add better typing
    return this.http.post(`${this.API_BASE_URL}`, body, this.getHttpOptions(params))
      .pipe(
        catchError(this.handleError)
      );
  }

  public update(id: string, body: T, params?: any): Observable<{}> { // todo: add better typing
    return this.http.put(`${this.API_BASE_URL}/${id}`, body, this.getHttpOptions(params))
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete(id: string, params?: any): Observable<{}> { // todo: add better typing
    return this.http.delete(`${this.API_BASE_URL}/${id}`, this.getHttpOptions(params))
      .pipe(
        catchError(this.handleError)
      );
  }

  // consumes any key/value object and returns an HttpParams object
  protected getHttpParams(params?: any): HttpParams {
    return new HttpParams(params);
  }

  protected getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token'
    });
  }

  protected getHttpOptions(params?: any): Object {
    return new Object({
      headers: this.getHttpHeaders(),
      params: this.getHttpParams(params)
    });
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
