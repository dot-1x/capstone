<?php

use App\Http\Middleware\EnsureUserHasRole;
use App\Http\Controllers\IzinManagerController;
use App\Http\Controllers\PelajaranManagerController;
use App\Http\Controllers\SantriManagerController;
use App\Http\Controllers\UstadzManagerController;
use App\Http\Controllers\WaliSantriManagerController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')
    ->name('admin.')
    ->middleware(['auth', EnsureUserHasRole::class.':admin'])
    ->group(
    function(){
        Route::resource('santri', SantriManagerController::class)
        ->only(['index', 'store', 'update', 'destroy']);
        Route::resource('walisantri', WaliSantriManagerController::class)
        ->only(['index', 'store', 'update', 'destroy']);
        Route::resource('ustadz', UstadzManagerController::class)
        ->only(['index', 'store', 'update', 'destroy']);
        Route::get('/ustadz/{ustadz}/pelajaran', [UstadzManagerController::class, 'showPelajaran'])
        ->name('ustadz.pelajaran');
        Route::get('/ustadz/{ustadz}/santri-didik', [UstadzManagerController::class, 'showSantriDidik'])
        ->name('ustadz.santri');
        Route::resource('izin', IzinManagerController::class)
        ->only(['index', 'store', 'update', 'destroy']);
        Route::resource('pelajaran', PelajaranManagerController::class)
        ->only(['index', 'store', 'update', 'destroy']);
    }
);
