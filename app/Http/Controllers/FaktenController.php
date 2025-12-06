<?php

namespace App\Http\Controllers;

use App\Fakten;
use Illuminate\Http\Request;

class FaktenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $faktens = Fakten::all();
        return response()->json($faktens, 200);
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

        $fakten = new Fakten();
        $fakten->name = $request->name;
        $fakten->description = $request->description;
        $fakten->order = $request->order;
        $fakten->planet = $request->planet;

        if($fakten->save()){
            return response()->json($fakten, 200);
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
     * @param  \App\Fakten  $fakten
     * @return \Illuminate\Http\Response
     */
    public function show(Fakten $fakten)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Fakten  $fakten
     * @return \Illuminate\Http\Response
     */
    public function edit(Fakten $fakten)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Fakten  $fakten
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fakten $fakten)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'order' => 'required',
        ]);

        $fakten->name = $request->name;
        $fakten->description = $request->description;
        $fakten->order = $request->order;
        $fakten->planet = $request->planet;

        if($fakten->save()){
            return response()->json($fakten, 200);
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
     * @param  \App\Fakten  $fakten
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fakten $fakten)
    {
        if($fakten->delete()){
            return  response()->json([
                'message' =>  'Fahten deleted successfully',
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
