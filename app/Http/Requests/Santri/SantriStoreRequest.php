<?php
// app/Http/Requests/SantriStoreRequest.php

namespace App\Http\Requests\Santri;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SantriStoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'nullable|email|unique:users,email',
            'phone' => 'nullable|string|max:20',
            'name' => 'required|string|max:255',
            
            // Santri-specific fields
            'nik' => 'required|numeric|digits:16|unique:users,nik',
            'alamat' => 'required|string|max:500',
            'tempat_lahir' => 'required|string|max:100',
            'tanggal_lahir' => 'required|date',
            'angkatan' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'jenis_kelamin' => ['required', Rule::in(['pria', 'wanita'])],
            'santri_role' => ['required', Rule::in(['regular', 'pengurus'])],
            'ustadz_id' => 'required|exists:users,id,role,ustadz',
            'ortu_id' => 'required|exists:users,id,role,walisantri',
        ];
    }

    public function messages()
    {
        return [
            'ustadz_id.exists' => 'The selected ustadz is invalid.',
            'ortu_id.exists' => 'The selected walisantri is invalid.',
            'nik.digits' => 'NIK must be exactly 16 digits.',
        ];
    }
}