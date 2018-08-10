<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\Models\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID', '234163237205208'),         // Your Facebook App Client ID
        'client_secret' => env('FACEBOOK_CLIENT_SECRET', '846b14b199783bde1dd41a2fe4d76be4'), // Your Facebook App Client Secret
        'redirect' => env('FACEBOOK_REDIRECT', 'https://contentlab.labinotjakupi.com/auth/facebook/callback'), // Your application route used to redirect users back to your app after authentication
        'default_graph_version' => 'v2.12',
    ],

];
