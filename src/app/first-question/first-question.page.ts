import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.page.html',
  styleUrls: ['./first-question.page.scss'],
})
export class FirstQuestionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextPage(){
    this.router.navigate(['second-question'])
  }

}
