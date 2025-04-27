<?php

use App\Http\Controllers\NilaiController;
use App\Http\Controllers\UstadzController;
use Illuminate\Support\Facades\Route;

Route::prefix('/ustadz')
    ->name('ustadz.')
    ->middleware(['auth'])
    ->group(
        function(){
            Route::get('/santri', [UstadzController::class, 'santri'])->name('santri');
            Route::get('/pelajaran', [UstadzController::class, 'pelajaran'])->name('pelajaran');
            Route::get('/izin', [UstadzController::class, 'izin'])->name('izin');
            Route::resource('nilai', NilaiController::class)->only('update');
        }
    );
