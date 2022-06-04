import { FieldViewMode } from "../../enums/FieldViewMode";
import { FieldType } from "../../enums/FieldType";

export interface IFieldProps {
    type: FieldType;
    viewMode: FieldViewMode;
}