<?php

namespace App\Http\Controllers;

use App\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sliders = Slider::all();
        return response()->json($sliders, 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'order' => 'required',
        ]);

        $slider = new Slider();
        $slider->name = $request->name;
        $slider->description = $request->description;
        $slider->order = $request->order;
        $slider->planet = $request->planet;

        if($slider->save()){
            return response()->json($slider, 200);
        }else{
            return response()->json([
                'message' => 'Some error occurred , Please try gain',
                'status_code' => 500
            ], 500);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function show(Slider $slider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function edit(Slider $slider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Slider $slider)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'order' => 'required',
        ]);

        $slider->name = $request->name;
        $slider->description = $request->description;
        $slider->order = $request->order;
        $slider->planet = $request->planet;

        if($slider->save()){
            return response()->json($slider, 200);
        }else{
            return response()->json([
                'message' => 'Some error occurred , Please try gain',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function destroy(Slider $slider)
    {
        if($slider->delete()){
            return  response()->json([
                'message' =>  'Slider deleted successfully',
                'status_code' => 200
            ],200);
        }
        else{
            return  response()->json([
                'message' => 'some error occured try again!',
                'status_code' => 500
            ],500);
        }
    }
}
