import path from "path";

export default {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    moduleDirectories: ["node_modules"],
    testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
    rootDir: "../../",
    modulePaths: ["<rootDir>src"],
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
    },
    globals: {
        __IS_DEV__: true,
        __API__: "",
        __PROJECT__: "jest",
    },
};
