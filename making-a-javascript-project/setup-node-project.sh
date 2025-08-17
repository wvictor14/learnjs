# mkdir new_proj 
# cd new_proj

npm init -y
mkdir src 

# template html
touch src/template.html
echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>' > src/template.html

# index.js
touch src/index.js

# css
touch src/styles.css
echo 'import "./styles.css";' > src/index.js # indirect import: ref css into js

npm install -d webpack webpack-cli 
npm install -d html-webpack-plugin
npm install -d style-loader css-loader
npm install -d html-loader
npm install -d webpack-dev-server

# webpack.config.js
touch webpack.config.js
echo '// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
' > webpack.config.js

# linter
#npm init @eslint/config@latest # run interactively 

# formatter
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
