const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  if (env.production) {
    return {
      entry: {
        index: './src/index.js',
        tailwind: './src/tailwind.js',
      },

      mode: 'production',
      devtool: 'source-map',
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[hash][ext][query]',
      },
      target: 'web',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Output',
          filename: 'index.html',
          template: './src/html/index.html',
          chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
          title: 'Output',
          filename: 'tailwind.html',
          template: './src/html/tailwind.html',
          chunks: ['tailwind'],
        }),
        new MiniCssExtractPlugin({
          filename: 'styles/[name].css',
        }),
      ],
      module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,

            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              'css-loader',
              'postcss-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
      },
    };
  } else {
    return {
      entry: {
        index: './src/index.js',
        tailwind: './src/tailwind.js',
      },

      mode: 'development',
      devtool: 'inline-source-map',
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: {
          dry: true,
        },
      },
      devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 8080,
        index: 'index.html',
      },
      target: 'web',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Output',
          filename: 'index.html',
          template: './src/html/index.html',
          chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
          title: 'Output',
          filename: 'tailwind.html',
          template: './src/html/tailwind.html',
          chunks: ['tailwind'],
        }),
      ],
      module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,

            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              'postcss-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
      },
    };
  }
};
