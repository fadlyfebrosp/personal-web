<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Home
Route::get('/', function () {
    return Inertia::render('Home');
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
// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contact', [ContactController::class, 'send'])
    ->middleware('throttle:5,1')
    ->name('contact.send');



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
