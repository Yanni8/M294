import { createAction, props } from "@ngrx/store";
import { CorrectedSolution } from "src/app/model/solution/correctedSolution.model";
import { Solution } from "src/app/model/solution/solution.model";

export const saveSolution = createAction(
    '[API] saving new Solution',
    props<{solution: Solution, userId: number, testId: number}>()
)

export const fetchAllSolutions = createAction(
    '[API] fetching all Solutions'
)

export const fetchAllSolutionsSuccess = createAction(
    '[Collecton] storing fetched solutions',
    props<{solutions: Array<CorrectedSolution>}>()
)