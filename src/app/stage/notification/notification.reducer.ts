import { createReducer, on } from "@ngrx/store"
import { Notification } from "src/app/model/notification.model"
import { addNotification, removeFirstNotification } from "./notification.action"

const INITIAL_STATE: Array<Notification> = []


export const notificationReducer = createReducer(
    INITIAL_STATE,
    on(addNotification,(state, notification) => state.concat(notification)),
    on(removeFirstNotification, (state) => {
        if(state.length != 0){
            state.shift()
        }
        return state;
    })
);