import { Libro } from './../models/libro.model';
import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: Libro[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
  ) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params => {
      console.log(params.idEscritor);
      this.librosService.getByEscritorId(params.idEscritor)
        .then(libros => {
          this.libros = libros;
        });
    });
  }

}
