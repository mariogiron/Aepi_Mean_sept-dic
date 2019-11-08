import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() tareas: any;

  constructor() { }

  ngOnInit() {
  }

  // marcarCompleta(i) {
  //   this.tareas[i].completa = !this.tareas[i].completa;
  // }

  marcarCompleta(tarea){
    tarea.completa = !tarea.completa;
  }

}
