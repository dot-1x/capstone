<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nilai extends Model
{
    protected $fillable = ['nilai', 'semester', 'pelajaran_id', 'santri_id'];

    public function pelajaran()
    {
        return $this->belongsTo(Pelajaran::class);
    }

    public function santri()
    {
        return $this->belongsTo(Santri::class);
    }
}
