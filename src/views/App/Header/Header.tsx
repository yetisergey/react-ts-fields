import { AppViewMode } from "../../../enums/AppViewMode";
import { IHeader } from "../../../types/Header/IHeader";
import { IHeaderProps } from "../../../types/Header/IHeaderProps";
import * as Styled from "./Header.styled"

const headers: IHeader[] = [
    {
        link: '/react-ts-fields/add',
        name: 'Add',
        viewMode: AppViewMode.Add
    },
    {
        link: '/react-ts-fields/edit',
        name: 'Edit',
        viewMode: AppViewMode.Edit
    },
    {
        link: '/react-ts-fields/readonly',
        name: 'Readonly',
        viewMode: AppViewMode.Readonly
    }
]

export const Header = (props: IHeaderProps) => {
    const isActive = (viewMode: AppViewMode): boolean =>
        props.viewMode === viewMode;

    return (
        <Styled.HeaderContainer>
            {
                headers.map((header, index) =>
                (
                    <Styled.HeaderButton key={index} active={isActive(header.viewMode)}>
                        <Styled.HeaderButtonLink to={header.link}>{header.name}</Styled.HeaderButtonLink>
                    </Styled.HeaderButton>
                ))
            }
        </Styled.HeaderContainer>
    )
}  