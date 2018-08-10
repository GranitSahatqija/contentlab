let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/index.js', 'public/js')
   .sass('resources/assets/assets/sass/light-bootstrap-dashboard.scss', 'public/css')
   .browserSync({
        proxy: 'contentlab.app'
    });
