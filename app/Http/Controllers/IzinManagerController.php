<?php

namespace App\Http\Controllers;

use App\Models\Izin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IzinManagerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('admin/izin', [
            'prop' => Izin::paginateWithSearch($request)
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'message' => 'required|text',
                'tanggal_pulang' => 'required|date',
                'tanggal_kembali' => 'required|date',
                'created_by' => 'required|int',
                'target_santri_id' => 'required|int'
            ]
        );
        Izin::create($validated);
        return redirect()->route('admin.izin.index');
    }

    public function update(Request $request, Izin $izin)
    {
        // Update izin logic here
        return redirect()->route('admin.izin.index');
    }

    public function destroy(Izin $izin)
    {
        $izin->delete();
        return redirect()->route('admin.izin.index');
    }
}