import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import useTheme from "app/providers/ThemeProvider/lib/useTheme";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export default function App() {
  const { theme, onToggle } = useTheme();
  return (
    <div className={classNames("app", { hover: true }, [theme])}>
      <div>
        <Navbar />
      <button onClick={onToggle}>Toggle</button>
      </div>
      <AppRouter />
    </div>
  );
}
