import { createReducer, on } from "@ngrx/store";
import { CorrectedSolution } from "src/app/model/solution/correctedSolution.model";
import { fetchAllSolutionsSuccess } from "./solution.action";

const INITIAL_STATE : Array<CorrectedSolution> = [];


export const solutuionReducer = createReducer(
    INITIAL_STATE,
    on(fetchAllSolutionsSuccess, (state, {solutions}) => solutions),
);