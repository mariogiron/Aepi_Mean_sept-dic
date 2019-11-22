import { Alumno } from './models/alumno.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://aepi.ngrok.io/api/students';
  }

  getAll(): Promise<Alumno[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'aepi-token': localStorage.getItem('tokenEscuelas')
      })
    };
    return this.http.get<Alumno[]>(this.baseUrl, httpOptions).toPromise();
  }
}
