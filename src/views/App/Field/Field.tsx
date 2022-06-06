import { useState } from "react";
import { DateTimeField } from "../../../components/DateTimeField";
import { TextAreaField } from "../../../components/TextAreaField";
import { TextField } from "../../../components/TextField";
import { FieldType } from "../../../enums/FieldType";
import { FieldViewMode } from "../../../enums/FieldViewMode";
import { IFieldState } from "../../../types/IFieldState";
import * as Styled from "./Field.styled";
import moment from 'moment';

interface IFieldProps {
    type: FieldType;
    viewMode: FieldViewMode;
}

export const Field: React.FC<IFieldProps> = ({ type, viewMode }) => {
    const [state, setState] = useState<IFieldState>({ value: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const value = event.target.value;
        setState({ ...state, value: value });
    }
    const handleChangeDatePicker = (value: Date | undefined) => {
        if (value) {
            const stringValue = moment(value).format('yyyy-MM-DD hh:mm a')
            setState({ ...state, value: stringValue });
        } else { }

    }

    if (viewMode === FieldViewMode.ReadOnly) {
        return (
            <Styled.FieldContainer>
                <Styled.Header>{type}: {state.value}</Styled.Header>
            </Styled.FieldContainer>
        )
    }

    switch (type) {
        case FieldType.TextField:
            return (
                <Styled.FieldContainer>
                    <Styled.Header>{type}</Styled.Header>
                    <TextField value={state.value} onChange={handleChange} ></TextField>
                </Styled.FieldContainer>
            );
        case FieldType.TextArea:
            return (
                <Styled.FieldContainer>
                    <Styled.Header>{type}</Styled.Header>
                    <TextAreaField value={state.value} onChange={handleChange} ></TextAreaField>
                </Styled.FieldContainer>
            );
        case FieldType.DateTime:
            return (
                <Styled.FieldContainer>
                    <Styled.Header>{type}</Styled.Header>
                    <DateTimeField
                        value={
                            state.value ?
                                moment(state.value, "yyyy-MM-DD hh:mm a").toDate() :
                                undefined
                        }
                        onChange={handleChangeDatePicker}
                    />
                </Styled.FieldContainer>
            );
        default:
            return (
                <>Unknown field</>
            );
    }
}