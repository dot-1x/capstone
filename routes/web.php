<?php

use App\Models\Izin;
use App\Models\Pelajaran;
use App\Models\Santri;
use App\Models\Ustadz;
use App\Models\WaliSantri;
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
Route::prefix('/data')
    ->name('detail.')
    ->middleware(['auth'])
    ->group(
        function(){
            Route::get('/santri/{santri}', function(Santri $santri) {
                return Inertia::render('tester', [
                    'prop' => $santri->load('ortu', 'ustadz')
                ]);
            })->name('santri');
            Route::get('/walisantri/{walisantri}', function(WaliSantri $walisantri) {
                return Inertia::render('tester', [
                    'prop' => $walisantri
                ]);
            })->name('walisantri');
            Route::get('/ustadz/{ustadz}', function(Ustadz $ustadz) {
                return Inertia::render('tester', [
                    'prop' => $ustadz
                ]);
            })->name('ustadz');
            Route::get('/izin/{izin}', function(Izin $izin) {
                return Inertia::render('tester', [
                    'prop' => $izin
                ]);
            })->name('izin');
            Route::get('/pelajaran/{pelajaran}', function(Pelajaran $pelajaran) {
                return Inertia::render('tester', [
                    'prop' => $pelajaran->load('nilai.santri')
                ]);
            })->name('pelajaran');
        }
    );

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/ustadz.php';
require __DIR__.'/walisantri.php';