import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  precio: number;
  fechaActual: Date;
  numero: number;
  porcentaje: number;
  cadena: string;

  constructor() {
    this.precio = 312434.99;
    this.fechaActual = new Date();
    this.numero = 23.5582923;
    this.porcentaje = Math.random();
    this.cadena = 'en uN lUgAr dE la mancHa';
  }

  ngOnInit() {
  }

}
