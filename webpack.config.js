const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		library: "lottie-player",
		libraryTarget: "umd",
		globalObject: "this",
		umdNamedDefine: true
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	module: {
		// Modified rule without ts-loader
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
						}
					}
				]
			}
		]
	},
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "react",
			root: "React"
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "react-dom",
			root: "ReactDOM"
		},
		"lottie-web": {
			commonjs: "lottie-web",
			commonjs2: "lottie-web",
			amd: "lottie-web",
			root: "Lottie"
		}
	}
};
