import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parrafoStyle: any;
  color: string;
  mostrar: boolean;

  constructor() {
    this.mostrar = true;
    this.color = 'verde';
    this.parrafoStyle = {
      color: 'red',
      backgroundColor: 'blue',
      fontSize: '24px'
    };
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'ambar';
      } else if (this.color === 'ambar') {
        this.color = 'verde';
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    }, 1000);
  }

  seleccionarColor($event) {
    console.log($event.target.value);
    this.parrafoStyle.backgroundColor = $event.target.value;
  }

  mostrarOcultar() {
    this.mostrar = !this.mostrar;
  }
}
