<?php

namespace App\Http\Controllers;

use App\Models\Izin;
use App\Models\Santri;
use App\Models\WaliSantri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WalisantriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $wali = Auth::id();
        $santri = Santri::where('ortu_id', $wali);
        $search = $request->query('search');
        if ($search) {
            $santri = $santri->where('name', 'like', "%{$search}%");
        }
        return Inertia::render('walisantri/anak', [
            'prop' => $santri->paginate(10, ['*'], 'page', $request->query('page', 1))
        ]);
    }
    public function APIanak()
    {
        $wali = Auth::id();
        $santri = Santri::where('ortu_id', $wali)->get();
        $count = $santri->count();
        return response()->json([
            'message' => $count > 0 ? 'successfulyy walisantri\'s anak' : 'data not found',
            'received' => $count,
            'data' => $santri
        ], $count > 0 ? 200 : 404);
    }
    public function izin(Request $request)
    {   
        $wali = Auth::id();
        $izin = Izin::where('created_by', $wali)->with(['createdBy', 'targetSantri'])
            ->paginate(10, ['*'], 'page', $request->query('page', 1));
        return Inertia::render('walisantri/izin', [
            'prop' => $izin
        ]);
    }
    public function create_izin(Request $request, WaliSantri $walisantri)
    {
        $validated = $request->validate(
            [
                'message' => 'required|string|max:500',
                'target_santri_id' => 'required|int',
                'created_by' => 'required|int',
                'tanggal_pulang' => 'required|date',
                'tanggal_kembali' => 'required|date'
            ]
        );
        Izin::create($validated);
        return redirect(route('walisantri.izin'));
    }
}
