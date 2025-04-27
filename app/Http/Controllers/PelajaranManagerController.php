<?php

namespace App\Http\Controllers;

use App\Models\Pelajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PelajaranManagerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('tester', [
            'prop' => Pelajaran::paginateWithSearch($request, ['nama_pelajaran'], ['nilai', 'pengampu'])
        ]);
    }

    public function store(Request $request)
    {
        // Add pelajaran logic here
        return redirect()->route('pelajaran-manager.index');
    }

    public function update(Request $request, Pelajaran $pelajaran)
    {
        // Update pelajaran logic here
        return redirect()->route('pelajaran-manager.index');
    }

    public function destroy(Pelajaran $pelajaran)
    {
        $pelajaran->delete();
        return redirect()->route('pelajaran-manager.index');
    }
}