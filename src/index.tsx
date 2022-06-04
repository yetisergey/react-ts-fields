import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { App } from './views/App';
import { AppViewMode } from './enums/AppViewMode';
import GlobalStyle from "./index.styled";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/react-ts-fields" element={<Navigate to="/react-ts-fields/add" />} />
        <Route path='/react-ts-fields/add' element={<App viewMode={AppViewMode.Add} />} />
        <Route path='/react-ts-fields/edit' element={<App viewMode={AppViewMode.Edit} />} />
        <Route path='/react-ts-fields/readonly' element={<App viewMode={AppViewMode.Readonly} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);