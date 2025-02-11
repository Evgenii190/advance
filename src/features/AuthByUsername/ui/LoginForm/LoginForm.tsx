import classNames from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import s from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                className={s.input}
                placeholder="Введите username"
                type="text"
                autoFocus
            />
            <Input
                className={s.input}
                placeholder="Введите password"
                type="text"
            />
            <Button className={s.loginBtn} theme={ThemeButton.BACKGRAUND}>
                Войти
            </Button>
        </div>
    );
};
