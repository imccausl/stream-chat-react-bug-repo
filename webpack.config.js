module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.[cm]?[tj]sx?$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: require.resolve('css-loader')},
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            crypto: false,
        }
    },
    optimization: {
        minimize: false,
    }
}
