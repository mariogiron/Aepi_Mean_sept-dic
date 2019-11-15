import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductComponent } from './product/product.component';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    InfoComponent,
    ContactoComponent,
    ProductComponent,
    RelatedComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
