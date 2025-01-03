<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        $admin = auth()->guard('admin')->user();

        return array_merge(parent::share($request), [
            'flush' => [
                'success' => session('success'),
                'error' => session('error'),
            ],
            'auth' => [
                'admin' => $admin,
            ],
        ]);
    }
}
