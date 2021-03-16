import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemUrl: string;
  showImage: boolean;
  itemTitle: string;
  itemDescription: string;

  eventImage(item: any){
    console.log(item);
    this.itemUrl = item.link;
    this.showImage = item.show;
    this.itemTitle = item.title;
    this.itemDescription = item.description;
  }

  images = [
    {
      id: '0',
      link: '',
      title: 'Dibujos',
      date: '',
      description: '',
      show: false
    },
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
    },
    {
      id: '3',
      link: 'assets/images/Sueter-de-estambre.png',
      title: 'Suéter de estambre',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '4',
      link: 'assets/images/Romper.png',
      title: 'Romper',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '5',
      link: 'assets/images/Pesqueros-y-Camisa.png',
      title: 'Pesqueros y Camisa',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '6',
      link: 'assets/images/Met-gala---Harry-style.png',
      title: 'Met Gala - Harry Styles',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '7',
      link: 'assets/images/happy.png',
      title: 'Bienvenido',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '8',
      link: 'assets/images/sad.png',
      title: 'Error 404',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    }];
}
