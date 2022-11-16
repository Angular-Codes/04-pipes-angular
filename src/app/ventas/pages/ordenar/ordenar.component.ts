import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  isUppercase: boolean = true;
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.verde
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.rojo
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.verde
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onToggleUppercase(): void {
    this.isUppercase = !this.isUppercase;
  }

}
