import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CorrectedSolution } from "src/app/model/solution/correctedSolution.model";

export const selectAllSolutions = createFeatureSelector<Array<CorrectedSolution>>("solutions");


export const selectAllSolutionsSorted = () =>
    createSelector(
        selectAllSolutions,
        (solutions: Array<CorrectedSolution>) => { solutions = [...solutions]; return solutions.sort((a, b) => a.id || 0 - (b.id || 0)) }
    );

export const selectSolutionById = (props: { id: number }) =>
    createSelector(
        selectAllSolutions,
        (solutions: Array<CorrectedSolution>) => solutions.find(solution => solution.id === props.id)
    );