<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get( '/{path?}', function($path = null){
    if(strcmp($path, 'login') == 0){
        return view('auth/login');
    }
    
    else if(strcmp($path, 'home') == 0){
        return view('home');
    }
    
    else{
        $user = Auth::user();
        return view(
            'app',
            ['user' => $user]
        );
    }
})->where('path', '.*');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

