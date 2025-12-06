<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use App\General;
use App\Fakten;
use App\Heading;
use App\Slider;

class MainController extends Controller
{
    public function index(){
        $general = General::first();
        return view('index')->with('general', $general);
    }

    public function sun(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'sun')->get();
        $headings = Heading::where('planet', 'sun')->get();
        $sliders = Slider::where('planet', 'sun')->get();
        return view('planets.sun.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function earth(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'earth')->get();
        $headings = Heading::where('planet', 'earth')->get();
        $sliders = Slider::where('planet', 'earth')->get();
        return view('planets.earth.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function mercury(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'mercury')->get();
        $headings = Heading::where('planet', 'mercury')->get();
        $sliders = Slider::where('planet', 'mercury')->get();
        return view('planets.mercury.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function venus(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'venus')->get();
        $headings = Heading::where('planet', 'venus')->get();
        $sliders = Slider::where('planet', 'venus')->get();
        return view('planets.venus.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function mars(){
        //die("here");
        $general = General::first();
        $faktens = Fakten::where('planet', 'mars')->get();
        $headings = Heading::where('planet', 'mars')->get();
        $sliders = Slider::where('planet', 'mars')->get();
        return view('planets.mars.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function jupiter(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'jupiter')->get();
        $headings = Heading::where('planet', 'jupiter')->get();
        $sliders = Slider::where('planet', 'jupiter')->get();
        return view('planets.jupiter.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function saturn(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'saturn')->get();
        $headings = Heading::where('planet', 'saturn')->get();
        $sliders = Slider::where('planet', 'saturn')->get();
        return view('planets.saturn.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function uranus(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'uranus')->get();
        $headings = Heading::where('planet', 'uranus')->get();
        $sliders = Slider::where('planet', 'uranus')->get();
        return view('planets.uranus.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }

    public function neptune(){
        $general = General::first();
        $faktens = Fakten::where('planet', 'neptune')->get();
        $headings = Heading::where('planet', 'neptune')->get();
        $sliders = Slider::where('planet', 'neptune')->get();
        return view('planets.neptune.index')->with('general', $general)
                                        ->with('headings', $headings)
                                        ->with('sliders', $sliders)
                                        ->with('faktens', $faktens);
    }


}
