import { createAction, props } from "@ngrx/store";
import { Solution } from "src/app/model/solution/solution.model";

export const saveSolution = createAction(
    '[API] saving new Solution',
    props<{solution: Solution, userId: number, testId: number}>()
)