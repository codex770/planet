<?php

namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import
use App\Social;

class SocialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Social::create([
            'facebook' => 'https://www.facebook.com',
            'instagram' => 'https://www.instagram.com',
            'twitter' => 'https://www.twitter.com',
        ]);
    }
}
