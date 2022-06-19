import { FieldType } from "../enums/FieldType";

export type MenuButton = {
    icon: JSX.Element;
    name: string;
    type?: FieldType;
}