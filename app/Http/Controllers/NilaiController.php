<?php

namespace App\Http\Controllers;

use App\Models\Nilai;
use App\Models\Pelajaran;
use App\Models\Santri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class NilaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    public function APIsantri(Santri $santri)
    {
        $santri->load('nilai');
        return response()->json([
            'message' => 'successfully received santri with nilai',
            'received' => 1,
            'data' => $santri
        ]);
    }

    public function APIpelajaran(Pelajaran $pelajaran)
    {
        return response()->json($pelajaran->load('nilai'));
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Nilai $nilai)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Nilai $nilai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Nilai $nilai)
    {
        $validated = $request->validate(['nilai' => 'required|numeric|max:100|min:0']);
        $nilai->update($validated);
        return response()->json(
            [
                'message' => "successfully updated nilai " . $nilai->id,
                'received' => 0,
                'data' => null
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Nilai $nilai)
    {
        //
    }
}
