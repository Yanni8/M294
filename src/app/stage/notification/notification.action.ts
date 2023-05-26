import { createAction, props } from "@ngrx/store"
import { Notification } from "src/app/model/notification.model"

export const addNotification = createAction(
    '[Collection] addingNotifiction',
    props<Notification>()
);

export const removeFirstNotification = createAction(
    '[Collection] removing first notification'
);