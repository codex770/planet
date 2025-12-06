<?php
namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import
use App\AdminContact;

class AdminContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AdminContact::create([
            'email' => 'no-reply@planetAdmin.com',
        ]);
    }
}
