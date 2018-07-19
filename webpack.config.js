const path = require("path");

var config = {
   // entry is the "main" source file we want to include/import
   entry: __dirname + "/src/trove.js",
   // output tells webpack where to put the bundle it creates
   output: {
      path: path.resolve(__dirname, "dist"),
      // in the case of a "plain global browser library", this
      // will be used as the reference to our module that is
      // hung off of the window object.
      library: "Trove",
      // We want webpack to build a UMD wrapper for our module
      libraryTarget: "umd",
      // the destination file name
      filename: "trove-api.js",
      umdNamedDefine: true
   },
   // externals let you tell webpack about external dependencies
   // that shouldn't be resolved by webpack.
   externals: [
      {
      }
   ],
   module: {
      rules: [
         {
            // babel loader, testing for files that have a .js extension
            // (except for files in our node_modules folder!).
            test: /\.js$/,
            exclude: [
               path.resolve(__dirname, "node_modules")
            ],
            loader: "babel-loader"
         }
      ],
   }
};

module.exports = (env, argv) => {
   if (argv.mode === 'development') {
      // config.mode = "development";
      config.devtool = 'source-map';
      config.output.filename = "trove-api.js";
   }

   if (argv.mode === 'production') {
      // config.mode = "production";
      config.output.filename = "trove-api.min.js";
   }

   return config;
};
