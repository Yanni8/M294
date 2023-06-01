import { createAction, props } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";

export const fetchAllTestsAdministrator = createAction(
    '[API] fetchin ALL available tests'
)

export const fetchAllTestsSuccess = createAction(
    '[Collection] load fetched tests in storage',
    props<{ tests: Array<Test> }>()
)

export const saveTest = createAction(
    '[API] saving new Test',
    props<{ test: Test }>()
)

export const fetchTestSuccess = createAction(
    '[Collecton] loading fetched test',
    props<{ test: Test }>()
);

export const removeUserOrGroup = createAction(
    '[API] removing user or Group from test',
    props<{testId: number, userGroupId: number, idType: string}>()
);

export const removeUserOrGroupSuccess = createAction(
    '[Collection] removing user or group from collecton',
    props<{testId: number, userGroupId: number, idType: string}>()
) 

export const fetchTestById = createAction(
    '[API] fetching test by id',
    props<{id: number}>()
)

export const deleteTestById = createAction(
    '[API] deleting Test',
    props<{id: number}>()
)

export const deleteTestSuccess = createAction(
    '[Collection] deleting in collection',
    props<{id: number}>()
)