import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/model/test/question.model';
import { Test } from 'src/app/model/test/test.model';
import { saveTest } from 'src/app/stage/test/test.action';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.less']
})
export class TestEditComponent {

  public testTitle = new FormControl("", [Validators.required, Validators.maxLength(250)]);
  public questions: Array<Question> = [];
  constructor(private router: Router, private store: Store, private route: ActivatedRoute) { }

  addNewQuestion() {
    this.questions.push({ question: "", answerPossibilities: [] })
  }

  saveTest() {

    if(!this.testTitle.value) {
      return;
    }
    
    const test: Test = {
      title: this.testTitle.value,
      questions: this.questions
    }

    this.store.dispatch(saveTest({ test: test }));


    this.router.navigate(['test', "administrator"]);
  }

  goBack() {
    this.router.navigate(['test', "administrator"])
  }

}
