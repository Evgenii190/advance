import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../types/profile";

const data = {
    first: "admin",
    lastname: "admin",
    age: 22,
    country: Country.Armenia,
    city: "Yerevan",
    currency: Currency.USD,
    id: "1",
};

describe("updateProfileData.test", () => {
    it("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual("fulfilled");
        expect(result.payload).toEqual(data);
    });

    it("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    it("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, lastname: "" } },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
