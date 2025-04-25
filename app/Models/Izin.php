<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class Izin extends Model
{
    use HasFactory;

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
    public static function paginateWithSearch(
        Request $request,
        array $searchable = [],
        array $relations = ['createdBy', 'targetSantri']
    ): LengthAwarePaginator {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 10);
        $search = $request->query('search', '');
        $query = static::query()->with($relations);
        if ($search && !empty($searchable)) {
            $query->where(function($q) use ($search, $searchable) {
                foreach ($searchable as $field) {
                    $q->orWhere($field, 'like', "%{$search}%");
                }
            });
        }
        $result = $query->paginate($limit, ['*'], 'page', $page);
        abort_if($result->isEmpty(), 404, 'No records found');
        return $result;
    }
}
