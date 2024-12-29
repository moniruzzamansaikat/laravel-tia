<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function index()
    {
        $search = request()->get('search', '');

        $users = User::query()
            ->when($search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%");
            })
            ->paginate(10);
        
        return inertia()->render('Admin/Users/Index', compact('users'));
    }

    public function create()
    {
        $pageTitle = 'Add New User';
        
        return inertia()->render('Admin/Users/Create', compact('pageTitle'));
    }

    public function save(Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required',
        ]);

        $user           = new User();
        $user->name     = $request->name;
        $user->email     = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return to_route('admin.user.index')->withSuccess('User saved successfully');
    }
}
