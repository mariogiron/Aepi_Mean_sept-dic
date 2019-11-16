import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  // Recupero un elemento del HTML llamado btnFinal
  @ViewChild('btnFinal', { static: false }) botonFinal: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  onSubmit(values) {
    console.log(values);
  }

}
