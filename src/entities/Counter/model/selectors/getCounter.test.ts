import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("App", () => {
    it("should return counter", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
