<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Auth;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthenticationController extends Controller
{
    /**
     * Redirect the user to the Facebook authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToFacebookProvider()
    {
        return Socialite::driver('facebook')->scopes(['pages_show_list', 'manage_pages', 'publish_pages'])->redirect();
    }

    /**
     * Obtain the user information from Facebook.
     *
     * @return void
     */
    public function handleProviderFacebookCallback()
    {
        $auth_user = Socialite::driver('facebook')->user();

        $user = User::updateOrCreate(
            ['name' => $auth_user->name, 'email' => $auth_user->email],
            ['token' => $auth_user->token]
        );

        Auth::login($user, true);

        return redirect()->to('/admin/dashboard'); // Redirect to a secure page
    }

    public function logout(Request $request) {

        Auth::logout();
        return redirect('/login');
    }

    public function getAuthUser() {
        if($user = Auth::user())
        {
            return response()->json(['user' => $user, 'token' => $user->token], 200);
        } else {
            return response()->json(['message' => 'not authenticated'], 422);
        }
    }
}
