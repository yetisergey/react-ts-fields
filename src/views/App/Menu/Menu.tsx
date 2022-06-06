import * as Styled from "./Menu.styled"
import {
    Textarea,
    At,
    TextareaResize,
    Calendar,
    Link45deg,
    TagsFill,
    CurrencyDollar
} from 'styled-icons/bootstrap';
import { Home, PhoneSquareAlt, Signature } from 'styled-icons/fa-solid';
import { Time } from 'styled-icons/boxicons-regular';
import { Survey } from 'styled-icons/remix-fill';
import { FieldType } from "../../../enums/FieldType";
import { IMenuState } from "../../../types/IMenuState";
import { useEffect, useRef, useState } from "react";
import debounce from 'lodash/debounce';

const defaultState: IMenuState = {
    menuBlocks: [
        {
            active: true,
            header: "Basic",
            buttons: [
                {
                    icon: <Textarea />,
                    name: "Text field",
                    type: FieldType.TextField
                },
                {
                    icon: <TextareaResize />,
                    name: "Text area",
                    type: FieldType.TextArea
                }
            ]
        },
        {
            active: false,
            header: "Advanced",
            buttons: [
                { icon: <At />, name: "Email" },
                { icon: <Link45deg />, name: "Url" },
                { icon: <PhoneSquareAlt />, name: "Phone Number" },
                { icon: <TagsFill />, name: "Tags" },
                { icon: <Home />, name: "Address" },
                { icon: <Calendar />, name: "Date / time", type: FieldType.DateTime },
                { icon: <Calendar />, name: "Day" },
                { icon: <Time />, name: "Time" },
                { icon: <CurrencyDollar />, name: "Currency" },
                { icon: <Survey />, name: "Survey" },
                { icon: <Signature />, name: "Signature" }
            ]
        },
        {
            active: false, header: "Layout", buttons: []
        },
        {
            active: false, header: "Data", buttons: []
        },
        {
            active: false, header: "Premium", buttons: []
        }
    ]
};

interface IMenuProps {
    addField(type: FieldType): void
}

export const Menu: React.FC<IMenuProps> = ({ addField }) => {
    const [state, setState] = useState<IMenuState>({ ...defaultState })

    const searchBlocks = (searchValue: string) => {
        const value = searchValue;

        if (value === "") {
            setState({ ...defaultState })
            return;
        }

        const filteredBlocks = state.menuBlocks
            .filter(block => {
                const findButtons = block.buttons
                    .filter(button =>
                        button.name
                            .toLowerCase()
                            .includes(value.toLowerCase()));

                if (findButtons.length > 0) {
                    return block;
                } else {
                    return block;
                }
            })
            .map(block => {
                var filteredButtons = block.buttons.filter(button =>
                    button.name
                        .toLowerCase()
                        .includes(value.toLowerCase()))
                return {
                    ...block,
                    buttons: filteredButtons,
                    active: filteredButtons.length > 0
                }
            });

        setState({
            ...state,
            menuBlocks: filteredBlocks
        })
    }

    const debouncedSearch = useRef(
        debounce((criteria) => {
            searchBlocks(criteria)
        }, 300)
    ).current;

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    }

    const handleClickHeader = (menuBlockNum: number, active: boolean) => {
        setState({
            ...state,
            menuBlocks: [
                ...state.menuBlocks.slice(0, menuBlockNum),
                { ...state.menuBlocks[menuBlockNum], active: active },
                ...state.menuBlocks.slice(menuBlockNum + 1),
            ],
        })
    }

    const handleClickButton = (type: FieldType | undefined) => {
        if (!type) {
            return;
        }
        addField(type)
    }

    return (
        <Styled.MenuContainer>
            <Styled.MenuSearch placeholder='Search field(s)' onChange={handleChangeSearch}>
            </Styled.MenuSearch>
            {
                state.menuBlocks &&
                state.menuBlocks
                    .map((block, menuBlockNum) =>
                    (
                        <Styled.MenuBlock key={menuBlockNum}>
                            <Styled.MenuHeader onClick={_ => handleClickHeader(menuBlockNum, !block.active)}>
                                {block.header}
                            </Styled.MenuHeader>
                            <Styled.MenuButtonContainer active={block.active}>
                                {block.buttons &&
                                    block.buttons.map((button, buttonNum) =>
                                    (
                                        <Styled.MenuButton key={buttonNum}
                                            onClick={_ => handleClickButton(button.type)}>
                                            {button.icon}
                                            {button.name}
                                        </Styled.MenuButton>
                                    ))}
                            </Styled.MenuButtonContainer>
                        </Styled.MenuBlock>
                    ))
            }
        </Styled.MenuContainer>
    )
}  