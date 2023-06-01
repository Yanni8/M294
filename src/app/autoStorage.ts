import { Store } from "@ngrx/store";
import { OAuthStorage } from "angular-oauth2-oidc";
import { AppInjector } from "./app.module";
import { whoami } from "./stage/user/user.action";

export class CustomAuthStorage implements OAuthStorage {

    private store!: Store;

    removeItem(key: string): void {
        if (this.store == null && AppInjector) {
            this.store = AppInjector.get(Store);
        }
        localStorage.removeItem(key);
    }

    setItem(key: string, value: string): void {
        if (this.store == null && AppInjector) {
            this.store = AppInjector.get(Store);
        }
        if (key === "access_token" && this.store) {
            this.store.dispatch(whoami());
        }
        localStorage.setItem(key, value);
    }

    getItem(key: string): string | null {
        if (this.store == null && AppInjector) {
            this.store = AppInjector.get(Store);
        }
        return localStorage.getItem(key);
    }
}