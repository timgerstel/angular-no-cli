

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const AngularWebpackPlugin = require('@ngtools/webpack').AngularWebpackPlugin;


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname),
  entry: {
      index: ["./src/plugin.ts"]
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
    path: path.resolve(__dirname, '../../', 'dist', 'tn3270'),
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
                    use: [/*MiniCssExtractPlugin.loader*/, "css-loader", "postcss-loader"]
                  },
                {
                  use: [
                    // 'to-string-loader',
                    {
                  loader: "css-loader",
                    options: {
                      exportType: 'string',
                      esModule: false,
                      sourceMap: false,
                      importLoaders: 1
                    }
                    },
                    'postcss-loader'
                    ]
                }

              ]
          },
          {
            test: /\.(jpg|png|svg|gif)$/,
            type: 'asset',
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
       //new MiniCssExtractPlugin({
       //    filename: '[name].css',
       //}),
      new AngularWebpackPlugin({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          jitMode: false,
          directTemplateLoading: true
      }),
  ],
externals: ['@angular/core', '@angular/common', '@angular/common/http', 'rxjs', '@angular/compiler', '@angular/platform-browser-dynamic']
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

