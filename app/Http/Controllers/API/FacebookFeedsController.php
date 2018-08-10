<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Facebook\Exceptions\FacebookSDKException;
use Facebook\Facebook;

class FacebookFeedsController extends Controller
{
    private $api;

    public function __construct()
    {
        // $this->middleware(function ($request, $next) use ($fb) {
        //     $fb->setDefaultAccessToken(Auth::user()->token);
        //     $this->api = $fb;
        //     return $next($request);
        // });
    }

    public function retrieveUserProfile(){
        try {

            $params = "first_name,last_name,age_range,gender";

            $user = $this->api->get('/me?fields='.$params)->getGraphUser();

            dd($user);

        } catch (FacebookSDKException $e) {

        }

    }

    public function searchContent(Request $request) {

        $FBpageTitle = $request->get('facebook_page_title');
        //
        // $request = Facebook::get('/elbeko?fields=feed.limit(25)');
        //
        // $response = $request->getGraphPage()->getField('feed');

        return $FBpageTitle;
    }
}
