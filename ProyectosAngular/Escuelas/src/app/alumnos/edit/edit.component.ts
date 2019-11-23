import { AlumnosService } from './../../alumnos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.alumnosService.getById(params.alumnoId)
        .then(response => {
          this.formulario = new FormGroup({
            nombre: new FormControl(response.nombre),
            apellidos: new FormControl(response.apellidos),
            edad: new FormControl(response.edad),
            mail: new FormControl(response.mail),
            activo: new FormControl(response.activo)
          });
        }).catch(err => {
          console.log(err);
        });
    });
  }

}
