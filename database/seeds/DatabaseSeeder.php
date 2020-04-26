<?php

use Illuminate\Database\Seeder;

use App\Category;
use App\Exercise;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Category::class, 4)->create();
        factory(Exercise::class, 10)->create();
    }
}
