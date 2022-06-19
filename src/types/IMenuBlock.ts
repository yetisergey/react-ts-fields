import { IMenuButton } from "./IMenuButton";

export type IMenuBlock = {
    active: boolean;
    header: string;
    buttons: IMenuButton[];
}

