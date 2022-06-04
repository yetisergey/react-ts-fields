import { AppViewMode } from "../enums/AppViewMode";
import { FieldViewMode } from "../enums/FieldViewMode";

export const appViewModeToFieldViewMode =
    (appViewMode: AppViewMode): FieldViewMode => {
        switch (appViewMode) {
            case AppViewMode.Add:
                return FieldViewMode.Normal;
            case AppViewMode.Edit:
                return FieldViewMode.Normal;
            case AppViewMode.Readonly:
                return FieldViewMode.ReadOnly
        }
    }