const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.setPublicPath('public')
	.setResourceRoot('/') // Turns assets paths in css relative to css file
	.sass('resources/sass/main.scss', 'css/main.css')
	.version()
	.js('resources/js/app.js', 'js/main.js')
	.version()
	.extract(['axios' ])
	.sourceMaps()
if (mix.inProduction()) {
	mix.version().options({
		// Optimize JS minification process
		terser: {
			cache: true,
			parallel: true,
			sourceMap: true
		}
	});
} else {
	// Uses inline source-maps on development
	mix.webpackConfig({
		devtool: 'inline-source-map'
	});
}
mix.extend('vuetify', new class {
    webpackConfig (config) {
        config.plugins.push(new VuetifyLoaderPlugin())
    }
})
mix.vuetify()