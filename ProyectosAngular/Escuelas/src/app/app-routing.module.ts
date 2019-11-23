import { PipesComponent } from './pipes/pipes.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EditComponent } from './alumnos/edit/edit.component';
import { FormComponent } from './alumnos/form/form.component';
import { DetailComponent } from './alumnos/detail/detail.component';
import { ListaComponent } from './alumnos/lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'alumnos', component: ListaComponent, canActivate: [LoginGuard] },
  { path: 'alumnos/new', component: FormComponent },
  { path: 'alumnos/edit/:alumnoId', component: EditComponent },
  { path: 'alumnos/:alumnoId', component: DetailComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
