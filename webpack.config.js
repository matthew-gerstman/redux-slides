module.exports = {
	module: {
		rules: [
			{
				test: /\.(eot|woff|otf)$/,
				use: [{loader: 'file-loader'}],
			},
		],
	},
};
