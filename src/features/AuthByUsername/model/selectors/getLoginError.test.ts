import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    it("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "some error",
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual("some error");
    });

    it("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
