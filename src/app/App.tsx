import { useTheme } from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { AppRouter } from "./providers/router";

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
