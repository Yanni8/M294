import { createFeatureSelector } from "@ngrx/store";
import { Notification } from "src/app/model/notification.model";


export const selectAllNotifications = createFeatureSelector<Array<Notification>>("notifications");