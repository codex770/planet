<?php

namespace App\Http\Controllers;

use App\Heading;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use input;

class HeadingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $heading = Heading::all();
        return response()->json($heading, 200);
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
            'file'=>  'required',
            'description'=>'required',
        ]);
        
        $heading = new Heading();
       
        $heading->title = $request->title;
        $heading->description = $request->description;
        $heading->planet = $request->planet;
    
        $file = $request->file;
        
        if(substr($file->getMimeType(), 0, 5) == 'image') {
            $path = $request->file('file')->store('heading_photo');
            $heading->file = $path;
            $heading->status = '0';
        } else {
            $path = $request->file('file')->store('heading_video');
            $heading->file = $path;
            $heading->status = '1';
        }

        if($heading->save()){
           return response()->json($heading, 200);
        } else {
            return response()->json([
                'message'=> 'Some error occurred , Please try gain',
                'status_code'=>500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Heading  $heading
     * @return \Illuminate\Http\Response
     */
    public function show(Heading $heading)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Heading  $heading
     * @return \Illuminate\Http\Response
     */
    public function edit(Heading $heading)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Heading  $heading
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Heading $heading)
    {
        $request->validate([
            'title' => 'required',
            'description'=>'required',
        ]);
        
        $oldPath = $heading->file;
        if($request->hasFile('file')){
            $request->validate([
                'file' => 'required',
            ]);
            
        $file = $request->file;

        if(substr($file->getMimeType(), 0, 5) == 'image') {
                $path = $request->file('file')->store('heading_photo');
                $heading->file = $path;
                $heading->status = '0';
                Storage::delete($oldPath);
            } else {
                $path = $request->file('file')->store('heading_video');
                $heading->file = $path;
                $heading->status = '1';
                Storage::delete($oldPath);
            }
        }

        $heading->title = $request->title;
        $heading->description = $request->description;
        $heading->planet = $request->planet;
      
        if($heading->save()){
            return response()->json($heading, 200);
        }else {
            Storage::delete($Path);
            return response()->json([
                'message' => 'Some error occured in updating,please try again!',
                'status_code' => 500
            ], 500);
        }    

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Heading  $heading
     * @return \Illuminate\Http\Response
     */
    public function destroy(Heading $heading)
    {
        if($heading->delete()){
            Storage::delete($heading->file);
            return response()->json([
                'message' => 'Heading deleted successfully',
                'status_code' => 200
            ],200);
        }
        else{
            return response()->json([
                'message' => 'some error occured try again!',
                'status_code' => 500
            ],500);
        }
    }
}
