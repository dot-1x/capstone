<?php

namespace App\Policies;

use App\Models\Nilai;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class NilaiPolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Nilai $nilai): bool
    {
        return $nilai->pelajaran->ustadz_id === $user->id || $nilai->santri->ortu_id === $user->id;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Nilai $nilai): Response
    {
        return $nilai->pelajaran->ustadz_id === $user->id
            ? Response::allow()
            : Response::deny('You are not allowed to edit this Nilai.');
    }
    
    public function delete(User $user): Response
    {
        return $user->role === 'admin' ? Response::allow() : Response::deny("Access denied");
    }
}
