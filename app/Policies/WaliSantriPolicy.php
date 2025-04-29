<?php

namespace App\Policies;

use App\Models\User;
use App\Models\WaliSantri;
use Illuminate\Auth\Access\Response;

class WaliSantriPolicy
{
    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role == 'admin';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, WaliSantri $waliSantri): bool
    {
        return $user->role == 'admin';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, WaliSantri $waliSantri): bool
    {
        return $this->update($user, $waliSantri);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, WaliSantri $waliSantri): bool
    {
        return false;
    }
}
