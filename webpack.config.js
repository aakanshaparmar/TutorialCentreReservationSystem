module.exports = {
	entry: './main.js',
	output :{
		path: './',
		filename: 'index.js'
	},
	port: 9876,
	module:{
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_nodules/,
			loader: 'babel',
			query:{
				presets: ['es2015', 'react']
			}
		}
		]
	}
}
