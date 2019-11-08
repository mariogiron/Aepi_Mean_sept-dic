import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: any;

  constructor() {
    this.arrTareas = [];
  }

  onTareaCreada($event) {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

}

// SPREAD OPERATOR
//
// let persona = {
//   nombre: 'Mario',
//   apellidos: 'Girón'
// }

// let personaCopia = {
//   nombre: persona.nombre,
//   apellidos: persona.apellidos
// }

// let personaCopia2 = { ...persona, direccion: 'gran via 23' }