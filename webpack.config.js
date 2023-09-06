const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const time = new Date().getTime();
const babelSettings = {
  extends: path.join(__dirname, "/.babelrc"),
};
module.exports = () => {
  return {
    mode: isProduction ? "production" : "development",
    entry: {
      index: {
        import: "./src/myapp.ts",
      },
    },
    module: {
      rules: [
		{
			test: /\.(tsx|ts)$/,
			use: "babel-loader?" + JSON.stringify(babelSettings)
		},
        {
          test: /\.less$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.bpmnlintrc$/i,
          use: [{ loader: "bpmnlint-loader" }],
        },
      ],
    },
    externals: {
      fs: require("fs"),
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", ".less", ".css"],
      fallback: {
        stream: require.resolve("stream-browserify"),
        querystring: require.resolve("querystring-es3"),
      },
    },
    output: {
      //清除缓存版
      chunkFilename: isProduction
        ? `[name].${time}.chunk.js`
        : "[name].chunk.js",
      filename: isProduction ? `[name].${time}.js` : "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new MiniCssExtractPlugin(),
    ].filter(Boolean),
  };
};
