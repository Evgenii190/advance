import { lazy } from "react";

export const ProfilePageAsync = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import("./ProfilePage"));
        }, 1500);
    });
});
