import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
    it("should return form", () => {
        const form = {
            first: "admin",
            lastname: "admin",
            age: 22,
            country: Country.Armenia,
            city: "Yerevan",
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    it("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
