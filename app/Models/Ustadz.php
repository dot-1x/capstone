<?php

namespace App\Models;
use Parental\HasParent;

class Ustadz extends User
{
    use HasParent;

    public function pelajaran()
    {
        return $this->hasMany(Pelajaran::class, 'pengampu_id');
    }

    public function anak()
    {
        return $this->hasMany(Santri::class, 'ustadz_id');
    }
}
