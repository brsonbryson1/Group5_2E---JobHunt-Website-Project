<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    // You can add URIs that should be excluded from CSRF verification here
    protected $except = [];
}
