<?php

namespace App\Models;
use Parental\HasParent;

class Santri extends User
{
    use HasParent;

    protected $fillable = [
        'nis', 'name', 'nik', 'alamat', 'angkatan', 'jenis_kelamin', 'santri_role', 'tempat_lahir', 'tanggal_lahir', 'ustadz_id', 'ortu_id'
    ];

    public function nilai()
    {
        return $this->hasMany(Nilai::class, 'santri_id');
    }

    public function ustadz()
    {
        return $this->belongsTo(Ustadz::class, 'ustadz_id');
    }

    public function ortu()
    {
        return $this->belongsTo(WaliSantri::class, 'ortu_id');
    }

    static function generateNis(int $angkatan){
        $latestSantri = static::where('angkatan', $angkatan)
        ->orderBy('nis', 'desc')
        ->first();

        $lastNumber = $latestSantri 
            ? (int) substr($latestSantri->nis, -5) 
            : 0;

        $newNumber = str_pad($lastNumber + 1, 5, '0', STR_PAD_LEFT);
        return $angkatan . $newNumber;
    }
}