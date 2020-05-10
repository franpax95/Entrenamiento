<?php

use Illuminate\Database\Seeder;

use App\Category;
use App\Exercise;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'Francisco Javier Navarro',
            'email'     => 'franpax95@gmail.com',
            'password'  => bcrypt('qwerty')
        ]);

        //factory(Category::class, 4)->create();
        //factory(Exercise::class, 10)->create();
    }
}
