import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema, ValidateProfileError } from "./types/profile";
import { updateProfileData } from "./services/updateProfileData";

const data = {
    first: "admin",
    lastname: "admin",
    age: 22,
    country: Country.Armenia,
    city: "Yerevan",
    currency: Currency.USD,
};

describe("profileSlice.test", () => {
    it("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(false),
            ),
        ).toEqual({ readonly: false });
    });

    it("test cancelEdit", () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            data,
            validateErrors: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            form: data,
            data,
            validateErrors: undefined,
        });
    });

    it("test updateProfile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ first: "123" }),
            ),
        ).toEqual({
            form: {
                ...data,
                first: "123",
            },
        });
    });

    it("test updateProfile pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    it("test updateProfile fullfield", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ""),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,
        });
    });
});
