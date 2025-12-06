<?php

namespace App\Http\Controllers;

use App\Slider;
use App\Fakten;
use App\Seo;
use App\Heading;
use Illuminate\Http\Request;

class PlanetController extends Controller
{
    public function getPlanet($name)
    {
        $planet = array();
        $sliders = Slider::where('planet',$name)->get();
        $planet['slider'] = $sliders;
        $faktens = Fakten::where('planet',$name)->get();
        $planet['fakten'] = $faktens;
        $seo = Seo::where('planet',$name)->first();
        $planet['seo'] = $seo;
        $headings = Heading::where('planet',$name)->get();
        $planet['heading'] = $headings;
        return response()->json($planet, 200);
    }

    public function getMarsData(Request $request){
        dd($request->all());
    }
}
