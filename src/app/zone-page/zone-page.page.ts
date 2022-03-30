import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-page',
  templateUrl: './zone-page.page.html',
  styleUrls: ['./zone-page.page.scss'],
})
export class ZonePagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isValue: number = 0;

  toggle(num) { this.isValue = num; }

}
