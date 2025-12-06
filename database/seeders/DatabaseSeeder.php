<?php

namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(SuperAdminSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(GeneralSeeder::class);
        $this->call(SeoTagsSeeder::class);
        $this->call(SocialSeeder::class);
        $this->call(AdminContactSeeder::class);
        $this->call(SeoSeeder::class);
    }
}
