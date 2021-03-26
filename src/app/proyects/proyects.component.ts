import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proyects = [
    {
      id: '1',
      link: 'assets/images/Traje-XL.png',
      title: 'Traje XL',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '2',
      link: 'assets/images/Sueter.png',
      title: 'Suéter',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    }
  ];
}
