import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private router: Router) {}

  nextPage(){
    this.router.navigate(['first-question'])
  }

  ngOnInit() {}

  isValue: number = 0;
  btnDisabled = true;

show:string = "";
  showRoom(roomID) {
    this.show = roomID;
  }


  toggle(num) { this.isValue = num; this.btnDisabled = false; 
  
  localStorage.setItem('zoneSelection', num);

//  console.log(localStorage.getItem('zoneSelection'));

  }




 
}





