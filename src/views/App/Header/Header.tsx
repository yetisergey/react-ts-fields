import { AppViewMode } from "../../../enums/AppViewMode";
import { IHeader } from "../../../types/IHeader";
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

type Props = {
    viewMode: AppViewMode;
}

export const Header: React.FC<Props> = ({ viewMode }) => {
    const isActive = (appViewMode: AppViewMode): boolean =>
        viewMode === appViewMode;

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