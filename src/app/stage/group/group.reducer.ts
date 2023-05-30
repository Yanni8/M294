import { createReducer, on } from "@ngrx/store";
import { Group } from "src/app/model/group.model";
import { deleteGroupSuccess, loadAllGroupsSuccess, loadGroupSuccess } from "./group.action";

const INITIAL_STATE : Array<Group> = [];


export const groupReducer = createReducer(
    INITIAL_STATE,
    on(loadAllGroupsSuccess, (state, {groups}) => groups),
    on(loadGroupSuccess, (state, {group}) => {state = state.filter(_group => group.id !== _group.id); return state.concat(group)}),
    on(deleteGroupSuccess, (state, {groupId}) => state.filter(group => group.id !== groupId))
);