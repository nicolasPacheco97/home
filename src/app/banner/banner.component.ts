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
      link: 'https://drive.google.com/file/d/1Ajhop2HrrvC8Mske4QnS-2Moy9N58UKH/view?usp=sharing',
      title: 'Traje XL',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '2',
      link: 'https://drive.google.com/file/d/1liQshY39aQrR4vHa_dJBajGKxsFhU5if/view?usp=sharing',
      title: 'Suéter',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '3',
      link: 'https://drive.google.com/file/d/1zhTZCZTG74vfvRkFPH5WHnASiopXC1RG/view?usp=sharing',
      title: 'Suéter de estambre',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '4',
      link: 'https://drive.google.com/file/d/1oauqyUJoTJY6QA36NYrDA63kYq4satjS/view?usp=sharing',
      title: 'Romper',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '5',
      link: 'https://drive.google.com/file/d/1FLSEIka4nrxjREgutyWdf5rbEiKKYZFO/view?usp=sharing',
      title: 'Pesqueros y Camisa',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '6',
      link: 'https://drive.google.com/file/d/1YjC7oYyx4o-KV7ckbuuN0SDK4sZ-8C4r/view?usp=sharing',
      title: 'Met Gala - Harry Styles',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '7',
      link: 'https://drive.google.com/file/d/1vvI8_A1Pv3xT0qtsPWK72aJ0NIpZmtfJ/view?usp=sharing',
      title: 'Bienvenido',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
    {
      id: '8',
      link: 'https://drive.google.com/file/d/1rs5qkPkUUTFOuv52W6bXqToJvwRn1Gvg/view?usp=sharing',
      title: 'Error 404',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda'
    },
  ];
}
