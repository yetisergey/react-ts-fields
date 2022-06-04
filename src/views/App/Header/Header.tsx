import { AppViewMode } from "../../../enums/AppViewMode";
import { IHeader } from "../../../types/Header/IHeader";
import { IHeaderProps } from "../../../types/Header/IHeaderProps";
import * as Styled from "./Header.styled"

const headers: IHeader[] = [
    {
        link: '/add',
        name: 'Add',
        viewMode: AppViewMode.Add
    },
    {
        link: '/edit',
        name: 'Edit',
        viewMode: AppViewMode.Edit
    },
    {
        link: '/readonly',
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