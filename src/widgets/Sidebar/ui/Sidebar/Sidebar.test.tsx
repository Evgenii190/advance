import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import RenderComponent from "shared/lib/tests/componentRender";

describe("Sidebar", () => {
    it("render sidebar", () => {
        RenderComponent(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    it("render button", () => {
        RenderComponent(<Sidebar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
