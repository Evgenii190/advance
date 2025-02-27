import { lazy } from "react";

export const AddCommentFormAsync = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import("./AddCommentForm"));
        }, 1500);
    });
});
