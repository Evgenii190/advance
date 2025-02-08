import webpack from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    getCustomTransformers: () => {
                        return {
                            before: [isDev && ReactRefreshTypeScript()].filter(
                                Boolean,
                            ),
                        };
                    },
                },
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
