import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  message: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.message = params.mensaje;
    });

    // this.activatedRoute.params.toPromise().then(params => console.log(params));

    // const params = await this.activatedRoute.params.toPromise();
    // this.message = params.mensaje;

  }

}
