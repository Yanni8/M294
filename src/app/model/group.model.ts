import { User } from "./user.model";

export interface Group{
    id?: number;
    groupName: String;
    users: Array<User>;
}