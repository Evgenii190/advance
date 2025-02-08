import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import React from "react";

describe("Button", () => {
    it("render button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    it("clear theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
