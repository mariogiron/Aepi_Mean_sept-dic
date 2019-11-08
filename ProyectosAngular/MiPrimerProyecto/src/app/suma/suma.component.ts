import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;

  @Output() sumaTerminada: EventEmitter<string>;

  resultado: number;

  constructor() {
    this.sumaTerminada = new EventEmitter();
  }

  ngOnInit() {
  }

  realizarSuma() {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
    this.sumaTerminada.emit(`La suma de ${this.num1} y ${this.num2} es igual a ${this.resultado}`);
  }

}
