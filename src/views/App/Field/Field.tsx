import { useState } from "react";
import { DateTimeField } from "../../../components/DateTimeField";
import { TextAreaField } from "../../../components/TextAreaField";
import { TextField } from "../../../components/TextField";
import { FieldType } from "../../../enums/FieldType";
import { FieldViewMode } from "../../../enums/FieldViewMode";
import * as Styled from "./Field.styled";
import moment from 'moment';

type Props = {
    type: FieldType;
    viewMode: FieldViewMode;
}

export const Field: React.FC<Props> = ({ type, viewMode }) => {
    const [textValue, setTextValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const value = event.target.value;
        setTextValue(value);
    }
    const handleChangeDatePicker = (value?: Date) => {
        if (value) {
            const stringValue = moment(value).format('yyyy-MM-DD hh:mm a')
            setTextValue(stringValue);
        }
    }

    if (viewMode === FieldViewMode.ReadOnly) {
        return (
            <Styled.FieldContainer>
                <Styled.Header>{type}: {textValue}</Styled.Header>
            </Styled.FieldContainer>
        )
    }

    switch (type) {
        case FieldType.TextField:
            return (
                <Styled.FieldContainer>
                    <Styled.Header>{type}</Styled.Header>
                    <TextField value={textValue} onChange={handleChange} ></TextField>
                </Styled.FieldContainer>
            );
        case FieldType.TextArea:
            return (
                <Styled.FieldContainer>
                    <Styled.Header>{type}</Styled.Header>
                    <TextAreaField value={textValue} onChange={handleChange} ></TextAreaField>
                </Styled.FieldContainer>
            );
        case FieldType.DateTime:
            return (
                <Styled.FieldContainer>
                    <Styled.Header>{type}</Styled.Header>
                    <DateTimeField 
                        value={
                            textValue ?
                                moment(textValue, "yyyy-MM-DD hh:mm a").toDate() :
                                null
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