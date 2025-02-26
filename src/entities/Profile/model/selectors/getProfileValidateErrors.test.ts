import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../types/profile";

describe("getProfileValidateErrors.test", () => {
    it("should return validateErrors", () => {
        const errors = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });

    it("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
