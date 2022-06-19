import styled from "styled-components";
import DatePicker from "react-datepicker";

export const DateTimeFieldContainer = styled(DatePicker)`
  width: 100%;
`;
export const DateTimeCustomContainer = styled.div``;
export const DateTimeCustomInputField = styled.input`
  min-width: 100%;
  padding: 5px;
  height: 32px;
`;

export const DateTimeCustomLabel = styled.label``;

export const CalendarContainer = styled.div`
  width: 32px;
  height: 100%;
  background-color: #eaecef;
  right: 0;
  top: 0;
  position: absolute;
  cursor: pointer;
  border: 1px solid #767676;
  border-radius: 0 1px 1px 0;
  svg {
    right: 5px;
    top: 5px;
    position: absolute;
    width: 20px;
    color: #40474e;
  }
  &:hover {
    border: 1px solid #4f4f4f;
  }
  &:hover ${DateTimeCustomInputField} {
    border: 1px solid #4f4f4f;
  }
`;
