import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import classNames from "./helpers/classNames/classNames";

export default function App() {
    const { theme, toogleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toogleTheme}>Theme</button>
            <Link to={`/`}>Главная</Link>
            <Link to={`/about`}>О сайте</Link>
            <Suspense fallback="loading">
                <Routes>
                    <Route path={`/`} element={<MainPageAsync />} />
                    <Route path={`/about`} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}
