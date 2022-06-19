import './App.styled.ts';
import { Field } from './Field';
import { appViewModeToFieldViewMode } from '../../mappers/ViewModeMapper';
import * as Styled from './App.styled';
import { Header } from './Header';
import { Menu } from './Menu';
import { useState } from 'react';
import { FieldType } from '../../enums/FieldType';
import { AppViewMode } from '../../enums/AppViewMode';
import { IFieldMetadata } from '../../types/IFieldMetadata';

type Props = {
  viewMode: AppViewMode;
}

export const App: React.FC<Props> = ({ viewMode }) => {
  const [fields, setFields] = useState<IFieldMetadata[]>([]);

  const addField = (type: FieldType) => {
    setFields([...fields, { type }])
  }

  return (
    <Styled.Container>
      <Header viewMode={viewMode}></Header>
      <Styled.MainContainer>
        <Menu addField={addField}></Menu>
        <Styled.FieldContainer>
          {fields.map((field, i) =>
            <Field key={i} type={field.type} viewMode={appViewModeToFieldViewMode(viewMode)} />)}
        </Styled.FieldContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
}