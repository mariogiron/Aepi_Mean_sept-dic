import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrNums: number[];
  campoTexto: string;

  constructor() {
    this.arrNums = [4, 32, 15];
  }

  termina($event) {
    console.log($event);
  }

  finSuma($event) {
    console.log($event);
  }

}
