import { createAction, createReducer, props } from "@ngrx/store";
import { Group } from "src/app/model/group.model";
import { User } from "src/app/model/user.model";


export const loadAllGroups = createAction(
    '[API] loading all Groups'
);

export const loadAllGroupsSuccess = createAction(
    '[Collection] saving load groups to collection',
    props<{groups: Array<Group>}>()
);

export const inviteUserToGroup = createAction(
    '[API] inviting User to group',
    props<{user: User, groupId: number}>()
)

export const loadGroupSuccess = createAction(
    '[API] loading Group success',
    props<{group: Group}>()
)

export const removeUser = createAction(
    '[API] removing User',
    props<{user: User, groupId: number}>()
)