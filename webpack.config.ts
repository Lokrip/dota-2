import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export default () => {
    const config: webpack.Configuration = {
        mode: 'development',
        entry: path.resolve(__dirname, "src", "scripts.ts"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].js",
            clean: true
        },

        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
            new webpack.ProgressPlugin()
        ].filter(Boolean),

        module: {
            rules: [

                {
                  test: /\.css$/i,
                  use: ["style-loader", "css-loader"],
                },
                {

                  test: /\.tsx?$/,
                  use: 'ts-loader',
                  exclude: /node_modules/,
                },
            ],
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },

        devtool: "inline-source-map",
        devServer: {
            port: 1444,
            open: true
        } 
    } 

    return config
}