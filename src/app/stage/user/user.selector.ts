import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "src/app/model/user.model";


export const selectAllUsers = createFeatureSelector<Array<User>>("users");

export const selectCurrentUser = createFeatureSelector<User>("currentUser");

export const selectUserById =  (props: { id: number }) => 
    createSelector(
    selectAllUsers,
    (users : Array<User>) => users.find(user => user.id === props.id)
);