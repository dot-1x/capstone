<?php

namespace App\Http\Controllers;

use App\Models\Santri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
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

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'   => 'required|string|max:255',
            'phone'  => 'required|string|max:20',
            'email' => 'required|email',
            'ustadz' => 'required|int',
            'ortu' => 'required|int',
        ]);
        $password = Str::random(8);
        Santri::create(
            [
                'name' => $validated['name'],
                'phone' => $validated['phone'],
                'email' => $validated['email'],
                'role' => 'santri',
                'password' => Hash::make($password),
                'first_password' => $password,
                'santri_role' => 'regular',
                'ustadz_id' => $validated['ustadz'],
                'ortu_id' => $validated['ortu']
            ]
        );
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
