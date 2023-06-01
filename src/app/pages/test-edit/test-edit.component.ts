import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/model/test/question.model';
import { Test } from 'src/app/model/test/test.model';
import { saveTest } from 'src/app/stage/test/test.action';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.less']
})
export class TestEditComponent implements OnInit{

  public testTitle = new FormControl("", [Validators.required, Validators.maxLength(250)]);
  public questions: Array<Question> = [];
  constructor(private router: Router, private store: Store){}

  ngOnInit(): void {
    
  }

  addNewQuestion(){
    this.questions.push({question: "", answerPossibilities: []})
  }

  saveTest(){

    let test: Test = {
      title: this.testTitle.value!,
      questions: this.questions
    }

    this.store.dispatch(saveTest({test: test}));
    this.router.navigate(['test']);
  }

  goBack(){ 
    this.router.navigate(['test'])
  }

}
