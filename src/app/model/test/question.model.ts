import { AnswerPossibilities } from "./answerPossibilities.model";

export interface Question{
    id?: number,
    question: string,
    answerPossibilities: Array<AnswerPossibilities>
}