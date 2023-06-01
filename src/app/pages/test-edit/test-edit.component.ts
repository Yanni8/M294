import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/model/test/question.model';
import { Test } from 'src/app/model/test/test.model';
import { fetchTestById, saveTest } from 'src/app/stage/test/test.action';
import { selectTestById } from 'src/app/stage/test/test.selector';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.less']
})
export class TestEditComponent implements OnInit{

  private test: Test | null = null;

  public testTitle = new FormControl("", [Validators.required, Validators.maxLength(250)]);
  public questions: Array<Question> = [];
  constructor(private router: Router, private store: Store, private route: ActivatedRoute){}

  ngOnInit(): void {

    const testId = this.route.snapshot.paramMap.get("id");

    if(testId !== null){
      
      this.store.select(selectTestById({id: +testId})).subscribe(test =>  {this.test = test || null; this.updateForm()});
54
      if(!this.test){
        this.store.dispatch(fetchTestById({id: +testId}));
      }
    }

  }

  updateForm(){
    if(this.test){
      this.testTitle.patchValue(this.test.title);
      this.questions = this.test.questions;
    }
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
