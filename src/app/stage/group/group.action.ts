import { createAction, props } from "@ngrx/store";
import { Group } from "src/app/model/group.model";


export const loadAllGroups = createAction(
    '[API] loading all Groups'
);

export const loadAllGroupsSuccess = createAction(
    '[Collection] saving load groups to collection',
    props<{groups: Array<Group>}>()
);