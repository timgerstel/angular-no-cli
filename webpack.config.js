const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

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
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, "dist", "index.html"),
          template: path.resolve(__dirname, "src/index.html")
      }),
      new CopyPlugin({
        patterns: [
            {
                from: "**/*.html",
                to: path.resolve(__dirname, "dist", "[name].html"),
                context: "src/app/"
            }
        ]
      })
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
          chunks: "all",
          maxAsyncRequests: Infinity,
          minSize: 0,
          name: "vendor"
      }
    },
    devServer: {
      static: {
          directory: path.resolve(__dirname, "dist")
      },
      port: 4200,
      hot: true,
      open: false
  }
}
