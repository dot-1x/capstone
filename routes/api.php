<?php

use App\Http\Controllers\NilaiController;
use App\Http\Controllers\PelajaranManagerController;
use App\Http\Controllers\SantriManagerController;
use App\Http\Controllers\UstadzManagerController;
use App\Http\Controllers\WalisantriController;
use App\Http\Controllers\WaliSantriManagerController;
use App\Models\Izin;
use App\Models\Pelajaran;
use App\Models\Santri;
use App\Models\Ustadz;
use App\Models\WaliSantri;
use Illuminate\Support\Facades\Route;
Route::prefix('/api')
    ->name('api.')
    ->middleware(['auth'])
    ->group(
    function(){
        Route::get('/ustadz', [UstadzManagerController::class, 'api'])
        ->name('ustadz');
        Route::get('/walisantri', [WalisantriManagerController::class, 'api'])
        ->name('walisantri');
        Route::get('/santri', [SantriManagerController::class, 'api'])
        ->name('santri');
        Route::get('/santri/{angkatan}', [SantriManagerController::class, 'angkatan'])
        ->name('santri.angkatan');
        Route::get('/pelajaran', [PelajaranManagerController::class, 'api'])
        ->name('pelajaran');
        Route::get('/nilai/santri/{santri}', [NilaiController::class, 'santri'])
        ->name('nilai.santri');
        Route::get('/walisantri/anak', [WalisantriController::class, 'APIanak'])
        ->name('walisantri.anak');
        Route::prefix('/detail')
            ->name('detail.')
            ->group(
            function(){
                Route::get('/santri/{santri}', function(Santri $santri) {
                    return response()->json($santri->load('ortu', 'ustadz', 'nilai'));
                })->name('santri');
                Route::get('/walisantri/{walisantri}', function(WaliSantri $walisantri) {
                    return response()->json($walisantri->load(['anak']));
                })->name('walisantri');
                Route::get('/ustadz/{ustadz}', function(Ustadz $ustadz) {
                    return response()->json($ustadz->load('anak', 'pelajaran'));
                })->name('ustadz');
                Route::get('/izin/{izin}', function(Izin $izin) {
                    return response()->json($izin);
                })->name('izin');
                Route::get('/pelajaran/{pelajaran}', function(Pelajaran $pelajaran) {
                    return response()->json($pelajaran->load(['pengampu', 'nilai']));
                })->name('pelajaran');
            }
        );
    }
);
