import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   const palabras = value.split(' ');
  //   const arrNuevo = [];
  //   for (const palabra of palabras) {
  //     arrNuevo.push(palabra[0].toUpperCase() + palabra.substring(1).toLowerCase());
  //   }
  //   return arrNuevo.join(' ');
  // }

  transform(value: any, ...args: any[]): any {
    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1).toLowerCase()).join(' ');
  }

}
