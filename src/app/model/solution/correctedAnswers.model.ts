import { AnswerPossibilities } from "../test/answerPossibilities.model";
import { Question } from "../test/question.model";

export interface CorrectedAnswers{
    id: number,
    question: Question,
    right: Array<AnswerPossibilities>
    wrong: Array<AnswerPossibilities>
}