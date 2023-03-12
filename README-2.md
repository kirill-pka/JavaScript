<!-- WebPack -->
test: /\.s[ac]ss$/i,

{
test: /\.s[ac]ss$/i,
use: [
	// Creates `style` nodes from JS strings
	MiniCssExtractPlugin.loader,
	// Translates CSS into CommonJS
	"css-loader",
	// Compiles Sass to CSS
	"sass-loader",
],
},