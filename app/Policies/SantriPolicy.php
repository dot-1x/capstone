<?php

namespace App\Policies;

use App\Models\Santri;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SantriPolicy
{

    public function viewNilai(User $user, Santri $santri) {
        if ($user->id === $santri->ortu_id) {
            return Response::allow();
        }
        if ($user->id === $santri->ustadz_id) {
            return Response::allow();
        }
        if ($user->role === 'admin') {
            return Response::allow();
        }
        return Response::deny("You're not allowed to view this nilai");
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Santri $santri): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Santri $santri): bool
    {
        return $user->role === 'admin';
    }
}
