import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{story()}</div>
        </ThemeProvider>
    );
};
