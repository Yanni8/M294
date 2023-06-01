import { AnswerPossibilities } from "../test/answerPossibilities.model";

export interface Answer{
    id: number,
    selected: Array<AnswerPossibilities>,
    notSelected: Array<AnswerPossibilities>
}