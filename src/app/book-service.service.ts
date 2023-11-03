import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookService {


  constructor(private http: HttpClient) {
  }
  

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080/getAll');
  }

  public save(user: Book) {
    return this.http.post<Book>('http://localhost:8080/save', user,{responseType:'text' as 'json'});
  }
}