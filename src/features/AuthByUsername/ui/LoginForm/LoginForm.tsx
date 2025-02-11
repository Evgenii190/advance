import { memo, useCallback } from "react";
import classNames from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "../../model/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState";

import s from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Text title="Форма авторизации" theme={TextTheme.PRIMARY} />

            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={s.input}
                placeholder="Введите username"
                type="text"
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={s.input}
                placeholder="Введите password"
                type="text"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={s.loginBtn}
                theme={ThemeButton.BACKGRAUND}
                onClick={onLoginHandler}
                disabled={isLoading}
            >
                Войти
            </Button>
        </div>
    );
});
