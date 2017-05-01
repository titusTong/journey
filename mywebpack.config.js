var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool:'cheap-eval-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:9000',
		'./src/components/app.jsx',
	],
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'js/index.js'
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015', 'react']
					}
				}
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.less$/,
				use:[
					{
						loader:'style-loader'
					},{
						loader:'css-loader'
					},{
						loader:'less-loader'
					}
				]
			}
			
		]
	},
	plugins:[
		new HtmlWebpackPlugin ({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	],
	devServer:{
		contentBase:path.join(__dirname, 'dist'),
		compress:true,
		port:9000
	}
}

