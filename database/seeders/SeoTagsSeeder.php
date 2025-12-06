<?php

namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import
use App\SeoTags;

class SeoTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SeoTags::create([
            'title' => 'is simply dummy text of the printing and typesetting',
            'meta_tags' => 'simply,dummy,text',
            'meta_description' => 'is simply dummy text of the printing and typesetting is simply dummy text of the printing and typesetting',
        ]);
    }
}
