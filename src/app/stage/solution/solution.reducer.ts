import { createReducer, on } from "@ngrx/store";
import { CorrectedSolution } from "src/app/model/solution/correctedSolution.model";
import { fetchAllSolutionsSuccess, fetchSolutionSuccess } from "./solution.action";

const INITIAL_STATE: Array<CorrectedSolution> = [];


export const solutuionReducer = createReducer(
    INITIAL_STATE,
    on(fetchAllSolutionsSuccess, (state, { solutions }) => solutions),
    on(fetchSolutionSuccess, (state, { solution }) => { state = state.filter(_solution => _solution.id !== solution.id); return state.concat(solution) })
);