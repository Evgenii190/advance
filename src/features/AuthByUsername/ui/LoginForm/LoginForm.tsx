import { memo, useCallback } from "react";
import classNames from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginActions, loginReducer } from "../../model/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";
import s from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
