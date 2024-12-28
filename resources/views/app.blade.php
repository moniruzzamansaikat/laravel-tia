<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @inertiaHead
    @viteReactRefresh

    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    @inertiaHead
    @routes
</head>

<body>
    @inertia
</body>

</html>
