import { UserEditComponent } from "src/app/pages/user-edit/user-edit.component";
import { Test } from "../test/test.model";
import { User } from "../user.model";
import { CorrectedAnswers } from "./correctedAnswers.model";

export interface CorrectedSolution{
    id: number,
    user: User,
    answers: Array<CorrectedAnswers>,
    templateTest: Test
}