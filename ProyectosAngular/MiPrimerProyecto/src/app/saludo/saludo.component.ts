import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identificador: string;

  constructor() {
    this.mensaje = 'Este es mi mensaje';
    this.identificador = 'identifParrafo';
    setTimeout(() => {
      this.mensaje = 'Otro valor para la variable';
    }, 5000);
  }

  ngOnInit() {
  }

  devuelveCadena(): string {
    return 'Cadena dentro de función';
  }

  botonPulsado($event) {
    console.log('Se ha pulsado el botón');
    console.log($event.screenX);
  }

}
