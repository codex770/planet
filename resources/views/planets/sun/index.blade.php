
@extends('layouts.app')
@push('styles')
<style>
        .masthead {
            background: url(/assets/img/backdrop_mars.jpg);
            background-size: cover;
            background-position: center center;
        }

        .footer-section {
            background: url(/assets/img/bottom_bg.jpg);
            background-size: cover;
            background-position: center center;
        }

        header.masthead {
            padding-top: 40px !important;
        }

        .homeText {
            /* position: absolute; */
            /* top: 80%; */
            z-index: 10000;
            padding: 5px 10px;
            color: white;
            /* left: 400px; */
            margin-top: -300px;
            text-align: center;
        }

        canvas {
            margin-top: -175px;
        }
    </style>
@endpush
@section('content')
    <header class="masthead">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center text-white">
                        <h1 class="mt-5 font-responsive">Planet Sun</h1>
                        <p>sonnenferne Position (Aphel)</p>
                    </div>
                </div>
            </div>
        </section>
        
        
        <div id="threejs" class="header-mdl" style="width:100%; height: 100%; background-color: transparent;"></div>
        
        @include('component.sideBar')

        
        <section class="page-section top-slider-home">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="owl-carousel owl-carousel-header  owl-theme text-center">
                        @foreach($sliders as $slider)  
                        <div class="item">
                                <h6 class="font-color-sun">ART DES PLANETEN</h6>
                                <p class="">TERRESTRISCH</p>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </section>
    </header>
    <a class="more-btn js-scroll-trigger" style="background-color: #ff6f00; color: #fff;" href="#more">ERKUNDE WEITER <i class="fas fa-chevron-down ml-2"></i></a>



    <section id="more">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="font-responsive text-center">Fakten</h1>
                            </div>
                        </div>
                    </div>

                    @foreach($faktens as $fakten)
                        <div class="row">
                            <div class="col-md-12 mt-2  text-center text-bg-color-sun">
                                <h4 class="font-cutomize">{{$fakten->name}}</h4>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12  text-center pt-2">
                                <h5 class="small-font">{{$fakten->description}}
                                </h5>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    
    <section>
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12 text-center">
                    <a href="#"> <button class="btn custom-button-link">VERGLEICHE ALLE PLANETEN </button> </a>
                </div>
            </div>
        </div>
    </section>

  

    <section>
        <div class="container-fluid pt-5 mt-5">
            <div class="row">
                @foreach($headings as $heading)
                    @php
                        $fileType = explode('/',$heading->file);
                    @endphp
                <div class='col-md-6 '>
                    <div class='card'>
                        <div class='card-img'>
                            <h1 class="font-responsive text-center">{{$heading->title}}</h1>
                            @if($fileType[0] == 'heading_video')
                            <video width="100%" height="400" controls>
                                <source src="{{ asset('storage/'.$heading->file)}}" type="video/mp4">
                                <source src="movie.ogg" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                            @else
                            <img src="{{ asset('storage/'.$heading->file)}}" alt="">
                            @endif
                        </div>
                        <div class='content content-custom-width'>
                            <p class="pt-5">{!!$heading->description!!}</p>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>


    <!-- Contact Section -->
    <section class="page-section footer-section white-color margin-res-custom1 margin-top-only-more1 "
        style="margin-top: 100px;" id="contact">
        <div class="container">
            <div class="row justify-content-center margin-top-only-more">
                <div class="owl-carousel owl-carousel-footer owl-theme text-center">
                    <div class="item footer_item">
                        <h6 class="mt-3">Jupiter</h6>
                        <img src="{{ asset('assets/img/16_jupiter_new.png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Earth</h6>
                        <img src="{{ asset('assets/img/17_earth.png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Mercury</h6>
                        <img src="{{ asset('assets/img/18_mercury_new.png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Venus</h6>
                        <img src="{{ asset('assets/img/27_venus_jg.png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Saturn</h6>
                        <img src="{{ asset('assets/img/28_saturn.png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Uranus</h6>
                        <img src="{{ asset('assets/img/29_uranus (1).png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Neptune</h6>
                        <img src="{{ asset('assets/img/30_neptune.png')}}" />
                        
                    </div>
                    <div class="item footer_item">
                        <h6 class="mt-3">Earth's Moon</h6>
                        <img src="{{ asset('assets/img/31_earth_moon.png')}}" />
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
@push('scripts')
    <script>
        $(document).ready(function () {
            $('.owl-carousel-footer').owlCarousel({
                loop: true,
                nav: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                        loop: false,
                        margin: 20
                    }
                }
            });

            $('.owl-carousel-header').owlCarousel({
                loop: true,
                nav: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 4,
                    }
                }
            })
        })

        $(window).on('load', function() {
            $('.header-mdl').css('height', '54%');
        });
    </script>
    <!-- planet related -->
    <script src="{{ asset('assets/sun/js/three.min.js')}}"></script>
    <script src="{{ asset('assets/sun/js/controls/OrbitControls.js')}}"></script>
    <script src="{{ asset('assets/sun/js/loaders/GLTFLoader.js')}}"></script>

    <script src="{{ asset('assets/sun/app.js')}}"></script>
    <script src="{{ asset('assets/sun/js/lights.js')}}"></script>

@endpush