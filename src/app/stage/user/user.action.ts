import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user.model";

export const loadAllUsers = createAction(
    '[API] loading all classes'
)

export const loadAllUsersSuccess = createAction(
    '[Collection] inserting loaded classes',
    props<{users: Array<User>}>()
)