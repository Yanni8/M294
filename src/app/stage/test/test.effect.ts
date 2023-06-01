import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TestService } from "src/app/service/test.service";
import { addNotification } from "../notification/notification.action";
import { fetchAllTestsAdministrator, fetchAllTestsSuccess } from "./test.action";

@Injectable()
export class TestEffect {
    constructor(private actions$: Actions, private testService: TestService) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(fetchAllTestsAdministrator),
        mergeMap(() => this.testService.getAllTests().pipe(
            map((tests) => fetchAllTestsSuccess({ tests: tests })),
            catchError(error => of(addNotification({ desc: "Someting went wrong requesting all Tests. Try it later again", isError: true })))
        )
        )
    ))
}