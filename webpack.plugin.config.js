const path = require('path');
const AngularWebpackPlugin = require('@ngtools/webpack').AngularWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname),
    entry: {
        index: ["./src/plugin/index.ts"]
    },
    experiments: {
      outputModule: true,
    },
    stats: 'normal',
    output: {
      library: {
        type: "module",
      },
      clean: true,
      path: path.resolve(__dirname, 'dist/plugin'),
      filename: '[name].mjs'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /\/node_modules\//,
                oneOf: [
                    {
                        resourceQuery: {
                            not: [/\?ngResource/]
                        },
                        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
                    },
                    {
                        type: "asset/source",
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.?(svg|html)$/,
                resourceQuery: /\?ngResource/,
                type: "asset/source"
            },
            {
                test: /\.[cm]?[tj]sx?$/,
                exclude: /\/node_modules\//,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            compact: true,
                            plugins: ["@angular/compiler-cli/linker/babel"],
                        },
                    },
                    {
                        loader: "@angular-devkit/build-angular/src/tools/babel/webpack-loader",
                        options: {
                            aot: true,
                            optimize: true,
                            // scriptTarget: 7
                        }
                    },
                    {
                        loader: '@ngtools/webpack',
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new AngularWebpackPlugin({
            tsconfig: path.resolve(__dirname, "tsconfig.plugin.json"),
            jitMode: false,
            directTemplateLoading: true
        }),
    ],
    optimization: {
      // runtimeChunk: 'single',
      splitChunks: {
          chunks: "all",
          maxAsyncRequests: Infinity,
          minSize: 0,
          name: "vendor"
      }
    },
    externals: ['@angular/core']
}