import { FieldType } from "../enums/FieldType";

export interface IMenuButton {
    icon: JSX.Element;
    name: string;
    type?: FieldType | undefined;
}