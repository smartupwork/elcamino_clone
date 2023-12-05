<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('access-admin-panel', function ($user){
            return $user->isAdmin();
        });

        Gate::define('email-resource', function ($user) {

            $id = Auth::user()->id;
            $result = user::where('id', $id)
                ->where('email_manag', '=', '1')
                ->count();

            if($result==1){
                return $result === 1;
            }

        });

        Gate::after(function ($user, $ability) {
            return $user->isAdmin();
        });
    }
}
