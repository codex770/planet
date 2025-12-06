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

Route::get('/symlink', function() {
    $targetFolder = $_SERVER['DOCUMENT_ROOT'].'/storage/app/public';
    $linkFolder = $_SERVER['DOCUMENT_ROOT'].'/public/storage';
    symlink($targetFolder,$linkFolder);
    echo 'Symlink process successfully completed';
});


Route::get('/', 'MainController@index');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

Route::get('/sun', 'MainController@sun');
Route::get('/earth', 'MainController@earth');
Route::get('/mercury', 'MainController@mercury');
Route::get('/venus', 'MainController@venus');
Route::get('/mars', 'MainController@mars');
Route::get('/jupiter', 'MainController@jupiter');
Route::get('/saturn', 'MainController@saturn');
Route::get('/uranus', 'MainController@uranus');
Route::get('/neptune', 'MainController@neptune');


Route::view('/contact', 'contact');
Route::view('/theme-setting', 'theme-setting');
Route::view('/user-management', 'user-management');

Route::view('/about', 'about');

Route::post('/contact','ContactController@store');

// dashboard
Route::get('/dashboard', function () {
    return view('welcome');
})->where('any', '.*');

Route::get('/dashboard/{any}', function () {
    return view('welcome');
})->where('any', '.*');