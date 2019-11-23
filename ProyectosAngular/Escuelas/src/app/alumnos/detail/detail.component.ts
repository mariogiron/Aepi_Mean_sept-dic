import { Alumno } from './../../models/alumno.model';
import { AlumnosService } from './../../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  alumno: Alumno;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.alumnosService.getById(params.alumnoId)
        .then(response => {
          this.alumno = response;
        }).catch(err => {
          console.log(err);
        });
    });
  }

}
