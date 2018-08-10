<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('auth/facebook', 'Auth\SocialAuthenticationController@redirectToFacebookProvider');
Route::get('auth/facebook/callback', 'Auth\SocialAuthenticationController@handleProviderFacebookCallback');

Route::get('get/auth/user', 'Auth\SocialAuthenticationController@getAuthUser');

// Route::post('login', 'Auth\LoginController@login');
// Route::post('logout', 'Auth\LoginController@logout');

Route::post('login', [ 'as' => 'login', 'uses' => 'Auth\LoginController@login']);
Route::get('logout', 'Auth\SocialAuthenticationController@logout');

Route::group(
[
    'prefix' => 'admin',
],
function(){

    Route::get('{all}', [function() {
        return view('welcome');
    }])->where('all', '.*');

});

/**
 * Route to generate bcrypt passwords
 */
// Route::get('password/gen', function() {
//     return bcrypt('qweqwe123');
// });

Route::get('{all}', [function() {
    return view('welcome');
}])->where('all', '.*');
