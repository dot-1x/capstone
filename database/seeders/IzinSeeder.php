<?php
// database/seeders/IzinSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Izin;
use App\Models\User;
use Illuminate\Support\Carbon;

class IzinSeeder extends Seeder
{
    public function run()
    {
        $santris = User::where('role', 'santri')->get();
        $walis = User::where('role', 'walisantri')->get();
        $ustadzs = User::where('role', 'ustadz')->get();

        foreach (range(1, 20) as $i) {
            $santri = $santris->random();
            $wali = $walis->where('id', $santri->ortu_id)->first();
            $ustadz = $ustadzs->where('id', $santri->ustadz_id)->first();

            $createdAt = Carbon::now()->subDays(rand(1, 30));
            $tanggalPulang = $createdAt->copy()->addDays(1);
            $tanggalKembali = $tanggalPulang->copy()->addDays(rand(1, 5));

            Izin::create([
                'message' => "Mohon izin pulang untuk keperluan keluarga",
                'created_by' => $wali->id ?? $walis->random()->id,
                'target_santri_id' => $santri->id,
                'opened_by' => rand(0, 1) ? $ustadz?->id : null,
                'status' => rand(0, 1) ? 'accepted' : null,
                'closed_at' => rand(0, 1) ? $createdAt->copy()->addDays(2) : null,
                'created_at' => $createdAt,
                'tanggal_pulang' => $tanggalPulang,
                'tanggal_kembali' => $tanggalKembali,
            ]);
        }
    }
}
