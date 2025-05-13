<?php

use App\Http\Controllers\SantriManagerController;
use App\Http\Controllers\UstadzManagerController;
use App\Http\Controllers\WaliSantriManagerController;
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
    }
);
