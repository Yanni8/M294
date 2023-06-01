import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TestService } from "src/app/service/test.service";
import { addNotification } from "../notification/notification.action";
import { fetchAllTestsAdministrator, fetchAllTestsSuccess, fetchTestSuccess, saveTest } from "./test.action";

@Injectable()
export class TestEffect {
    constructor(private actions$: Actions, private testService: TestService) { }

    getTests$ = createEffect(() => this.actions$.pipe(
        ofType(fetchAllTestsAdministrator),
        mergeMap(() => this.testService.getAllTests().pipe(
            map((tests) => fetchAllTestsSuccess({ tests: tests })),
            catchError(error => of(addNotification({ desc: "Someting went wrong requesting all Tests. Try it later again", isError: true })))
        )
        )
    ))

    saveTest$ = createEffect(() => this.actions$.pipe(
        ofType(saveTest),
        mergeMap(({test}) => this.testService.saveTest(test).pipe(
            map((test) => fetchTestSuccess({ test: test })),
            catchError(error => of(addNotification({ desc: "Someting went wrong creating a new Test. Try it later again", isError: true })))
        )
        )
    ))
}