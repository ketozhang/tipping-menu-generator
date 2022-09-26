const path = require('path');

module.exports = {
    entry: './src/modules/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                loader: "html-loader",
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};