import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  private baseUrl = "http://localhost:5000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })

  }

  constructor(private httpClient: HttpClient) { }

  create(user: any): Observable<User> {

    console.log(user);
    return this.httpClient.post<User>(this.baseUrl+ '/api/v1/employees/', user, this.httpOptions);
  }

   getUserById(id:any): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl + '/api/v1/employees/' +id);

  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + '/api/v1/employees/');

  }



}
