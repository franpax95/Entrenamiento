<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Exercise;
use App\Category;
use Faker\Generator as Faker;

$factory->define(Exercise::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'description' => $faker->text(600),
        'category_id' => Category::all()->random()->id
    ];
});
