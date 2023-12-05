<?php


namespace App\Helpers;


use App\Models\User;
use Illuminate\Validation\Rule;

class ValidationRules
{
    public static $basicString = 'required|string|max:255';

    public static function storeUser()
    {
        
        return [
            'first_name'       => 'required|string|max:255',
            'last_name'        => 'required|string|max:255',
            'email'            => 'required|string|max:255|email|unique:users,email',
            'password'         => 'required|string|max:25|min:6',
        ];
    }

    public static function updateUser(User $user)
    { 
        $rules = self::storeUser();
        $rules['email'] .= ','. $user->id;
        $rules['password'] = 'nullable|string|max:25|min:6';
        return $rules;
    }

}
