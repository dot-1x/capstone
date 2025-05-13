<?php

namespace App\Http\Controllers;

use App\Models\Santri;
use App\Models\Pelajaran;
use App\Models\Izin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UstadzController extends Controller
{
    public function santri()
    {
        $ustadzId = Auth::id();
        $santri = Santri::where('ustadz_id', $ustadzId)->get();
        return Inertia::render('ustadz/santri', [
            'prop' => $santri
        ]);
    }

    public function pelajaran(Request $request)
    {
        $semester = $request->query('semester');
        $ustadzId = Auth::id();
        $query = Pelajaran::query()->where('pengampu_id', $ustadzId);
        if ($semester) $query->where('semester', $semester);
        $pelajaran = $query->get();
        return Inertia::render('ustadz/pelajaran', [
            'prop' => $pelajaran
        ]);
    }

    public function izin()
    {
        $ustadzId = Auth::id();
        $izin = Izin::whereHas('targetSantri', function ($query) use ($ustadzId) {
                $query->where('ustadz_id', $ustadzId);
            })
            ->with(['createdBy', 'targetSantri', 'openedBy'])
            ->get();

        return Inertia::render('ustadz/izin', [
            'prop' => $izin
        ]);
    }
}
