<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth:admin')->get('/', 'AdminController@home')->name('home');

Route::get('/login', 'AdminController@login')->name('login');

Route::post('login', 'Auth\LoginController@handleLogin')
    ->name('admin.login.save');
