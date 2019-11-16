import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  emailObsrv: Subscription;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      email: new FormControl('', [
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)
      ]),
      direccion: new FormControl(''),
      edad: new FormControl('', [
        Validators.pattern(/^[0-9]*$/),
        this.edadValidator
      ]),
      dni: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
    const emailControl = this.formulario.controls.email;
    this.emailObsrv = emailControl.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy() {
    this.emailObsrv.unsubscribe();
  }

  onSubmit() {
    console.log(this.formulario.valid);
    console.log(this.formulario.value);
  }

  edadValidator(control) {
    const edad = control.value;
    const min = 18;
    const max = 65;
    if (edad < min || edad > max) {
      return {
        edadvalidator: `La edad debe estar entre ${min} y ${max}`
      };
    } else {
      return null;
    }
  }

}


