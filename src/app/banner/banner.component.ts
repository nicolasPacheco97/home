import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  image: any;
  ngOnInit(): void {
  }
  
  images = [
    {
      id: '1',
      link: '../../assets/images/Traje-XL.png',
      title: 'Traje XL',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '2',
      link: '../../assets/images/Sueter.png',
      title: 'Suéter',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '3',
      link: '../../assets/images/Sueter-de-estambre.png',
      title: 'Suéter de estambre',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '4',
      link: '../../assets/images/Romper.png',
      title: 'Romper',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '5',
      link: '../../assets/images/Pesqueros-y-Camisa.png',
      title: 'Pesqueros y Camisa',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '6',
      link: '../../assets/images/Met-gala---Harry-style.png',
      title: 'Met Gala - Harry Styles',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '7',
      link: '../../assets/images/happy.png',
      title: 'Bienvenido',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '8',
      link: '../../assets/images/sad.png',
      title: 'Error 404',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
  ];
}
