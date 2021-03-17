import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  documentName: string;
  showDocument: boolean;
  itemUrl: string;
  ngOnInit(): void {
  }

  eventDocuemnt(document)
  {
    this.documentName = document.title;
    this.showDocument = document.show;
    this.itemUrl = document.link;
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
