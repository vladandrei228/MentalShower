import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class thankyouPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextPage(){
    // this.router.navigate(['second-question'])
  }

  restartPage(){
    this.router.navigate(['home'])
  }

}
