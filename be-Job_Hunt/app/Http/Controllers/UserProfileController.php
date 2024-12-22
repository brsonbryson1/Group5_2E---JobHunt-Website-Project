<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserProfileController extends Controller
{
    // Show the profile of the authenticated user
    public function show()
    {
        return response()->json(Auth::user()); // Return as JSON response
    }

    // Update user profile
public function update(Request $request)
{
    $user = Auth::user();

    // Check if $user is null
    if (!$user) {
        return response()->json(['message' => 'User not authenticated.'], 401);
    }

    // Check the type of $user
    if (!($user instanceof User)) {
        return response()->json(['message' => 'User instance is not valid.'], 500);
    }

    $request->validate([
        'name' => 'string|max:255',
        'email' => 'email|unique:users,email,' . $user->id,
        'password' => 'nullable|string|min:8|confirmed', // Optional: validate password confirmation
    ]);

    // Update fields except the password
    $user->update($request->only(['name', 'email']));

    // Hash the password if it's being updated
    if ($request->filled('password')) {
        $user->password = bcrypt($request->password);
        $user->save(); // Save the updated user with the hashed password
    }

    return response()->json(['message' => 'Profile updated successfully', 'user' => $user]);
}

}