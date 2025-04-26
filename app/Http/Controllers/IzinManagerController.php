<?php

namespace App\Http\Controllers;

use App\Models\Izin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IzinManagerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('tester', [
            'prop' => Izin::paginateWithSearch($request)
        ]);
    }

    public function store(Request $request)
    {
        // Add izin logic here
        return redirect()->route('izin-manager.index');
    }

    public function update(Request $request, Izin $izin)
    {
        // Update izin logic here
        return redirect()->route('izin-manager.index');
    }

    public function destroy(Izin $izin)
    {
        $izin->delete();
        return redirect()->route('izin-manager.index');
    }
}