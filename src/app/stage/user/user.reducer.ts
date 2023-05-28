import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/model/user.model";
import { deleteUserSucess, loadAllUsersSuccess, loadUserSuccess, whoamiSuccess } from "./user.action";

const INITIAL_STATE : Array<User> = [];


export const userReducer = createReducer(
    INITIAL_STATE,
    on(loadAllUsersSuccess, (state, {users}) => users),
    on(deleteUserSucess, (state, {id}) => state.filter(user => user.id !== id)),
    on(loadUserSuccess, (state, {user}) => state.concat(user))
);

export const whoamiReducer = createReducer(
    null as any,
    on(whoamiSuccess, (state, {user}) => user)
);