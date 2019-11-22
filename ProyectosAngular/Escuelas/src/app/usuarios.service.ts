import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://aepi.ngrok.io/api/users';
  }

  registro(values) {
    return this.http.post(`${this.baseUrl}/register`, values).toPromise();
  }

  login(values) {
    return this.http.post(`${this.baseUrl}/login`, values).toPromise();
  }

}
