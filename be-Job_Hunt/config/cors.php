<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],  // Allow the API and CSRF cookie paths
    'allowed_methods' => ['*'],  // Allow all HTTP methods
    'allowed_origins' => ['http://localhost:3000'],  // Allow React frontend domain
    'allowed_origins_patterns' => [], 
    'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization', 'X-XSRF-TOKEN', 'Accept'], // Include Authorization and CSRF token headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,  // Enable support for credentials (cookies)
];
