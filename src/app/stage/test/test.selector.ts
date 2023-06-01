import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";

export const selectAllTests = createFeatureSelector<Array<Test>>("tests");

export const selectTestById = (props: { id: number }) =>  createSelector(
    selectAllTests,
    (tests : Array<Test>) => tests.find(test => test.id === props.id)
);