import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Navigate, Routes } from "react-router-dom";
import { App } from "./views/App";
import { AppViewMode } from "./enums/AppViewMode";
import GlobalStyle from "./index.styled";
import { AppRoutes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <Routes>
        <Route
          path={AppRoutes.Default}
          element={<Navigate to={AppRoutes.Add} />}
        />
        <Route
          path={AppRoutes.Add}
          element={<App viewMode={AppViewMode.Add} />}
        />
        <Route
          path={AppRoutes.Edit}
          element={<App viewMode={AppViewMode.Edit} />}
        />
        <Route
          path={AppRoutes.Readonly}
          element={<App viewMode={AppViewMode.Readonly} />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
