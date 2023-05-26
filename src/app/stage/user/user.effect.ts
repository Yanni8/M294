import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/service/user.service";
import { addNotification } from "../notification/notification.action";
import { loadAllUsers, loadAllUsersSuccess } from "./user.action";

@Injectable()
export class UserEffect {
    constructor(private actions$: Actions, private userService: UserService) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadAllUsers),
        mergeMap(() => this.userService.getUsers().pipe(
            map((users) => loadAllUsersSuccess({users: users})),
            catchError(error => of(addNotification({ desc: "Someting went wrong requesting all Users. Try it later again", isError: true })))
        )
        )
    ))
};