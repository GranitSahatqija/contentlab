<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'API\Auth\LoginController@login');
    Route::post('logout', 'API\Auth\LoginController@logout');
    // Route::post('refresh', 'API\Auth\LoginController@refresh');

});



Route::group(
[
    'prefix' => 'admin',
    'middleware' => ['auth']
],
function(){
    Route::get('auth/user', 'API\Auth\LoginController@getAuthenticatedUser');

    Route::post('facebook/feeds', 'API\FacebookFeedsController@searchContent');
    Route::get('clients', 'API\ClientsController@getClients');
    Route::post('clients', 'API\ClientsController@storeClient');

});
