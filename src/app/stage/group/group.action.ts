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
    '[API] removing User from Group',
    props<{user: User, groupId: number}>()
)

export const deleteGroup = createAction(
    '[API] removing Group',
    props<{groupId: number}>()
)

export const deleteGroupSuccess = createAction(
    '[Collection] removing Group that got deleted',
    props<{groupId: number}>()
)

export const createGroup = createAction(
    '[API] creating new Group',
    props<{group: Group}>()
)

export const loadGroupById = createAction(
    '[API] loading group by id',
    props<{id: number}>()
)

export const updateGroup = createAction(
    '[API] unpdating a group',
    props<{group: Group}>()
)