<?php

namespace App\Http\Controllers;

use App\Models\Ustadz;
use App\Models\Pelajaran;
use App\Models\Santri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UstadzManagerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('tester', [
            'prop' => Ustadz::paginateWithSearch($request)
        ]);
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

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'   => 'required|string|max:255',
            'phone'  => 'required|string|max:20',
            'email' => 'required|email',
        ]);
        $password = Str::random(8);
        Ustadz::create(
            [
                'name' => $validated['name'],
                'phone' => $validated['phone'],
                'email' => $validated['email'],
                'role' => 'ustadz',
                'password' => Hash::make($password),
                'first_password' => $password
            ]
        );
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