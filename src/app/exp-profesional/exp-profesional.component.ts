import { Component, OnInit, ViewChildDecorator, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exp-profesional',
  templateUrl: './exp-profesional.component.html',
  styleUrls: ['./exp-profesional.component.scss']
})
export class ExpProfesionalComponent implements OnInit {
  
  

  constructor() { }

  itemUrl: string;
  showImage: boolean = false;
  itemTitle: string;
  itemDescription: string;
  view: string = 'exp';

  eventImage(item: any){
    console.log(item);
    this.itemUrl = item.link;
    this.showImage = item.show;
    this.itemTitle = item.title;
    this.itemDescription = item.description;
  }

  ngOnInit(): void {
  }

  empresas = [
    {
      id: '1',
      link: 'assets/images/ids-logo.jpg',
      title: 'IDS Comercial',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    },
    {
      id: '2',
      link: 'assets/images/unam-logo.png',
      title: 'UNAM',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    }
  ];

}
