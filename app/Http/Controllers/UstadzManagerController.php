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
            'prop' => Ustadz::paginateWithSearch($request, ['name'], ['anak', 'pelajaran'])
        ]);
    }

    public function api(Request $request)
    {
        return response()->json(Ustadz::paginateWithSearch($request, ['name'], ['anak', 'pelajaran']));
    }

    public function APIshowPelajaran(Ustadz $ustadz)
    {
        $pelajaran = Pelajaran::query()->where('pengampu_id', $ustadz->id)->get();
        $count = $pelajaran->count();
        return response()->json([
            'message' => $count > 0 ? 'successfulyy received ustadz\'z Pelajaran' : 'data not found',
            'received' => $count,
            'data' => $pelajaran
        ], $count > 0 ? 200 : 404);
    }

    public function APIshowSantriDidik(Ustadz $ustadz)
    {
        $santri = Santri::where('ustadz_id', $ustadz->id)->get();
        $count = $santri->count();
        return response()->json([
            'message' => $count > 0 ? 'successfulyy received ustadz\'z santri didik' : 'data not found',
            'received' => $count,
            'data' => $santri
        ], $count > 0 ? 200 : 404);
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