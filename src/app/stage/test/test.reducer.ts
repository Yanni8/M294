import { createReducer, on } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";
import { fetchAllTestsSuccess } from "./test.action";

const INITIAL_STATE : Array<Test> = [];


export const testReducer = createReducer(
    INITIAL_STATE,
    on(fetchAllTestsSuccess, (state, {tests}) => tests),
);