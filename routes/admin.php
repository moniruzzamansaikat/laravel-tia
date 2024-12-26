<?php

use Illuminate\Support\Facades\Route;

Route::middleware('admin.guest')->group(function () {
    Route::get('/login', 'AdminController@login')->name('login');
    Route::post('login', 'Auth\LoginController@handleLogin')->name('admin.login.save');
});

Route::middleware('admin')->group(function () {
    Route::get('/', 'AdminController@home')->name('home');
    Route::post('/logout', 'Auth\LoginController@handleLogout')->name('logout');
});
