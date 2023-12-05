<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'first_name' => 'System',
            'last_name' => 'User',
            'email' => 'admin@system.com',
            'password' => bcrypt('password'),
        ]);
    }
}
