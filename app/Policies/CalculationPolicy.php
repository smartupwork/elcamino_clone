<?php

namespace App\Policies;

use App\Models\Calculation;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CalculationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Calculation  $calculation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Calculation $calculation)
    {
        if ($user->isAdmin()){
            return true;
        }
        return $calculation->user_id == $user->id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Calculation  $calculation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Calculation $calculation)
    {
        if ($user->isAdmin()){
            return true;
        }
        return $calculation->user_id == $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Calculation  $calculation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Calculation $calculation)
    {
        if ($user->isAdmin()){
            return true;
        }
        return $calculation->user_id == $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Calculation  $calculation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Calculation $calculation)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Calculation  $calculation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Calculation $calculation)
    {
        //
    }
}
