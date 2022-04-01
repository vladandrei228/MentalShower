import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.page.html',
  styleUrls: ['./third-question.page.scss'],
})
export class ThirdQuestionPage implements OnInit {

  constructor(private router: Router) { }



  prevPage(){
    this.router.navigate(['second-question'])
  }

    
  nextPage(){
    this.router.navigate(['thank-you'])
  }



  ngOnInit() {
  }

}
