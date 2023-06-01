import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/test/question.model';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.less']
})
export class TestEditComponent implements OnInit{

  public testTitle = new FormControl("", [Validators.required, Validators.maxLength(250)]);
  public questions: Array<Question> = [];
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  addNewQuestion(){
    this.questions.push({question: "", answerPossibilities: []})
  }

  goBack(){ 
    this.router.navigate(['test'])
  }

}
