import { createAction, props } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";

export const fetchAllTestsAdministrator = createAction(
    '[API] fetchin ALL available tests'
)

export const fetchAllTestsSuccess = createAction(
    '[Collection] load fetched tests in storage',
    props<{tests: Array<Test>}>()
)