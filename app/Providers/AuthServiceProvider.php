<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
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

        // Define token abilities for Passport
        Passport::tokensCan([
            'superAdmin' => 'Super Admin Access',
            'admin' => 'Admin Access',
            'user' => 'User Access',
        ]);

        // No need to call Passport::routes() anymore in Passport 11+
    }
}
