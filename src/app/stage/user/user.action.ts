import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user.model";

export const loadAllUsers = createAction(
    '[API] loading all classes'
)

export const loadAllUsersSuccess = createAction(
    '[Collection] inserting loaded classes',
    props<{users: Array<User>}>()
)



export const deleteUser = createAction(
    '[API] deletingUser',
    props<{id : number}>()     
)

export const deleteUserSucess = createAction(
    '[Collection] deletingUser',
    props<{id : number}>()     
)

export const whoami = createAction(
    '[API] Requesting User model of logged in User'
)

export const whoamiSuccess = createAction(
    '[Collection] adding User that sucessfull got returned from whoami',
    props<{user: User}>()
);