<?php

namespace App\Http\Controllers;

use App\Http\Requests\Santri\SantriStoreRequest;
use App\Models\Santri;
use Illuminate\Http\Request;
use Inertia\Inertia;
use illuminate\Support\Str;
class SantriManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('admin/santri', [
            'prop' => Santri::paginateWithSearch($request, ['name'], ['ortu'])
        ]);
    }

    public function api(Request $request)
    {
        return response()->json(Santri::paginateWithSearch($request, ['name'], ['ortu']));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(SantriStoreRequest $request)
    {
        $validated = $request->validated();
        $password = Str::random(8);
        $validated['password'] = bcrypt($password);
        $validated['first_password'] = $password;
        $validated['nis'] = Santri::generateNis($validated['angkatan']);
        $validated['username'] = $validated['nis'];
        $validated['role'] = 'santri';
        Santri::create($validated);
        return redirect(route('admin.santri.index'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Santri $santri)
    {
        return redirect(route('admin.santri.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Santri $santri)
    {
        $santri->delete();
        return redirect(route('admin.santri.index'));
    }
}
