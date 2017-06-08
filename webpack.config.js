var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    postcss = require('postcss'),
    autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TEM_PATH = path.resolve(LIBS_PATH, 'template');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        preLoader: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'eslint',
                include: SRC_PATH
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel',
                include: SRC_PATH
            }, {
                test: /\.(svg|gif|png|jpg|swf|mp4|mp3|m4a|otf|eot|ttf|woff)$/,
                loader: 'file-loader?name=[name].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(css|scss)$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
                include: ROOT_PATH
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    externals: {
        zepto: '$',
        jquery: '$'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new HtmlwebpackPlugin({
            title: '蓝港星云',
            keywords: '蓝港星云',
            description: '蓝港星云',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['index'],
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {

        profile: true,
        progress: true,
        colors: true,
        inline: true,
        hot: true,
        historyApiFallback: true,
        contentBase: ROOT_PATH,
        host: '192.168.90.51',
        port: '4000',
        proxy: [{
            context: ['/*'],
            target: '',
            changeOrigin: true,
            ws: true,
            secure: false
        }]
    }
};