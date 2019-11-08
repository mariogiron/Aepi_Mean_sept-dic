import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: any;

  @Output() tareaCreada: EventEmitter<any>;

  constructor() {
    this.tareaCreada = new EventEmitter();
    this.nuevaTarea = {};
  }

  ngOnInit() {
  }

  manejarClick() {
    console.log(this.nuevaTarea);
    this.nuevaTarea.completa = false;
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = {};
  }

}
