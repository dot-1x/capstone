<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelajaran extends Model
{
    protected $fillable = ['nama_pelajaran', 'semester', 'pengampu_id'];

    public function pengampu() // Ustadz who teaches
    {
        return $this->belongsTo(Ustadz::class, 'pengampu_id');
    }

    public function nilai()
    {
        return $this->hasMany(Nilai::class);
    }
}
