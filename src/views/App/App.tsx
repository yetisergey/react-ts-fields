import './App.styled.ts';
import { Field } from './Field';
import { appViewModeToFieldViewMode } from '../../mappers/ViewModeMapper';
import * as Styled from './App.styled';
import { Header } from './Header';
import { Menu } from './Menu';
import { useState } from 'react';
import { IAppState } from '../../types/IAppState';
import { FieldType } from '../../enums/FieldType';
import { AppViewMode } from '../../enums/AppViewMode';

interface IAppProps {
  viewMode: AppViewMode;
}

export const App: React.FC<IAppProps> = ({ viewMode }) => {
  const [state, setState] = useState<IAppState>({ fields: [] });

  const addField = (type: FieldType) => {
    setState({ fields: state?.fields?.concat({ type: type }) })
  }

  return (
    <Styled.Container>
      <Header viewMode={viewMode}></Header>
      <Styled.MainContainer>
        <Menu addField={addField}></Menu>
        <Styled.FieldContainer>
          {state?.fields &&
            state?.fields.map((field, i) =>
              <Field key={i} type={field.type} viewMode={appViewModeToFieldViewMode(viewMode)} />)}
        </Styled.FieldContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
}