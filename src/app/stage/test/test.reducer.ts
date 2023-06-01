import { createReducer, on } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";
import { fetchAllTestsSuccess, fetchTestSuccess } from "./test.action";

const INITIAL_STATE : Array<Test> = [];


export const testReducer = createReducer(
    INITIAL_STATE,
    on(fetchAllTestsSuccess, (state, {tests}) => tests),
    on(fetchTestSuccess, (state, {test}) => {state = state.filter(_test => _test.id !== test.id); return state.concat(test)})
);