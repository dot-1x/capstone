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
            'role' => 'ustadz',
            'alamat' => 'address',
            'phone' => '+62087654321',
        ]);
        // Create 5 ustadz
        $ustadz = User::factory()->count(5)->ustadz()->create();

        // Create 10 wali
        $walis = User::factory()->count(10)->walisantri()->create();

        // Create 30 santri and link them
        User::factory()->count(30)->santri()->make()->each(function ($santri) use ($ustadz, $walis) {
            $santri->ustadz_id = $ustadz->random()->id;
            $santri->ortu_id = $walis->random()->id;
            $santri->save();
        });
    }
}
