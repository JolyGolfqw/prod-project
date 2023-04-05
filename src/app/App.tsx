import { Suspense } from "react";
import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import useTheme from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export default function App () {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", { hover: true }, [theme])}>
      <Suspense fallback="">
        <div>
          <Navbar />
        </div>
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
// modal
// redux
