module.exports = {

    devtool: 'inline-source-map',
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     contentBase: './dist',
     hot:true,
     open:true,
     stats: {
        children: false,
        maxModules: 0
       },
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  };
