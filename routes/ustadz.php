<?php

use App\Models\Izin;
use App\Models\Nilai;
use App\Models\Pelajaran;
use App\Models\Santri;
use App\Models\Ustadz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/ustadz/santri-didik', function(Request $request){
    $ustadz = Ustadz::inRandomOrder()->first();
    $santri = Santri::query()->where('ustadz_id', $ustadz->id)->with('ortu')->get();
    return Inertia::render('ustadz/santri', [
        'prop' => $santri
    ]);
})->name('ustadz-santri-didik');
Route::get('/ustadz/pelajaran', function(Request $request){
    $semester = $request->query('semester', null);
    $ustadz = Ustadz::inRandomOrder()->first();
    $pelajaran = Pelajaran::where('pengampu_id', $ustadz->id)->with('nilai');
    if ($semester){
        $pelajaran->where('semester', $semester);
    }
    return Inertia::render('ustadz/pelajaran', [
        'prop' => $pelajaran->get()
    ]);
})->name('ustadz-pelajaran');
Route::get('/ustadz/izin', function(Request $request){
    $izin = Izin::all()->load('targetSantri', 'createdBy');
    return Inertia::render('ustadz/izin', [
        'prop' => $izin
    ]);
})->name('ustadz-izin');

Route::patch('/ustadz/edit/nilai/{nilai}', function(Nilai $nilai){
    return redirect(route('ustadz-santri-didik'));
});
