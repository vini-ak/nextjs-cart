const { ModuleFederationPlugin } = require('webpack').container;
// const HtmlWebPackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;

module.exports = (env, argv) => {
  
  const configs = {
    appName: "stores",
    appFileName: 'static/chunks/remoteEntry.js',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
      "./cartStore": "./src/stores/cart.store.ts"
    },
    development: {
      PUBLIC_PATH: "http://localhost:3030/",
      PORT: 3030,
      remotes: {
        products: `products@http://localhost:3000/_next/static/${argv.mode === 'production' ? 'ssr' : 'chunks'}/remoteEntry.js`,
        cart: `cart@http://localhost:3001/_next/static/${argv.mode === 'production' ? 'ssr' : 'chunks'}/remoteEntry.js`
      }
    },
    production: {
      PUBLIC_PATH: "http://localhost:3030/",
      PORT: 3030,
      remotes: {
        products: `products@http://localhost:3000/_next/static/${argv.mode ? 'ssr' : 'chunks'}/remoteEntry.js`,
        cart: `cart@http://localhost:3001/_next/static/${argv.mode ? 'ssr' : 'chunks'}/remoteEntry.js`
      }
    },
  };

  console.log("Porta: ",  configs[argv.mode].PORT);
  console.log({ env, argv, configs: configs[argv.mode] });


  return {
    output: {
      publicPath: configs[argv.mode].PUBLIC_PATH,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      hot: true,
      port: configs[argv.mode].PORT,
      historyApiFallback: true,
      allowedHosts: "all",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: configs.appName,
        filename: configs.appFileName,
        remotes: configs[argv.mode].remotes,
        exposes: configs.exposes,
        shared: {
          ...deps,
          zustand: {
            singleton: true,
            requiredVersion: deps.zustand,
          },
          
        },
      }),
    ],
  };
};