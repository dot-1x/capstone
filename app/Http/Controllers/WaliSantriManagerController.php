<?php

namespace App\Http\Controllers;

use App\Models\WaliSantri;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WaliSantriManagerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('admin/walisantri', [
            'prop' => WaliSantri::paginateWithSearch($request)
        ]);
    }

    public function store(Request $request)
    {
        // Add walisantri logic here
        return redirect()->route('admin.walisantri.index');
    }

    public function update(Request $request, WaliSantri $waliSantri)
    {
        // Update walisantri logic here
        return redirect()->route('admin.walisantri.index');
    }

    public function destroy(WaliSantri $waliSantri)
    {
        $waliSantri->delete();
        return redirect()->route('admin.walisantri.index');
    }
}