import { createFeatureSelector } from "@ngrx/store";
import { Group } from "src/app/model/group.model";


export const selectAllGroups = createFeatureSelector<Array<Group>>("groups");
