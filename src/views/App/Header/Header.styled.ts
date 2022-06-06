import styled from "styled-components"
import { IActive } from "../../../types/IActive"
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    background-color: #1976d2;
    min-height: 50px;
    display: flex;
	justify-content: center;
	align-items: center;
    box-shadow: #00000033 0px 2px 4px -1px, #00000024 0px 4px 5px 0px, #0000001f 0px 1px 10px 0px;
`
export const HeaderButton = styled.div<IActive>`
    text-align: center;
    text-transform: uppercase;
    min-width: 100px;
    padding: 6px 8px;
    ${props => props.active ?
        `background-color: #2c8be8ad;` :
        `background-color: #1976d2;`}
`

export const HeaderButtonLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    padding: 6px 8px;
    color: white;
`