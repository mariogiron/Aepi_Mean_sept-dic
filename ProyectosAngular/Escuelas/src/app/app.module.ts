import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './alumnos/lista/lista.component';
import { DetailComponent } from './alumnos/detail/detail.component';
import { FormComponent } from './alumnos/form/form.component';
import { EditComponent } from './alumnos/edit/edit.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetailComponent,
    FormComponent,
    EditComponent,
    RegistroComponent,
    LoginComponent,
    PipesComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
