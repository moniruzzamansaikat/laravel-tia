<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia()->render('Home');
});

Route::get('/contact', function () {
    return inertia()->render('Contact');
});
