import * as Styled from "./DateTimeField.styled"
import { IDateTimeFieldProps } from "../../types/DateTimeField/IDateTimeFieldProps";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { CalendarFill } from "styled-icons/bootstrap";

export const DateTimeField = (props: IDateTimeFieldProps) => {
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

    return (
        <Styled.DateTimeFieldContainer
            dateFormat="yyyy-MM-dd hh:mm aa"
            selected={props.value}
            onChange={props.onChange}
            showTimeSelect
            customInput={React.createElement(React.forwardRef(DateTimeCustomInput))}>
        </Styled.DateTimeFieldContainer>
    )
}  