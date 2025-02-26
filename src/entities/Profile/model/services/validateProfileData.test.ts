import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../types/profile";

const data = {
    first: "admin",
    lastname: "admin",
    age: 22,
    country: Country.Armenia,
    city: "Yerevan",
    currency: Currency.USD,
};

describe("validateProfileData.test", () => {
    it("success", async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    it("without firstname and lastname", async () => {
        const result = validateProfileData({
            ...data,
            first: "",
            lastname: "",
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    it("incorrect age", async () => {
        const result = validateProfileData({
            ...data,
            age: 0,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    it("incorrect country", async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    it("incorrect all", async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
