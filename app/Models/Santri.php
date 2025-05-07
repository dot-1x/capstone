<?php

namespace App\Models;
use Parental\HasParent;

class Santri extends User
{
    use HasParent;

    protected $fillable = [
        'nis', 'name', 'nik','alamat', 'angkatan', 'jenis_kelamin', 'santri_role', 'tempat_lahir', 'tanggal_lahir', 'ustadz_id', 'ortu_id'
    ];

    public function nilai()
    {
        return $this->hasMany(Nilai::class);
    }

    public function ustadz()
    {
        return $this->belongsTo(Ustadz::class, 'ustadz_id');
    }

    public function ortu()
    {
        return $this->belongsTo(WaliSantri::class, 'ortu_id');
    }
}