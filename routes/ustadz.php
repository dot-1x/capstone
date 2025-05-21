<?php

use App\Http\Controllers\NilaiController;
use App\Http\Controllers\UstadzController;
use Illuminate\Support\Facades\Route;

Route::prefix('/ustadz')
    ->name('ustadz.')
    ->middleware(['auth'])
    ->group(
        function(){
            Route::get('/santri-didik', [UstadzController::class, 'santri'])->name('santri');
            Route::get('/pelajaran', [UstadzController::class, 'pelajaran'])->name('pelajaran');
            Route::get('/izin', [UstadzController::class, 'izin'])->name('izin');
            Route::patch('/nilai/{nilai}', [NilaiController::class, 'update'])->name('nilai.update');
        }
    );
