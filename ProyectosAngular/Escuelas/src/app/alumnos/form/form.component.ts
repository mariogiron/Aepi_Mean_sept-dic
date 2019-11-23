import { AlumnosService } from './../../alumnos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('botonLoco', [
      state('rojo', style({
        color: 'white',
        backgroundColor: 'red'
      })),
      state('verde', style({
        color: 'white',
        backgroundColor: 'green',
        transform: 'translateX(200px)'
      })),
      state('azul', style({
        color: 'white',
        backgroundColor: 'blue'
      })),
      transition('void => *', [
        style({
          // transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate(1000)
      ]),
      transition('rojo => verde', animate('1s ease-in')),
      transition('verde => azul', animate('.3s ease-in')),
      transition('azul => rojo', animate('2s ease-in'))
    ])
  ]
})
export class FormComponent implements OnInit {

  formulario: FormGroup;
  estadoBoton: string;

  constructor(
    private alumnosService: AlumnosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl(''),
      mail: new FormControl(''),
      activo: new FormControl('')
    });
    this.estadoBoton = "verde";
  }

  ngOnInit() {
    setInterval(() => {
      if (this.estadoBoton == 'rojo') {
        this.estadoBoton = 'verde';
      } else if (this.estadoBoton == 'verde') {
        this.estadoBoton = 'azul';
      } else if (this.estadoBoton == 'azul') {
        this.estadoBoton = 'rojo'
      }
    }, 2000);
  }

  onSubmit() {
    this.alumnosService.create(this.formulario.value)
      .then(response => {
        if (response['_id']) {
          alert('Alumno creado correctamente');
          this.router.navigate(['/alumnos']);
        }
      }).catch(err => {
        console.log(err);
      });
  }

}
