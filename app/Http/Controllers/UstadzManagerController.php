<?php

namespace App\Http\Controllers;

use App\Http\Requests\Ustadz\UstadzStoreRequest;
use App\Models\Ustadz;
use App\Models\Pelajaran;
use App\Models\Santri;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UstadzManagerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('admin/ustadz', [
            'prop' => Ustadz::paginateWithSearch($request)
        ]);
    }

    public function api(Request $request)
    {
        return response()->json(Ustadz::paginateWithSearch($request));
    }

    public function showPelajaran(Ustadz $ustadz)
    {
        $pelajaran = Pelajaran::where('pengampu_id', $ustadz->id)->get();
        return Inertia::render('tester', [
            'prop' => $pelajaran
        ]);
    }

    public function showSantriDidik(Ustadz $ustadz)
    {
        $santri = Santri::where('ustadz_id', $ustadz->id)->get();
        return Inertia::render('tester', [
            'prop' => $santri
        ]); 
    }

    public function store(UstadzStoreRequest $request)
    {
        $validated = $request->validated();
        $password = Str::random(8);
        $validated['password'] = bcrypt($password);
        $validated['first_password'] = $password;
        $validated['username'] = 'ustadz' . random_int(10000, 99999);
        $validated['role'] = 'ustadz';
        Ustadz::create($validated);
        return redirect()->route('admin.ustadz.index');
    }

    public function update(Request $request, Ustadz $ustadz)
    {
        // Update ustadz logic here
        return redirect()->route('admin.ustadz.index');
    }

    public function destroy(Ustadz $ustadz)
    {
        $ustadz->delete();
        return redirect()->route('admin.ustadz.index');
    }
}