<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EncryptCookies
{
    public function handle(Request $request, Closure $next)
    {
        // Middleware logic to encrypt cookies can go here

        return $next($request);
    }
}
