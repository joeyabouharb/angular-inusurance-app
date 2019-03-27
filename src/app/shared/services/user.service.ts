import { Injectable } from '@angular/core';
import { LoginForm } from '../models/login-form';
import { Observable   } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message-service.service';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = '//localhost:8080/api/user';
  constructor(
    private http: HttpClient,
    private message: MessageService,
    private router: Router) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  public getToken(): any {
    const token = localStorage.getItem('token');
    if (token === null) {
      return null;
    }
    return JSON.parse(token).accessToken.toString();
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  public setToken(token): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public userLogin(form: LoginForm): Observable<any> {
    // let token: any;
    return this.http.post(`${this.url}/login`, form, httpOptions)
    .pipe(
      map(this.extractData)
    );

  }
  public login() {
    this.router.navigate(['/claim/list']);
  }
  public logout() {
    this.router.navigate(['user/login']);
  }

  isTokenExpired(): boolean {
    return false;
  }

  clear(): void {
    localStorage.clear();
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }

  public registerUser(form: User): void {
    this.http.post(`${this.url}/signup`, form, httpOptions)
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
