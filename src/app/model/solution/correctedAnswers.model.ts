import { AnswerPossibilities } from "../test/answerPossibilities.model";
import { Question } from "../test/question.model";
import { Answer } from "./answer.model";

export interface CorrectedAnswers{
    id: number,
    question: Question,
    right: Array<AnswerPossibilities>
    wrong: Array<AnswerPossibilities>
}