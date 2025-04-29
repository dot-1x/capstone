<?php

namespace App\Http\Controllers;

use App\Models\WaliSantri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

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
        // Gate::authorize('create');
        $validated = $request->validate([
            'email' => 'required|email|max:255',
            'name'   => 'required|string|max:255',
            'phone'  => 'required|string|max:20',
            'alamat' => 'required|string',
        ]);

        $password = Str::random(8); // Generate random 8-character password

        WaliSantri::create([
            'name'     => $validated['name'],
            'email' => $validated['email'],
            'phone'    => $validated['phone'],
            'alamat'   => $validated['alamat'],
            'password' => Hash::make($password),
            'role' => 'walisantri',
            'first_password' => $password
        ]);
        return redirect()->route('admin.walisantri.index');
    }

    public function update(Request $request, WaliSantri $waliSantri)
    {
        $validated = $request->validate([
            'name'   => 'required|string|max:255',
            'phone'  => 'required|string|max:20',
        ]);
        $waliSantri->update(
            $validated
        );
        return redirect()->route('admin.walisantri.index');
    }

    public function destroy(WaliSantri $waliSantri)
    {
        $waliSantri->delete();
        return redirect()->route('admin.walisantri.index');
    }
}