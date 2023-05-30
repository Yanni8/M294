import { createReducer, on } from "@ngrx/store";
import { Group } from "src/app/model/group.model";
import { loadAllGroupsSuccess, loadGroupSuccess } from "./group.action";

const INITIAL_STATE : Array<Group> = [];


export const groupReducer = createReducer(
    INITIAL_STATE,
    on(loadAllGroupsSuccess, (state, {groups}) => groups),
    on(loadGroupSuccess, (state, {group}) => {state = state.filter(_group => group.id !== _group.id); return state.concat(group)})
);