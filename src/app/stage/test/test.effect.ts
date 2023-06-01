import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, USER_PROVIDED_EFFECTS } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TestService } from "src/app/service/test.service";
import { addNotification } from "../notification/notification.action";
import { fetchAllTestsAdministrator, fetchAllTestsSuccess, fetchTestById, fetchTestSuccess, removeUserOrGroup, removeUserOrGroupSuccess, saveTest } from "./test.action";

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

    removeUserOrGroup$ = createEffect(() => this.actions$.pipe(
        ofType(removeUserOrGroup),
        mergeMap(({idType, testId, userGroupId}) => this.testService.removeUserOrGroup(testId, userGroupId, idType).pipe(
            map((test) => removeUserOrGroupSuccess({ idType: idType, testId: testId, userGroupId: userGroupId })),
            catchError(error => of(addNotification({ desc: "Someting went wrong removing a User or a Group. Try it later again", isError: true })))
        )
        )
    ))

    fetchTestById$ = createEffect(() => this.actions$.pipe(
        ofType(fetchTestById),
        mergeMap(({id}) => this.testService.getTestById(id).pipe(
            map((test) => fetchTestSuccess({test: test})),
            catchError(error => of(addNotification({ desc: "Someting went wrong requesting a Test. Try it later again", isError: true })))
        )
        )
    ))
}