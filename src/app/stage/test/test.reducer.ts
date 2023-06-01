import { createReducer, on } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";
import { fetchAllTestsSuccess, fetchTestSuccess, removeUserOrGroupSuccess } from "./test.action";

const INITIAL_STATE: Array<Test> = [];


export const testReducer = createReducer(
    INITIAL_STATE,
    on(fetchAllTestsSuccess, (state, { tests }) => tests),
    on(fetchTestSuccess, (state, { test }) => { state = state.filter(_test => _test.id !== test.id); return state.concat(test) }),
    on(removeUserOrGroupSuccess, (state, { idType, testId, userGroupId }) => { 
        state = [...state];
        const idx = state.findIndex(test => test.id === testId); 
        if(idx === -1){
            return state;
        }
        const test = {...state[idx]};

        if(idType === "user"){
            test.users = test.users?.filter(user => user.id !== userGroupId);
        } else{
            test.groups = test.groups?.filter(group => group.id !== userGroupId);
        }

        state[idx] = test;
        
        return state 
    })
);