<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

Route::get('/umami/realtime', function () {
    $response = Http::withToken(env('UMAMI_TOKEN'))
        ->get('https://api.umami.is/v1/websites/c3730b63-9363-41f7-8e4a-3b2ec01e113b/stats', [
            'type' => 'realtime'
        ]);

    return response()->json($response->json());
});
