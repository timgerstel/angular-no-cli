const path = require('path');
module.exports = {
    mode: 'development',
    devtool: false,
    context: path.resolve(__dirname),
    entry: {
        app: path.resolve(__dirname, 'src/main.ts'),
    },
    stats: 'normal',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    }
}
