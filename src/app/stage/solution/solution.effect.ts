import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SolutionService } from "src/app/service/solution.service";
import { addNotification } from "../notification/notification.action";
import { fetchAllSolutions, fetchAllSolutionsSuccess, fetchSolutionById, fetchSolutionSuccess, saveSolution } from "./solution.action";

@Injectable()
export class SolutionEffect {
    constructor(private actions$: Actions, private solutionService: SolutionService) { }

    saveSolution$ = createEffect(() => this.actions$.pipe(
        ofType(saveSolution),
        mergeMap(({ solution, testId, userId }) => this.solutionService.submitSolution(solution, testId, userId).pipe(
            map(() => addNotification({ desc: "Successfull submitted Test :)", isError: false })),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting all Tests. Try it later again", isError: true })))
        )
        )
    ))

    getAllSolutions$ = createEffect(() => this.actions$.pipe(
        ofType(fetchAllSolutions),
        mergeMap(() => this.solutionService.getSolutions().pipe(
            map((solutions) => fetchAllSolutionsSuccess({ solutions: solutions })),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting all Sollutions. Try it later again", isError: true })))
        )
        )
    ))

    getSolutionByID$ = createEffect(() => this.actions$.pipe(
        ofType(fetchSolutionById),
        mergeMap(({id}) => this.solutionService.getSolutionById(id).pipe(
            map((solution) => fetchSolutionSuccess({ solution: solution })),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting getting one Sollution. Try it later again", isError: true })))
        )
        )
    ))
}