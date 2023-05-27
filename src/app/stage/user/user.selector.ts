import { createFeatureSelector } from "@ngrx/store";
import { User } from "src/app/model/user.model";


export const selectAllUsers = createFeatureSelector<Array<User>>("users");

export const selectCurrentUser = createFeatureSelector<User>("currentUser");