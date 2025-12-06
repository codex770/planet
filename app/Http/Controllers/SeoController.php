<?php

namespace App\Http\Controllers;

use App\Seo;
use Illuminate\Http\Request;

class SeoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $seos = Seo::first();
        return response()->json($seos, 200);
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
            'title' => 'required',
            'description' => 'required',
            'meta_tags' => 'required',
        ]);

        $seo = new Seo();
        $seo->title = $request->title;
        $seo->description = $request->description;
        $seo->meta_tags = $request->meta_tags;
        $seo->planet = $request->planet;

        if($seo->save()){
            return response()->json($seo, 200);
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
     * @param  \App\Seo  $seo
     * @return \Illuminate\Http\Response
     */
    public function show(Seo $seo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Seo  $seo
     * @return \Illuminate\Http\Response
     */
    public function edit(Seo $seo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Seo  $seo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Seo $seo)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'meta_tags' => 'required',
        ]);

        $seo->title = $request->title;
        $seo->description = $request->description;
        $seo->meta_tags = $request->meta_tags;
        $seo->planet = $request->planet;

        if($seo->save()){
            return response()->json($seo, 200);
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
     * @param  \App\Seo  $seo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Seo $seo)
    {
        if($seo->delete()){
            return  response()->json([
                'message' =>  'Seo deleted successfully',
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
