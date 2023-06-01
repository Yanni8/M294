import { createFeatureSelector } from "@ngrx/store";
import { CorrectedSolution } from "src/app/model/solution/correctedSolution.model";

export const selectAllSolutions = createFeatureSelector<Array<CorrectedSolution>>("solutions");
