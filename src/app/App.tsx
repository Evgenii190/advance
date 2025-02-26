import { useTheme } from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { getUserInited, userActions } from "entities/User";
import { AppRouter } from "./providers/router";

export default function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
