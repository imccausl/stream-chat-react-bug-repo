module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.[cm]?[tj]sx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'css-loader'},
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: false,
    }
}
