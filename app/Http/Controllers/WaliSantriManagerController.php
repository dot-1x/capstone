<?php

namespace App\Http\Controllers;

use App\Http\Requests\WaliSantri\WaliSantriStoreRequest;
use App\Models\WaliSantri;
use Illuminate\Http\Request;
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

    public function api(Request $request)
    {
        return response()->json(WaliSantri::paginateWithSearch($request));
    }

    public function store(WaliSantriStoreRequest $request)
    {
        // Gate::authorize('create');
        $validated = $request->validated();
        $password = Str::random(8);
        $validated['password'] = bcrypt($password);
        $validated['first_password'] = $password;
        $validated['username'] = 'walisantri' . random_int(10000, 99999);
        $validated['role'] = 'walisantri';
        WaliSantri::create($validated);
        return redirect()->route('admin.walisantri.index');
    }

    public function update(Request $request, WaliSantri $waliSantri)
    {
        return redirect()->route('admin.walisantri.index');
    }

    public function destroy(WaliSantri $waliSantri)
    {
        $waliSantri->delete();
        return redirect()->route('admin.walisantri.index');
    }
}