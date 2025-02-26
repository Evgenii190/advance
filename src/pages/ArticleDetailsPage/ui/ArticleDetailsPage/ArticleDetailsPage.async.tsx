import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import("./ArticleDetailsPage"));
        }, 1500);
    });
});
