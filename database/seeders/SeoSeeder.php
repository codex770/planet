<?php
namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder; // <- Correct import
use App\Seo;

class SeoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'mars'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'mercury'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'earth'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'neptune'
        ]);


        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'jupiter'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'saturn'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'uranus'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'venus'
        ]);

        Seo::create([
            'title' => 'is simply dummy text of the printing and type setting',
            'meta_tags' => 'simply,dummy,text',
            'description' => 'is simply dummy text of the printing and type setting is simply dummy text of the printing and typesetting',
            'planet' => 'sun'
        ]);
    }
}
