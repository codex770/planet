<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\General;
use App\Social;
use App\SeoTags;
use App\User;
use App\AdminContact;
use App\Contact;

class SettingController extends Controller
{
    public function getGeneral(){
        $general = General::first();
        return response()->json($general, 200);
    }

    public function getSocialLinks(){
        $social = Social::first();
        return response()->json($social, 200);
    }

    public function getSeotags(){
        $seoTags = SeoTags::first();
        return response()->json($seoTags, 200);
    }

    public function getUsers(){
        $users = User::all();
        return response()->json($users, 200);
    }

    public function updateGeneral(Request $request){
       
        $general = General::where('id',$request->id)->first();
        
        $oldPath1 = $general->favicon;
        if($request->hasFile('favicon')){

            $request->validate([
                'favicon' => 'image|mimes:jpeg,png,jpg',
            ]);

            $path1 = $request->file('favicon')->store('favicon_image');
            $general->favicon = $path1;

            Storage::delete($oldPath1);
        }

        $oldPath2 = $general->logo;
        if($request->hasFile('logo')){

            $request->validate([
                'logo' => 'image|mimes:jpeg,png,jpg',
            ]);

            $path2 = $request->file('logo')->store('logo_image');
            $general->logo = $path2;

            Storage::delete($oldPath2);
        }

        $general->address = $request->address;
        $general->address2 = $request->address2;
        $general->city = $request->city;
        $general->state = $request->state;
        $general->zip = $request->zip;
        if($general->save()){
            return response()->json($general, 200);
        }else {
            Storage::delete($Path1);
            Storage::delete($Path2);
            return response()->json([
                'message' => 'Some error occured in updating,please try again!',
                'status_code' => 500
            ], 500);
        }    

    }

    public function updateSocialLinks(Request $request){
       
        $social = Social::where('id',$request->id)->first();

        $social->facebook = $request->facebook;
        $social->instagram = $request->instagram;
        $social->twitter = $request->twitter;
       
        if($social->save()){
            return response()->json($social, 200);
        }else {
            return response()->json([
                'message' => 'Some error occured in updating,please try again!',
                'status_code' => 500
            ], 500);
        }    

    }
    
    public function updateSeoTags(Request $request){
       
        $seoTags = SeoTags::where('id',$request->id)->first();

        $seoTags->title = $request->title;
        $seoTags->meta_tags = $request->meta_tags;
        $seoTags->meta_description = $request->meta_description;
       
        if($seoTags->save()){
            return response()->json($seoTags, 200);
        }else {
            return response()->json([
                'message' => 'Some error occured in updating,please try again!',
                'status_code' => 500
            ], 500);
        }    

    }

    public function deleteUser($id){
        $user = User::where('id',$id)->first();
        if($user->delete()){
            return  response()->json([
                'message' => 'User is deleted successfully',
                'status_code' =>200
            ],200);
        }
        else{
            return  response()->json([
                'message' =>  'some error occured try again!',
                'status_code' => 500
            ],500);
        }
    }

    public function getAdminContact(){
        $getAdminContact = AdminContact::first();
        return response()->json($getAdminContact, 200);
    }

    public function updateAdminContact(Request $request){
        $updateContact = AdminContact::where('id', $request->id)->first();
        $updateContact->email = $request->email;
        if($updateContact->save()){
            return response()->json($updateContact, 200);
        }else {
            return response()->json([
                'message' => 'Some error occured in updating,please try again!',
                'status_code' => 500
            ], 500);
        }
    }

    public function getAllContact(){
        $getAllContact = Contact::all();
        return response()->json($getAllContact, 200);
    }

    public function deleteContact($id){
        $contact = Contact::where('id',$id)->first();
        if($contact->delete()){
            return  response()->json([
                'message' => 'Contact is deleted successfully',
                'status_code' =>200
            ],200);
        }
        else{
            return  response()->json([
                'message' =>  'some error occured try again!',
                'status_code' => 500
            ],500);
        }
    }
}


