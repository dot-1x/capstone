<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@localhost.com',
            'password' => bcrypt('password'), // default password
            'role' => 'admin',
            'alamat' => 'address',
            'phone' => '+62087654321',
            'username' => 'admin'
        ]);
        $ustadz1 = User::factory()->create([
            'name' => 'ustadz',
            'email' => 'ustadz@localhost.com',
            'password' => bcrypt('password'), // default password
            'role' => 'ustadz',
            'alamat' => 'address',
            'phone' => '+6298765230',
            'username' => 'ustadz'
        ]);
        $wali1 = User::factory()->create([
            'name' => 'walisantri',
            'email' => 'walisantri@localhost.com',
            'password' => bcrypt('password'), // default password
            'role' => 'walisantri',
            'alamat' => 'address',
            'phone' => '+1-2233-4523-42',
            'username' => 'walisantri'
        ]);
        // Create 5 ustadz
        $ustadzFact = User::factory()->count(3)->ustadz()->create();
        // Create 10 wali
        $walisFact = User::factory()->count(3)->walisantri()->create();
        
        $ustadz = $ustadzFact->push($ustadz1);
        $walis = $walisFact->push($wali1);
        // Create 30 santri and link them
        User::factory()->count(50)->santri()->make()->each(function ($santri) use ($ustadz, $walis) {
            $santri->ustadz_id = $ustadz->random()->id;
            $santri->ortu_id = $walis->random()->id;
            $santri->save();
        });
    }
}
