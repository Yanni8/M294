import { createReducer, on } from "@ngrx/store";
import { Group } from "src/app/model/group.model";
import { loadAllGroupsSuccess } from "./group.action";

const INITIAL_STATE : Array<Group> = [];


export const groupReducer = createReducer(
    INITIAL_STATE,
    on(loadAllGroupsSuccess, (state, {groups}) => groups),
);