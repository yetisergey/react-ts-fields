import { FieldType } from "../enums/FieldType";

export type IMenuButton = {
    icon: JSX.Element;
    name: string;
    type?: FieldType | undefined;
}