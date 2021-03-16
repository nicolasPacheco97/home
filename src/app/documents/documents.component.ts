import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  documents = [
    {
      id: '0',
      link: '',
      title: 'Documentos',
      date: '',
      description: '',
      show: false
    },
    {
      id: '1',
      link: 'assets/images/CV.png',
      title: 'CV',
      date: '2020 01 01',
      description: 'Un traje creado como vista a la moda',
      show: true
    }];
}
