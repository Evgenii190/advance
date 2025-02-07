import classNames from "./classNames";

describe("classNames", () => {
    it("with only first param", () => {
        expect(classNames("test")).toBe("test");
    });

    it("with additional class", () => {
        expect(classNames("test", {}, ["test2", "test3"])).toBe(
            "test test2 test3",
        );
    });

    it("with mode", () => {
        expect(classNames("cls", { someMode: true })).toBe("cls someMode");
    });

    it("with mode false", () => {
        expect(classNames("cls", { someMode: true, someMode2: false })).toBe(
            "cls someMode",
        );
    });

    it("with mode and additional", () => {
        expect(
            classNames("cls", { someMode: true, someMode2: false }, [
                "add1",
                "add2",
            ]),
        ).toBe("cls add1 add2 someMode");
    });
});
