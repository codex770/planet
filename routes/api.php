<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function (){
    Route::post('register','AuthController@register');
    Route::post('login','AuthController@login');
    Route::post('reset-password-request', 'AuthController@resetPasswordRequest');
    Route::post('check-password-code', 'AuthController@checkPasswordCode');
    Route::post('reset-password', 'AuthController@resetPassword');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('profile', 'AuthController@profile');
        Route::get('logout','AuthController@logout');
    });
});

Route::group(['middleware' => 'auth:api'], function () {
        Route::get('general','SettingController@getGeneral');
        Route::get('social-links','SettingController@getSocialLinks');
        Route::get('seo-tags','SettingController@getSeotags');
        Route::get('get-users','SettingController@getUsers');
        Route::post('update-general/{id}','SettingController@updateGeneral');
        Route::post('update-social-links/{id}','SettingController@updateSocialLinks');
        Route::post('update-seo-tags/{id}','SettingController@updateSeoTags');
        Route::delete('delete-user/{id}','SettingController@deleteUser');
        Route::resource('sliders','SliderController');
        Route::resource('seos','SeoController');
        Route::resource('faktens','FaktenController');
        Route::resource('headings','HeadingController');
        Route::get('all-planet/{name}','PlanetController@getPlanet');
        Route::get('admin-contact','SettingController@getAdminContact');
        Route::post('update-contact/{id}','SettingController@updateAdminContact');
        Route::get('all-contact','SettingController@getAllContact');
        Route::delete('delete-contact/{id}','SettingController@deleteContact');
    //Super Admin access
    Route::group(['middleware' => 'scope:superAdmin'], function() {
        
    });

    // Admin access
    Route::group(['middleware' => 'scope:admin'], function() {
       

    });

    // user access
    Route::group(['middleware' => 'scope:user'], function() {
      

    });
});
