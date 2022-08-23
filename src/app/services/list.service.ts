import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private API_URL = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.API_URL);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.API_URL}/${id}`);
  }

  remove(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${this.API_URL}/${id}`);
  }
}
