import * as Styled from "./DateTimeField.styled"
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { CalendarFill } from "styled-icons/bootstrap";

type Props = {
    onChange(date: Date): void;
    value: Date | null
}

const DateTimeCustomInput = (props: React.ComponentPropsWithoutRef<"div">, ref: React.Ref<HTMLDivElement>) => {
    return (
        <Styled.DateTimeCustomContainer>
            <Styled.DateTimeCustomLabel>
                <Styled.CalendarContainer>
                    <CalendarFill />
                </Styled.CalendarContainer>
                <Styled.DateTimeCustomInputField  {...props}></Styled.DateTimeCustomInputField>
            </Styled.DateTimeCustomLabel>
        </Styled.DateTimeCustomContainer >
    );
};

export const DateTimeField: React.FC<Props> = ({ value, onChange }) => {
    return (
        <Styled.DateTimeFieldContainer
            dateFormat="yyyy-MM-dd hh:mm aa"
            selected={value}
            onChange={onChange}
            showTimeSelect
            customInput={React.createElement(React.forwardRef(DateTimeCustomInput))}>
        </Styled.DateTimeFieldContainer>
    )
}  