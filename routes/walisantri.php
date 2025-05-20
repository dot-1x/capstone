<?php

use App\Http\Controllers\WalisantriController;
use Illuminate\Support\Facades\Route;


Route::prefix('/wali')
    ->middleware(['auth'])
    ->name('walisantri.')
    ->group(function (){
        Route::get('/anak', [WalisantriController::class, 'index'])
            ->name('anak');
        Route::get('/izin', [WalisantriController::class, 'izin'])
            ->name('izin');
        Route::post('/izin/{walisantri}', [WalisantriController::class, 'create_izin'])
            ->name('izin.create');
    });
