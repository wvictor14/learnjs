# script

```bash
cd making-a-javascript-project
rm -r new_proj

mkdir new_proj 
cd new_proj
sh ../setup-node-project.sh
```


# details

The process of starting a project:

1. Make a new folder for the project and run `npm init -y`

```bash
mkdir new_proj 
cd new_proj
npm init -y
```

2. install webpack

we only use it for dev, so add the `-d` flag

```bash
npm install --save-dev webpack webpack-cli
npm install -d webpack webpack-cli #shorthand
```

3. create a `src` dir and add an initial blank javascript file

```bash
mkdir src && touch src/index.js
```

4. create a `webpack.config.js` file

```bash
touch webpack.config.js
echo 'const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};' >> webpack.config.js
```

5. run `npx webpack`, which bundles the project into `dist`

```bash
npx webpack
```

6. add html

```bash
npm install --save-dev html-webpack-plugin

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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};' > webpack.config.js
```

7. add css

```bash
npm install --save-dev style-loader css-loader
touch src/styles.css
echo 'import "./styles.css";' > src/index.js

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
    ],
  },
};' > webpack.config.js
npx webpack
```

8. use image loader

```bash
npm install --save-dev html-loader
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
```

9. use webpack-dev-server

```bash
npm install --save-dev webpack-dev-server
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
npx webpack serve
```

# References

https://www.theodinproject.com/lessons/javascript-webpack