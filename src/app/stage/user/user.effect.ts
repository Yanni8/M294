import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/service/user.service";
import { addNotification } from "../notification/notification.action";
import { createUser, deleteUser, deleteUserSucess, loadAllUsers, loadAllUsersSuccess, loadUserById, loadUserSuccess, updateUser, updateUserSuccess, whoami, whoamiSuccess } from "./user.action";

@Injectable()
export class UserEffect {
    constructor(private actions$: Actions, private userService: UserService) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadAllUsers),
        mergeMap(() => this.userService.getUsers().pipe(
            map((users) => loadAllUsersSuccess({ users: users })),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting all Users. Try it later again", isError: true })))
        )
        )
    ))

    whoami$ = createEffect(() => this.actions$.pipe(
        ofType(whoami),
        mergeMap(() => this.userService.whoami().pipe(
            map((user) => whoamiSuccess({ user: user })),
            catchError(() => of(addNotification({ desc: "You need to sing up in to use this Application", isError: true })))
        )
        )
    ))

    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(deleteUser),
        mergeMap(({ id }) => this.userService.deleteUser(id).pipe(
            map(() => deleteUserSucess({ id: id })),
            catchError(() => of(addNotification({ desc: "Something went wrong why trying to delete a User", isError: true })))
        )
        )
    ))

    getUsersById$ = createEffect(() => this.actions$.pipe(
        ofType(loadUserById),
        mergeMap(({ id }) => this.userService.getUserById(id).pipe(
            map((user) => loadUserSuccess({ user: user })),
            catchError(() => of(addNotification({ desc: "Someting went wrong requesting a Users. Try it later again", isError: true })))
        )
        )
    ))

    updateUser$ = createEffect(() => this.actions$.pipe(
        ofType(updateUser),
        mergeMap(({ user }) => this.userService.updateUser(user).pipe(
            map((user) => updateUserSuccess({ user: user })),
            catchError(() => of(addNotification({ desc: "Someting went wrong updating a Users. Try it later again", isError: true })))
        )
        )
    ))


    saveUser$ = createEffect(() => this.actions$.pipe(
        ofType(createUser),
        mergeMap(({ user }) => this.userService.saveUser(user).pipe(
            map((user) => loadUserSuccess({ user: user })),
            catchError(() => of(addNotification({ desc: "Someting went wrong creating a new Users. Try it later again", isError: true })))
        )
        )
    ))

}