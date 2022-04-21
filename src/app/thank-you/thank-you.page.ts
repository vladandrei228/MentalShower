import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class thankyouPage implements OnInit {

  answerZone:number;

  constructor(private router: Router) { }



  ngOnInit() {
   this.answerZone = parseInt(localStorage.getItem('zoneSelection'));




  }

  nextPage(){
    // this.router.navigate(['second-question'])
  }

  restartPage(){
    this.router.navigate(['home'])
  }


}
