import { screen } from "@testing-library/react";
import renderComponent from "shared/lib/tests/componentRender";
import { userEvent } from "@storybook/testing-library";
import { Counter } from "./Counter";

describe("Counter", () => {
    it("render counter", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    });

    it("increment", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId("increment-button"));
        expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
    });
    it("decrement", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId("decrement-button"));
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
    });
});
