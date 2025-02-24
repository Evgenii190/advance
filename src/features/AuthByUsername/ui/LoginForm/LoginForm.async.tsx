import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import("./LoginForm"));
        }, 1500);
    });
});
