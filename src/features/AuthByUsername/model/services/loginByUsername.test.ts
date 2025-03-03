import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

describe("LoginByUsername.test", () => {
    it("succes login", async () => {
        const userValue = { username: "123", id: "1" };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({
            username: "123",
            password: "123",
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue),
        );
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);

        expect(result.meta.requestStatus).toEqual("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    it("error login", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            username: "123",
            password: "123",
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);

        expect(result.meta.requestStatus).toEqual("rejected");
        expect(result.payload).toBe("Вы ввели неверный логин или пароль");
    });
});
