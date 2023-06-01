import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Answer } from 'src/app/model/solution/answer.model';
import { Solution } from 'src/app/model/solution/solution.model';
import { Test } from 'src/app/model/test/test.model';
import { User } from 'src/app/model/user.model';
import { saveSolution } from 'src/app/stage/solution/solution.action';
import { fetchOwnTestById } from 'src/app/stage/test/test.action';
import { selectTestById } from 'src/app/stage/test/test.selector';
import { selectCurrentUser } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-solve-test',
  templateUrl: './solve-test.component.html',
  styleUrls: ['./solve-test.component.less']
})
export class SolveTestComponent implements OnInit {

  public test?: Test;
  private testId = 0;
  private me?: User;
  constructor(private store: Store, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => this.me = user);
    const testId = this.route.snapshot.paramMap.get("id");
    if (!testId) {
      return;
    }
    this.testId = +testId;
    this.store.select(selectTestById({ id: +testId })).subscribe(test => { this.test = this.updateRendering(test) || undefined; });
    if (!this.test) {
      this.store.dispatch(fetchOwnTestById({ id: +testId }));
    }
  }


  updateRendering(test: Test | undefined): undefined | Test {
    if (!test) {
      return undefined;
    }
    const questions = [];
    for (let question of test.questions) {
      question = { ...question };
      const answerPossibilities = [];
      for (const _answerPossibilitie of question.answerPossibilities) {
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

    if (!this.test?.questions || !this.me?.id) {
      return;
    }
    const solution: Solution = { answers: [] };

    for (const question of this.test.questions) {
      
      if (!question.id) { continue }

      const answer: Answer = { id: question.id, notSelected: [], selected: [] };
      for (const userAnswer of question.answerPossibilities) {
        if (userAnswer.correctAnswer) {
          answer.selected.push(userAnswer);
        } else {
          answer.notSelected.push(userAnswer);
        }
      }
      solution.answers.push(answer);
    }

    this.store.dispatch(saveSolution({solution: solution, testId: this.testId, userId: this.me.id}))
    this.router.navigate(["test"]);
  }
  goBack() {
    this.router.navigate(["test"]);
  }


}
