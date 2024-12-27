<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $passwordHash = '$2y$12$BjqfG4PF/jj7YBQTqQcsWOMgrp2XBvf8JgZ7V0GKAzYXTXOrqQ4N6';

        // Generate user data with pre-set attributes
        $users = User::factory()->count(100)->make([
            'password' => $passwordHash,
        ]);

        // Perform a single bulk insert
        DB::table('users')->insert($users->toArray());

        // Create admin directly without looping
        DB::table('admins')->insert([
            'name' => 'admin',
            'username' => 'admin',
            'password' => $passwordHash,
        ]);
    }
}
