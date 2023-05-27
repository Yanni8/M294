import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/model/user.model";
import { loadAllUsersSuccess, whoamiSuccess } from "./user.action";

const INITIAL_STATE : Array<User> = [];


export const userReducer = createReducer(
    INITIAL_STATE,
    on(loadAllUsersSuccess, (state, {users}) => users)
);

export const whoamiReducer = createReducer(
    null as any,
    on(whoamiSuccess, (state, {user}) => user)
);