<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>planetenallee</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
        <link href="{{asset('css/sb-admin-2.min.css')}}" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        
    </head>
    <body>
        <div id="app"></div>

        <!-- <a href="{{url('dashboard/login')}}" class="float-right mr-5">Login</a> -->

        <!-- <script src="{{asset('vendor/jquery/jquery.min.js')}}"></script> -->
        <!-- <script src="{{asset('vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script> -->
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
