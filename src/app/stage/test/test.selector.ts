import { createFeatureSelector } from "@ngrx/store";
import { Test } from "src/app/model/test/test.model";

export const selectAllTests = createFeatureSelector<Array<Test>>("tests");
