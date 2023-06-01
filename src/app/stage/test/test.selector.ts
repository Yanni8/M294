import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";

export const selectAllTests = createFeatureSelector<Array<Test>>("tests");

export const selectAllTestsSorted = () => createSelector(
    selectAllTests,
    (tests: Array<Test>) => { tests = [...tests]; return tests.sort((a, b) => a.id || 0 - (b.id || 0)) }
);
export const selectTestById = (props: { id: number }) => createSelector(
    selectAllTests,
    (tests: Array<Test>) => tests.find(test => test.id === props.id)
);