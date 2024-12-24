<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function home()
    {
        return inertia()->render('Admin/Home');
    }

    public function login()
    {
        return inertia()->render('Admin/Auth/Login');
    }
}
