<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories', 'CategoriesController@index');
Route::get('categories/{category}', 'CategoriesController@show');
Route::post('categories', 'CategoriesController@store');
Route::put('categories/{category}', 'CategoriesController@update');
Route::delete('categories/{category}', 'CategoriesController@delete');

Route::get('exercises', 'ExercisesController@index');
Route::get('exercises/{exercise}', 'ExercisesController@show');
Route::post('exercises', 'ExercisesController@store');
Route::put('exercises/{exercise}', 'ExercisesController@update');
Route::delete('exercises/{exercise}', 'ExercisesController@delete');

Route::get('routines', 'RoutineController@index');
Route::get('routines/{routine}', 'RoutineController@show');
Route::post('routines', 'RoutineController@store');
Route::put('routines/{routine}', 'RoutineController@update');
Route::delete('routines/{routine}', 'RoutineController@delete');