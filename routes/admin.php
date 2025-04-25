<?php

use App\Models\Izin;
use App\Models\Pelajaran;
use App\Models\Santri;
use App\Models\Ustadz;
use App\Models\WaliSantri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/data/santri', function(Request $request) {
    return Inertia::render('tester', [
        'prop' => Santri::paginateWithSearch($request, ['name'], ['ortu'])
    ]);
})->name('get-santri');
Route::post('/admin/data/santri', function(Request $request) {
    return response()->redirectTo(route('get-santri'));
})->name('add-santri');
Route::patch('/admin/data/santri/{santri}', function(Request $request) {
    return response()->redirectTo(route('get-santri'));
})->name('update-santri');
Route::delete('/admin/data/santri/{santri}', function(Santri $santri) {
    $santri->delete();
    return response()->redirectTo(route('get-santri'));
})->name('delete-santri');

Route::get('/admin/data/walisantri', function(Request $request) {
    return Inertia::render('tester', [
        'prop' => WaliSantri::paginateWithSearch($request)
    ]);
})->name('get-walisantri');
Route::post('/admin/data/walisantri', function() {
    return response()->redirectTo(route('get-walisantri'));
})->name('add-walisantri');
Route::patch('/admin/data/walisantri/{walisantri}', function() {
    return response()->redirectTo(route('get-walisantri'));
})->name('update-walisantri');
Route::delete('/admin/data/walisantri/{walisantri}', function(WaliSantri $walisantri) {
    $walisantri->delete();
    return response()->redirectTo(route('get-walisantri'));
})->name('delete-walisantri');

Route::get('/admin/data/ustadz', function(Request $request) {
    return Inertia::render('tester', [
        'prop' => Ustadz::paginateWithSearch($request)
    ]);
})->name('get-ustadz');
Route::get('/admin/data/{ustadz}/pelajaran', function(Ustadz $ustadz) {
    $pelajaran = Pelajaran::where('pengampu_id', $ustadz->id)->get();
    return Inertia::render('tester', [
        'prop' => $pelajaran
    ]);
})->name('admin-ustadz-pelajaran');
Route::get('/admin/data/{ustadz}/santri-didik', function(Ustadz $ustadz) {
    $santri = Santri::where('ustadz_id', $ustadz->id)->get();
    return Inertia::render('tester', [
        'prop' => $santri
    ]);
})->name('admin-ustadz-santri-didik');
Route::post('/admin/data/ustadz', function() {
    return response()->redirectTo(route('get-ustadz'));
})->name('add-ustadz');
Route::patch('/admin/data/ustadz/{ustadz}', function() {
    return response()->redirectTo(route('get-ustadz'));
})->name('update-ustadz');
Route::delete('/admin/data/ustadz/{ustadz}', function(Ustadz $ustadz) {
    $ustadz->delete();
    return response()->redirectTo(route('get-ustadz'));
})->name('delete-ustadz');

Route::get('/admin/data/izin', function(Request $request) {
    return Inertia::render('tester', [
        'prop' => Izin::paginateWithSearch($request)
    ]);
})->name('get-izin');
Route::post('/admin/data/izin', function(Request $request) {
    return response()->redirectTo(route('get-izin'));
})->name('add-izin');
Route::patch('/admin/data/izin/{izin}', function(Request $request) {
    return response()->redirectTo(route('get-izin'));
})->name('update-izin');
Route::delete('/admin/data/izin/{izin}', function(Pelajaran $izin) {
    $izin->delete();
    return response()->redirectTo(route('get-izin'));
})->name('delete-izin');

Route::get('/admin/data/pelajaran', function(Request $request) {
    return Inertia::render('tester', [
        'prop' => Pelajaran::paginateWithSearch($request, ['nama_pelajaran'], ['nilai', 'pengampu'])
    ]);
})->name('get-pelajaran');
Route::post('/admin/data/pelajaran', function(Request $request) {
    return response()->redirectTo(route('get-pelajaran'));
})->name('add-pelajaran');
Route::patch('/admin/data/pelajaran/{pelajaran}', function(Request $request) {
    return response()->redirectTo(route('get-pelajaran'));
})->name('update-pelajaran');
Route::delete('/admin/data/pelajaran/{pelajaran}', function(Pelajaran $pelajaran) {
    $pelajaran->delete();
    return response()->redirectTo(route('get-pelajaran'));
})->name('delete-pelajaran');
