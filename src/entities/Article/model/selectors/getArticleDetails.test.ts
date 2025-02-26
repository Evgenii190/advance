import { StateSchema } from "app/providers/StoreProvider";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "./getArticleDetails";

describe("getArticleDetails.test", () => {
    it("should return data", () => {
        const data = {
            title: "test",
            subtitle: "123",
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    it("should work on empty state data", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    it("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    it("should work on empty state isLoading", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(
            undefined,
        );
    });

    it("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: "123",
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual("123");
    });

    it("should work on empty state error", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
