import styled from "styled-components"
import { IActive } from "../../../types/IActive"

export const MenuContainer = styled.div`
    flex: 0 0 auto;
    width: 240px;
    padding: 20px;
    display: flex;
    padding: 10px;
	flex-direction: column;
	align-items: stretch;
`
export const MenuSearch = styled.input`
    margin-bottom: 5px;
    padding: 5px;
    height: 32px;
`

export const MenuHeader = styled.div`
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    padding: 10px;
    cursor: pointer;
`

export const MenuBlock = styled.div`
`

export const MenuButtonContainer = styled.div<IActive>`
    border: 1px solid #e2e2e2;
    padding: 10px;
    display: flex;
	flex-direction: column;
	align-items: stretch;
    ${props => props.active === true ? `` :
        `display: none;`}
`

export const MenuButton = styled.div`
    background-color: #2780e3;
    border-radius: 5px; 
    color: white;
    padding: 10px;
    margin: 5px;
    svg {
        width: 20px;
        margin-right: 5px;
    }
    cursor: pointer;
`