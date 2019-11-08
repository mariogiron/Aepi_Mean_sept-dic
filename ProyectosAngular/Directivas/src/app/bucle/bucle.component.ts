import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucle',
  templateUrl: './bucle.component.html',
  styleUrls: ['./bucle.component.css']
})
export class BucleComponent implements OnInit {

  episodios: any[];
  pais: string;

  constructor() {
    this.pais = 'españa';
    this.episodios = [
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' }
    ]

  }

  ngOnInit() {
  }

}
