<?php

use App\Models\Izin;
use App\Models\Pelajaran;
use App\Models\Santri;
use App\Models\Ustadz;
use App\Models\WaliSantri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/data/santri/{santri}', function(Santri $santri) {
    return Inertia::render('tester', [
        'prop' => $santri->load('ortu', 'ustadz')
    ]);
})->name('detail-santri');
Route::get('/data/walisantri/{walisantri}', function(WaliSantri $walisantri) {
    return Inertia::render('tester', [
        'prop' => $walisantri
    ]);
})->name('detail-walisantri');
Route::get('/data/ustadz/{ustadz}', function(Ustadz $ustadz) {
    return Inertia::render('tester', [
        'prop' => $ustadz
    ]);
})->name('detail-ustadz');
Route::get('/data/izin/{izin}', function(Izin $izin) {
    return Inertia::render('tester', [
        'prop' => $izin
    ]);
})->name('detail-izin');
Route::get('/data/pelajaran/{pelajaran}', function(Pelajaran $pelajaran) {
    return Inertia::render('tester', [
        'prop' => $pelajaran->load('nilai.santri')
    ]);
})->name('detail-pelajaran');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/ustadz.php';
require __DIR__.'/walisantri.php';