import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import RenderWithTranslation from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    it("render sidebar", () => {
        RenderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    it("render button", () => {
        RenderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
