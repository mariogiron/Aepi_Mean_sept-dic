import { PlanetasService } from './planetas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  arrPlanetas: any[];
  numPage: number;
  pageCount: number;

  constructor(private planetasService: PlanetasService) {
    this.title = 'Hola Mundo';
    this.numPage = 1;
    this.pageCount = 0;
  }

  ngOnInit() {
    this.getPlanets();
  }

  cambioPagina(pSiguiente) {
    if (pSiguiente) {
      this.numPage++;
    } else {
      this.numPage--;
    }
    this.getPlanets();
  }

  getPlanets() {
    this.planetasService.getAll(this.numPage)
      .then(response => {
        if (!response.error) {
          this.arrPlanetas = response.results;
          this.pageCount = Math.ceil(response.count / 10);
        }
      }).catch(err => {
        console.log(err);
      });
  }

}
