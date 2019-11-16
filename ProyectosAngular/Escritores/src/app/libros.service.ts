import { Libro } from './models/libro.model';
import { Injectable } from '@angular/core';
import { LIBROS } from './db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritorId(pEscritorId): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      resolve(LIBROS.filter(item => item.escritor == pEscritorId));
    });
  }

}
