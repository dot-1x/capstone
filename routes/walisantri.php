<?php

use App\Models\Izin;
use App\Models\Pelajaran;
use App\Models\Santri;
use App\Models\Ustadz;
use App\Models\WaliSantri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/wali/anak', function(){
    $wali = WaliSantri::inRandomOrder()->first();
    $santri = Santri::where('ortu_id', $wali->id)->with('ustadz')->get();
    return Inertia::render('walisantri/anak', [
        'prop' => $santri
    ]);
})->name('walisantri-anak');

Route::get('/wali/izin', function(){
    $wali = WaliSantri::inRandomOrder()->first();
    $izin = Izin::where('created_by', $wali->id)->get();
    return Inertia::render('walisantri/izin', [
        'prop' => $izin
    ]);
})->name('walisantri-izin');

Route::post('/wali/izin', function(){
    $wali = WaliSantri::inRandomOrder()->first();
    $izin = Izin::where('created_by', $wali->id)->get();
    return Inertia::render('tester', [
        'prop' => $izin
    ]);
})->name('walisantri-add-izin');