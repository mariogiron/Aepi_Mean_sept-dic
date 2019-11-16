import { Escritor } from './models/escritor.model';
import { ESCRITORES } from './db/escritores.db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllP(): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      setTimeout(() => resolve(ESCRITORES), 3000);
    });
  }

  getById(pId): Promise<Escritor> {
    return new Promise<Escritor>((resolve, reject) => {
      const escritor = ESCRITORES.find(item => item.id == pId);
      resolve(escritor);
    });
  }

}
