import { Escritor } from './../models/escritor.model';
import { EscritoresService } from './../escritores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  loading: boolean;
  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService) {
    this.loading = true;
  }

  async ngOnInit() {
    // const arrEsc = this.escritoresService.getAll();
    // console.log(arrEsc);

    // Lanzo el loading
    // this.escritoresService.getAllP()
    //   .then((arrEscritores) => {
    //     // Paro el loading
    //     this.loading = false;
    //     this.escritores = arrEscritores;
    //   });

    this.escritores = await this.escritoresService.getAllP();
    this.loading = false;
  }

}
