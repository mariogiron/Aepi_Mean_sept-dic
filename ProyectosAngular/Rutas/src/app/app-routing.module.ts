import { LoginGuard } from './login.guard';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelatedComponent } from './related/related.component';
import { ProductComponent } from './product/product.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/info' },
  { path: 'hola/:mensaje', component: SaludoComponent },
  { path: 'info', component: InfoComponent, canActivate: [LoginGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [LoginGuard] },
  {
    path: 'product/:productId',
    component: ProductComponent,
    children: [
      { path: 'related', component: RelatedComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: '**', component: SaludoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
