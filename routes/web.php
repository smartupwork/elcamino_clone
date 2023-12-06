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


Auth::routes();
Route::get('/',[App\Http\Controllers\Auth\LoginController::class,'login']);
Route::group(['middleware' => 'auth'], function (){
    Route::redirect('/dashboard', '/calculations')->name('dashboard');
    Route::resource('calculations', 'CalculationController');
    Route::post('calculator/ajax-save', 'CalculationController@ajax_save');
    Route::resource('users', 'UserController');

    Route::get('profile/edit', 'UserController@profile')->name('profile.edit');

    //snapshare
    Route::get('/impersonate/{id}',[App\Http\Controllers\UserController::class,'imperson'])->name('/impersonate/{id}');
    Route::get('copy/{id}',[App\Http\Controllers\CalculationController::class,'copy'])->name('copy/{id}');
    Route::get('update/{id}',[App\Http\Controllers\CalculationController::class,'update_snapshot'])->name('update/{id}');

});


