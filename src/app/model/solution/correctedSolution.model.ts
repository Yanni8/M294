import { Test } from "../test/test.model";
import { User } from "../user.model";
import { CorrectedAnswers } from "./correctedAnswers.model";

export interface CorrectedSolution{
    id: number,
    user: User,
    answers: Array<CorrectedAnswers>,
    templateTest: Test
}