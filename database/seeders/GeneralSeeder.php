<?php
namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import
use App\General;

class GeneralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        General::create([
            'favicon' => 'favicon.png',
            'logo' => 'logo.png',
            'address' => 'marir hassan',
            'address2' => 'mirir chowk',
            'city' => 'rawalpindi',
            'state' => 'rawalpindi',
            'zip' => '44400',
        ]);
    }
}
