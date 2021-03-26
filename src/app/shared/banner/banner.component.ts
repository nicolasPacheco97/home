import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('frame') frame: ModalDirective;

  itemUrl: string;

  constructor() { }

  ngOnInit(): void {
    console.log('holi');
  }

  @Input() items: any;
  @Input() view: any;
  @Output() loadImageOut = new EventEmitter<any>();

  loadImage(item){
    console.log('press', item);
    this.loadImageOut.emit(item);
  }

  eyePush(event){
    console.log(event);
    this.frame.show();
    this.itemUrl = event.link;
    console.log(this.itemUrl);
  }
}
