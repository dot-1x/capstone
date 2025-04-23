<?php

namespace App\Models;
use Parental\HasParent;

class WaliSantri extends User
{
    use HasParent;
    
    protected $fillable = ['alamat', 'jenis_kelamin'];

    public function anak()
    {
        return $this->hasMany(Santri::class, 'ortu_id');
    }
}
