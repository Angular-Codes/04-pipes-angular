import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'kevin david';
  nombreUpper: string = 'KEVIN DAVID';
  nombreCompleto: string = 'kEviN dAvId';

  fecha: Date = new Date(); // el día de hoy

}
