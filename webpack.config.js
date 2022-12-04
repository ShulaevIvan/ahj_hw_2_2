/* eslint-disable */
const MinCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: [MinCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader'},
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MinCssExtractPlugin()
    ],
    optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin(),
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ['gifsicle', { interlaced: true }],
                  ['jpegtran', { progressive: true }],
                  ['optipng', { optimizationLevel: 5 }],
                  [
                    'svgo',
                    {
                      plugins: [
                        {
                          name: 'preset-default',
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: 'http://www.w3.org/2000/svg' },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ],
      },

};