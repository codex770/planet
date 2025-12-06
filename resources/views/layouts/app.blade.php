<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Solar System</title>


    <link href="{{ asset('assets/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet">
    <link href="{{ asset('assets/vendor/magnific-popup/magnific-popup.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/vendor/owlCarousel/owl.carousel.min.css')}}">

    @stack('styles')
   
    <link href="{{ asset('assets/css/creative.css')}}" rel="stylesheet">

</head>

<body id="page-top" class="opening hide-UI view-2D zoom-large data-close controls-close">
    @include('component.navBar')
    
   
    <main>
        @yield('content')
    </main>


    <!-- Footer -->
        @include('component.footer')

    <!-- Bootstrap core JavaScript -->
    <!-- <script src="vendor/jquery/jquery.min.js"></script> -->

    <script src="{{ asset('assets/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{ asset('assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{ asset('assets/vendor/jquery-easing/jquery.easing.min.js')}}"></script>
    <script src="{{ asset('assets/vendor/magnific-popup/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{ asset('assets/js/creative.js')}}"></script>
    <script src="{{ asset('assets/vendor/owlCarousel/owl.carousel.min.js')}}"></script>
    @stack('scripts')
    
    <script src="{{ asset('assets/solar/script.js')}}"></script>
    
</body>

</html>
