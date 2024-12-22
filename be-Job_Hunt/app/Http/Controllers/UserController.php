<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $perPage = min($request->query('per_page', 10), 100); // Default to 10, max 100
        $search = $request->query('search', '');

        $users = User::where('name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%")
            ->paginate($perPage);

        return response()->json([
            'data' => $users->items(),
            'meta' => [
                'total' => $users->total(),
                'per_page' => $users->perPage(),
                'current_page' => $users->currentPage(),
                'last_page' => $users->lastPage(),
            ],
        ]);
    }
}
