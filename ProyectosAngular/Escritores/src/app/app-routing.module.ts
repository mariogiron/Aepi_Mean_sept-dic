import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  {
    path: 'escritor/:idEscritor', component: DetalleComponent, children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
