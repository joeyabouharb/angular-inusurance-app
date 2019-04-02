import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Claim } from '../models/claim';
import { MessageService } from './message-service.service';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                             'Access-Control-Allow-Origin': '*', })
};

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  private url = 'https://insurance-claim-api-java.herokuapp.com/api/claim';
  claims: Claim[];

  constructor(private http: HttpClient, private messageService: MessageService) {}

   public getAllClaims(): Observable<Claim[]> {
     return this.http.get<Claim[]>(`${this.url}/list`)
     .pipe(
       tap(_ => this.log('fetched claims')),
       catchError(this.handleError<Claim[]>('getAllClaims', []))
     );
  }

  public newClaim(claim: Claim): Observable<Claim> {
    return this.http.post<Claim>(`${this.url}/add`, claim, httpOptions)
    .pipe(
      tap(_ => {this.log('added claim'); }),
      catchError(this.handleError<Claim>('newClaim', null))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`claimsService: ${message}`);
  }
}
