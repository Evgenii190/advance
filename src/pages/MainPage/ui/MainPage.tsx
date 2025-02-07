import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");

    useEffect(() => {
        throw new Error("123");
    }, []);

    return <div>{t("Главная страница")}</div>;
};

export default MainPage;
