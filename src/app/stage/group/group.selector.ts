import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Group } from "src/app/model/group.model";


export const selectAllGroups = createFeatureSelector<Array<Group>>("groups");

export const selectAllGroupsSorted = () =>
    createSelector(
        selectAllGroups,
        (groups: Array<Group>) => { groups = [...groups]; return groups.sort((a, b) => a.id || 0 - (b.id || 0)) }
    );

export const selectGroupById = (props: { id: number }) =>
    createSelector(
        selectAllGroups,
        (groups: Array<Group>) => groups.find(user => user.id === props.id)
    );