import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.page.html',
  styleUrls: ['./second-question.page.scss'],
})
export class SecondQuestionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  nextPage(){
    this.router.navigate(['third-question'])
  }

}
