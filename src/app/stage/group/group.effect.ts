import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { GroupService } from "src/app/service/group.service";
import { addNotification } from "../notification/notification.action";
import { loadAllGroups, loadAllGroupsSuccess } from "./group.action";

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
}