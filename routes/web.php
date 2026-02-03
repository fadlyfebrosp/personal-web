<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\ChatController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Home / Dashboard
Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('home');

// About page
Route::get('/about', function () {
    return Inertia::render('About');
    })->name('about');
// Achievements page
Route::get('/achievements', function () {
    return Inertia::render('Achievements');
})->name('achievements');
// Projects page
Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');


/*
|--------------------------------------------------------------------------
| Google OAuth
|--------------------------------------------------------------------------
*/

Route::get('/auth/google', [GoogleController::class, 'redirect'])
    ->name('google.redirect');

Route::get('/auth/google/callback', [GoogleController::class, 'callback'])
    ->name('google.callback');

/*
|--------------------------------------------------------------------------
| Chat
|--------------------------------------------------------------------------
*/

// Halaman chat (guest boleh lihat)
Route::get('/chat', [ChatController::class, 'index'])
    ->name('chat.index');

// Kirim pesan (WAJIB login)
Route::post('/chat', [ChatController::class, 'store'])
    ->middleware('auth')
    ->name('chat.store');

/*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/

Route::post('/logout', function () {
    auth()->logout();

    request()->session()->invalidate();
    request()->session()->regenerateToken();

    return redirect('/chat');
})->name('logout');
