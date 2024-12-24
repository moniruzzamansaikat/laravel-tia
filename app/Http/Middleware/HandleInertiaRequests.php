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

        // Debugging the value of authenticated admin
        \Log::info('Authenticated Admin: ', ['admin' => $admin]);

        return array_merge(parent::share($request), [
            'auth' => [
                'admin' => $admin,
            ],
        ]);
    }
}
