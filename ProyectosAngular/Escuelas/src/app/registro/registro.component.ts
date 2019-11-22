import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      mail: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  async onSubmit() {
    // this.usuariosService.registro(this.formulario.value)
    //   .then(response => {
    //     console.log(response);
    //   }).catch(err => {
    //     console.log(err);
    //   });
    const response = await this.usuariosService.registro(this.formulario.value);
    console.log(response);
  }

}
