

// /*
//   This program and the accompanying materials are
//   made available under the terms of the Eclipse Public License v2.0 which accompanies
//   this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
//   SPDX-License-Identifier: EPL-2.0
  
//   Copyright Contributors to the Zowe Project.
// */

const path = require('path');
const AngularWebpackPlugin = require('@ngtools/webpack').AngularWebpackPlugin;
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname),
    entry: {
        index: ["./src/app/index.ts"]
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
      path: path.resolve(__dirname, '../../', 'dist', 'zlux-widgets'),
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


// const webpack = require('webpack');
// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin-next');


// function root(__path) {
//   return path.join(__dirname, __path);
// };

// var config = {
//   entry: [root('./src/app/index.ts')],
//   devtool: 'source-map',
//   mode: 'production',
//   output: {
//     path: root('.'),
//     filename: './dist/index.js',
//     library: '@zlux/widgets',
//     libraryTarget: 'amd',
//     umdNamedDefine: true
//   },
//   externals: [
//     '@angular/core',
//     '@angular/common',
//     '@angular/compiler',
//     '@angular/forms',
//     'rxjs',
//     'rxjs/operators'
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         exclude: /node_modules/,
//         use: [
//           'ts-loader',
//           'angular2-template-loader'
//         ]
//       },
//       {
//         test: /\.html$/,
//         use: [{
//           loader: 'html-loader',
//           options: {
//             esModule: false
//           }
//         }]
//       },
//       {
//         test: /\.svg$/,
//         type: 'asset/inline'
//       },
//       {
//         /* External (or inline) file loader */
//         test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
//         type: 'asset',
//       },
//       {
//         test: /\.css$/,
//         include: root('./src/app/assets/css'),
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               sourceMap: false
//             }
//           }
//         ]
//       },
//       {
//         test: /\.css$/,
//         include: root('./src/app/components'),
//         use: [{
//           loader: 'css-loader',
//           options: {
//             exportType: 'string',
//             esModule: false,
//             sourceMap: false
//           }
//         }]
//       }
//     ]
//   },
//   resolve: {
//     modules: [
//       'node_modules'
//     ],
//     extensions: ['.js', '.ts']
//   },
//   plugins: [
//     new webpack.WatchIgnorePlugin({
//       paths: [/\.js$/, /\.d\.ts$/]
//     }),
//     new CopyWebpackPlugin({
//       patterns: [{
//         from: '**/*.metadata.json',
//         to: './dist',
//         context: './out_tsc/src/app/'
//       }]
//     }),
//     new WebpackShellPlugin({
//       onBuildStart: ['npm run metadata']
//     })
//   ]
// };

// module.exports = config;


// /*
//   This program and the accompanying materials are
//   made available under the terms of the Eclipse Public License v2.0 which accompanies
//   this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

//   SPDX-License-Identifier: EPL-2.0

//   Copyright Contributors to the Zowe Project.
// */

