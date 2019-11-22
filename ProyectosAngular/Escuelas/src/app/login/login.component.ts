import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  async onSubmit(values) {
    const response = await this.usuariosService.login(values);
    if (response['error']) {
      alert(response['error']);
    } else {
      const token = response['success'];
      localStorage.setItem('tokenEscuelas', token);
      alert('Login correcto!!💃');
    }
  }

}
