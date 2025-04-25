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
    return Inertia::render('tester', [
        'prop' => $santri
    ]);
})->name('ustadz-santri-didik');
Route::get('/ustadz/pelajaran', function(Request $request){
    $ustadz = Ustadz::inRandomOrder()->first();
    $pelajaran = Pelajaran::where('pengampu_id', $ustadz->id)->with('nilai')->get();
    return Inertia::render('tester', [
        'prop' => $pelajaran
    ]);
})->name('ustadz-pelajaran');
Route::get('/ustadz/izin', function(Request $request){
    $izin = Izin::all()->load('targetSantri', 'createdBy');
    return Inertia::render('tester', [
        'prop' => $izin
    ]);
})->name('ustadz-izin');

Route::patch('/ustadz/edit/nilai/{nilai}', function(Nilai $nilai){
    return redirect(route('ustadz-santri-didik'));
});
