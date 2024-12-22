<?php

use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Models\User;

// Route to set the CSRF token
Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

// Temporary route to test token creation (ensure a user exists)
Route::get('/test-token', function () {
    $user = User::first();  // Ensure there’s at least one user in the database
    if (!$user) {
        return response()->json(['error' => 'No user found'], 404);  // Return error if no user exists
    }
    return $user->createToken('test')->plainTextToken;  // Return generated token
});
