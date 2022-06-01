const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: "web",
    mode: "development",
    /* devtool: "inline-source-map", */
    devServer: {
        static: path.resolve(__dirname, "dist"),
        hot: "localhost",
        compress: true,
        port: 8080,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./index.html"), // ./index.html是作为模板生成dist/index.html
        }),
        //自动添加前缀 
        require("autoprefixer"),

        //优化合并css    
        require("cssnano"),
    ],
}