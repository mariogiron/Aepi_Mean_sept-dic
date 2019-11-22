import { Alumno } from './../../models/alumno.model';
import { AlumnosService } from './../../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrAlumnos: Alumno[];

  constructor(
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.alumnosService.getAll()
      .then(response => {
        this.arrAlumnos = response;
      }).catch(err => {
        console.log(err);
      });
  }

  manejarClickVer(alumno) {
    this.router.navigate(['/alumnos', alumno._id]);
  }

}
