import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('holi');
  }

  @Input() items: any;
  @Output() loadImageOut = new EventEmitter<any>();

  loadImage(item){
    console.log('press', item);
    this.loadImageOut.emit(item);
  }
}
