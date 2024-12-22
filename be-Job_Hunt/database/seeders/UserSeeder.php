<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create a specific user
        User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => Hash::make('password'),
        ]);

        // Generate 20 additional users using the factory
        User::factory()->count(20)->create();
    }
}
