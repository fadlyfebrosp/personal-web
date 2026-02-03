<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;


class GoogleController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        $googleUser = Socialite::driver('google')->user();

        $avatarUrl = $googleUser->getAvatar();
        $localAvatarPath = null;

        if ($avatarUrl) {
            $response = Http::get($avatarUrl);

            if ($response->successful()) {
                $filename = 'avatars/' . uniqid() . '.jpg';

                Storage::disk('public')->put($filename, $response->body());

                $localAvatarPath = '/storage/' . $filename;
            }
        }

        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'avatar' => $localAvatarPath, // ← LOKAL
                'password' => bcrypt(Str::random(24)),
            ]
        );

        Auth::login($user);

        return redirect('/chat');
    }
}
