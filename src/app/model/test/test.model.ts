import { Group } from "../group.model"
import { User } from "../user.model"
import { Question } from "./question.model"

export interface Test{
    id?: number,
    title: string,
    questions: Array<Question>,
    groups?: Array<Group>,
    users?: Array<User>
}