<?php
namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import
use App\User;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'superadmin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('password'),
            'role' => 'superAdmin',
        ]);
    }
}
