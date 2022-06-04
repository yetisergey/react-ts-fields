import { IMenuButton } from "./IMenuButton";

export interface IMenuBlock {
    active: boolean;
    header: string;
    buttons: IMenuButton[];
}

