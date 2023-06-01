import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Answer } from 'src/app/model/solution/answer.model';
import { Solution } from 'src/app/model/solution/solution.model';
import { Test } from 'src/app/model/test/test.model';
import { fetchOwnTestById, fetchTestById } from 'src/app/stage/test/test.action';
import { selectTestById } from 'src/app/stage/test/test.selector';

@Component({
  selector: 'app-solve-test',
  templateUrl: './solve-test.component.html',
  styleUrls: ['./solve-test.component.less']
})
export class SolveTestComponent implements OnInit {

  public test?: Test;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const testId = this.route.snapshot.paramMap.get("id");
    if (!testId) {
      return;
    }

    this.store.select(selectTestById({ id: +testId })).subscribe(test => { this.test = this.updateRendering(test) || undefined; });
    if (!this.test) {
      this.store.dispatch(fetchOwnTestById({ id: +testId }));
    }
  }


  updateRendering(test: Test | undefined): undefined | Test {
    if (!test) {
      return undefined;
    }
    let questions = [];
    for (let question of test.questions) {
      question = { ...question };
      let answerPossibilities = [];
      for (let _answerPossibilitie of question.answerPossibilities) {
        answerPossibilities.push({ ..._answerPossibilitie, correctAnswer: false });
      }
      question.answerPossibilities = answerPossibilities;
      questions.push(question);
    }
    test = { ...test };
    test.questions = questions;
    return test;
  }

  submitAnswers() {

    if (!this.test?.questions) {
      return;
    }
    let solution: Solution = { answers: [] };

    for (let question of this.test.questions) {
      
      if (!question.id) { continue }

      let answer: Answer = { id: question.id, notSelected: [], selected: [] };
      for (let userAnswer of question.answerPossibilities) {
        if (userAnswer.correctAnswer) {
          answer.selected.push(userAnswer);
        } else {
          answer.notSelected.push(userAnswer);
        }
      }
      solution.answers.push(answer);
    }

    console.log(solution);
  }
  goBack() {
    this.router.navigate(["test"]);
  }


}
