import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractExtendedWebDriver } from 'protractor/built/browser';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.page.html',
  styleUrls: ['./first-question.page.scss'],
})
export class FirstQuestionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

public temperature:number = 0;
  GetTemperature(value){
this.temperature = value;
  }


  nextPage(){
    this.router.navigate(['second-question'])

  }


  btnDisabled = true;

  enableBtn() {
    this.btnDisabled = false;
  }

  prevPage(){
    this.router.navigate(['home'])
  }

}
