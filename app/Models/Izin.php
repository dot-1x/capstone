<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Izin extends Model
{
    protected $fillable = [
        'message',
        'tanggal_pulang',
        'tanggal_kembali',
        'created_by',
        'target_santri_id',
        'opened_by',
        'status',
        'closed_at',
    ];

    protected $casts = [
        'tanggal_pulang' => 'datetime',
        'tanggal_kembali' => 'datetime',
        'closed_at' => 'datetime',
    ];

    // Created by WaliSantri
    public function createdBy()
    {
        return $this->belongsTo(WaliSantri::class, 'created_by');
    }

    // Target Santri
    public function targetSantri()
    {
        return $this->belongsTo(Santri::class, 'target_santri_id');
    }

    // Opened (approved/rejected) by Ustadz
    public function openedBy()
    {
        return $this->belongsTo(Ustadz::class, 'opened_by');
    }
}
