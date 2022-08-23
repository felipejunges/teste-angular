import { Injectable } from '@angular/core';
import { Postagem } from '../interfaces/Postagem';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  private baseUrl = environment.apiBaseUrl;
  private postagensApiUrl = `${this.baseUrl}api/Postagens`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.postagensApiUrl);
  }

  incluir(postagem: Postagem): Observable<Postagem> {
    console.log(postagem);
    console.log(this.postagensApiUrl);
    return this.http.post<Postagem>(this.postagensApiUrl, postagem);
  }
}
