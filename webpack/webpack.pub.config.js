const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        app: path.join(__dirname, './src/main.js'),
        // app1: path.join(__dirname, './src/js/tools.js'),
        // vendor1: ['jquery'],
        // vendor2: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.resolve(__dirname, 'dist')
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
		new OptimizeCssAssetsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|bmp|jpg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[hash:8]-[name].[ext]',
                            limit: 5000,
                            outputPath: 'images'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
                // use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]'
            },
            { test: /\.js/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    // minChunks: 2
                }
            }
        }
    }
}