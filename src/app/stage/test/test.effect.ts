import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TestService } from "src/app/service/test.service";
import { addNotification } from "../notification/notification.action";
import { addUserOrGroup, deleteTestById, deleteTestSuccess, fetchAllTestsAdministrator, fetchAllTestsSuccess, fetchOwnTests, fetchTestById, fetchTestSuccess, removeUserOrGroup, removeUserOrGroupSuccess, saveTest } from "./test.action";

@Injectable()
export class TestEffect {
    constructor(private actions$: Actions, private testService: TestService) { }

    getTests$ = createEffect(() => this.actions$.pipe(
        ofType(fetchAllTestsAdministrator),
        mergeMap(() => this.testService.getAllTests().pipe(
            map((tests) => fetchAllTestsSuccess({ tests: tests })),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting all Tests. Try it later again", isError: true })))
        )
        )
    ))

    saveTest$ = createEffect(() => this.actions$.pipe(
        ofType(saveTest),
        mergeMap(({test}) => this.testService.saveTest(test).pipe(
            map((test) => fetchTestSuccess({ test: test })),
            catchError(() => of(addNotification({ desc: "Someting went wrong creating a new Test. Try it later again", isError: true })))
        )
        )
    ))

    removeUserOrGroup$ = createEffect(() => this.actions$.pipe(
        ofType(removeUserOrGroup),
        mergeMap(({idType, testId, userGroupId}) => this.testService.removeUserOrGroup(testId, userGroupId, idType).pipe(
            map(() => removeUserOrGroupSuccess({ idType: idType, testId: testId, userGroupId: userGroupId })),
            catchError(() => of(addNotification({ desc: "Someting went wrong removing a User or a Group. Try it later again", isError: true })))
        )
        )
    ))

    fetchTestById$ = createEffect(() => this.actions$.pipe(
        ofType(fetchTestById),
        mergeMap(({id}) => this.testService.getTestById(id).pipe(
            map((test) => fetchTestSuccess({test: test})),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting a Test. Try it later again", isError: true })))
        )
        )
    ))

    deleteTestById$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTestById),
        mergeMap(({id}) => this.testService.deleteTest(id).pipe(
            map(() => deleteTestSuccess({id: id})),
            catchError(() => of(addNotification({ desc: "Someting went wrong deleting a Test. Try it later again", isError: true })))
        )
        )
    ))

    addUserOrGroup$ = createEffect(() => this.actions$.pipe(
        ofType(addUserOrGroup),
        mergeMap(({idType, testId, userGroupId}) => this.testService.addUserOrGroup(testId, userGroupId, idType).pipe(
            map(() => fetchTestById({id: testId})),
            catchError(() => of(addNotification({ desc: "Someting went wrong deleting a Test. Try it later again", isError: true })))
        )
        )
    ))
    fetchOwnTests$ = createEffect(() => this.actions$.pipe(
        ofType(fetchOwnTests),
        mergeMap(() => this.testService.whoami().pipe(
            map((tests) => fetchAllTestsSuccess({tests: tests})))),
            catchError(() => of(addNotification({ desc: "Someting went wrong deleting a Test. Try it later again", isError: true })))
        )
        );
}