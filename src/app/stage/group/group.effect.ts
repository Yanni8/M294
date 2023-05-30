import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { GroupService } from "src/app/service/group.service";
import { addNotification } from "../notification/notification.action";
import { createGroup, deleteGroup, deleteGroupSuccess, inviteUserToGroup, loadAllGroups, loadAllGroupsSuccess, loadGroupSuccess, removeUser } from "./group.action";

@Injectable()
export class GroupEffect {
    constructor(private actions$: Actions, private groupService: GroupService) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadAllGroups),
        mergeMap(() => this.groupService.getGroups().pipe(
            map((groups) => loadAllGroupsSuccess({ groups: groups })),
            catchError(error => of(addNotification({ desc: "Someting went wrong requesting all Groups. Try it later again", isError: true })))
        )
        )
    ))

    inviteUser$ = createEffect(() => this.actions$.pipe(
        ofType(inviteUserToGroup),
        mergeMap(({user, groupId}) => this.groupService.inviteUser(user, groupId).pipe(
            map((group) => loadGroupSuccess({ group: group })),
            catchError(error => of(addNotification({ desc: "Someting went wrong inviting a user to a group. Try it later again", isError: true })))
        )
        )
    ))

    removeUser$ = createEffect(() => this.actions$.pipe(
        ofType(removeUser),
        mergeMap(({user, groupId}) => this.groupService.removeUser(user, groupId).pipe(
            map((group) => loadGroupSuccess({ group: group })),
            catchError(error => of(addNotification({ desc: "Someting went wrong removing a user from a group. Try it later again", isError: true })))
        )
        )
    ))

    deleteGroup$ = createEffect(() => this.actions$.pipe(
        ofType(deleteGroup),
        mergeMap(({groupId}) => this.groupService.deleteGroup(groupId).pipe(
            map(() => deleteGroupSuccess({ groupId: groupId })),
            catchError(error => of(addNotification({ desc: "Someting went wrong removing a group. Try it later again", isError: true })))
        )
        )
    ))

    createGroup$ = createEffect(() => this.actions$.pipe(
        ofType(createGroup),
        mergeMap(({group}) => this.groupService.createGroup(group).pipe(
            map((group) => loadGroupSuccess({ group: group })),
            catchError(error => of(addNotification({ desc: "Someting went wrong creating a new group. Try it later again", isError: true })))
        )
        )
    ))
}