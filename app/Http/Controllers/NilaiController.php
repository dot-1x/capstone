<?php

namespace App\Http\Controllers;

use App\Models\Nilai;
use App\Models\Pelajaran;
use App\Models\Santri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Barryvdh\DomPDF\Facade\Pdf; // Import the PDF facade
use Illuminate\Support\Facades\Log;

use function PHPSTORM_META\map;

class NilaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    public function generatePDF(Int $nis)
    {
        $santri = Santri::where('nis', $nis)->with('nilai.pelajaran')->first();
        if(!$santri) return response()->json([
            'message' => 'santri not found',
        ], 404);
        // Gate::authorize('viewNilai', $santri);
        // return response()->json(['data'=>$santri]);
        $nilais = $santri->nilai->map(function ($nilai){return $nilai->nilai;});
        $data = [
            'title' => 'Transkrip Nilai',
            'date' => date('d/m/Y'),
            // Student Information
            'student' => [
                'name' => $santri->name,
                'nis' => $santri->nis,
                'birth_info' => $santri->tempat_lahir . '/' . $santri->tanggal_lahir,
                'gender' => $santri->jenis_kelamin,
            ],
            'subjects' => $santri->nilai->map(function ($nilai){
                return [
                    'name' => $nilai->pelajaran->nama_pelajaran, 
                    'semester' => $nilai->semester, 
                    'score'=> $nilai->nilai
                ];}),
            'average' => $nilais->sum() / $santri->nilai->count() // Calculate this dynamically in a real application
        ];

        // 2. Load the view and pass the data
        // We will use a new view file: 'reports.transcript'
        $pdf = PDF::loadView('transcript', $data);

        // 3. (Optional) Set paper size and orientation
        $pdf->setPaper('A4', 'portrait');

        // 4. Download the PDF file with a specific name
        return $pdf->download("transkrip-nilai-{$nis}.pdf");
    }

    public function APIsantri(Santri $santri)
    {
        Gate::authorize('viewNilai', $santri);
        $santri->load('nilai.pelajaran');
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
