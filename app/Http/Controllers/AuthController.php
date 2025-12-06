<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Carbon\Carbon;
use Auth;
use Mail;

class AuthController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        

        if ($user->save()) {
            Mail::send('emails.confirmation', ['user' => $user], function ($message) use ($user) {
                $message->from('no-reply@planet.com', 'Planet');
                $message->to($user->email, $user->name);
                $message->subject('User is registered successfully!');
            });
            return response()->json([
                'message' => 'User created Successfully',
                'status_code' => 201
            ], 201);
        } else {
            return response()->json([
                'message' => 'Some errorr occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function login(Request $request) {
        
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'message' => 'Invalid username/password',
                'status_code' => 401
            ], 401);
        }

        $user = $request->user();

        if ($user->role == 'superAdmin') {
            $tokenData = $user->createToken('Personal Access Token', ['superAdmin']);
        } else if ($user->role == 'admin') {
            $tokenData = $user->createToken('Personal Access Token', ['admin']); 
        } else {
            $tokenData = $user->createToken('Personal Access Token', ['user']); 
        }
        
        $token = $tokenData->token;

        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function profile(Request $request) {
        if ($request->user()) {
            return response()->json($request->user(), 200);
        } else {
            return response()->json([
                'message' => 'profile not found!',
                'status_code' => 500
            ], 500);
        }
    }

    
    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully!',
            'status_code' => 200
        ], 200);
   
    }

    public function resetPassword(Request $request) {
        $request->validate([
            'password_code' => 'required|integer',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        $user = User::where('email', $request->email)->where('password_code', $request->password_code)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Invalid code',
                'status_code' => 401
            ], 401);
        }
        $user->password = Hash::make(trim($request->password));
        $user->password_code = Null;

        if ($user->save()) {
            return response()->json([
                'message' => 'Password reseted successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function resetPasswordRequest(Request $request) {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();
        if(!$user) {
            return response()->json([
                'message' => 'We have sent a verification code on your provided email address',
                'status_code' => 200
            ], 200);
        } else {
            $random = rand(111111,999999);

            $user->password_code = $random;
            if ($user->save()) {
                $userData = array(
                    'email' => $user->email,
                    'full_name' => $user->name,
                    'random' => $random
                );

                Mail::send('emails.reset_password_request', $userData, function($message) use ($userData){
                    $message->from('no-reply@planet.com');
                    $message->to($userData['email']);
                    $message->subject('Reset Password Request (Planet)');
                });

                if (Mail::failures()) {
                    return response()->json([
                        'message' => 'Some error occurred, Please try again',
                        'status_code' => 500
                    ], 500);
                } else {
                    return response()->json([
                        'message' => 'We have sent a verification code to your provided email address',
                        'status_code' => 200
                    ], 200);
                }
            } else {
                return response()->json([
                    'message' => 'Some error occurred, Please try again!',
                    'status_code' => 500
                ], 500);
            }
        }
    }

    public function checkPasswordCode(Request $request) {
        $request->validate([
            'password_code' => 'required|integer',
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->where('password_code', $request->password_code)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Invalid code',
                'status_code' => 500
            ], 500);
        } else {
            return response()->json([
                'message' => 'Password code matched!',
                'status_code' => 200
            ], 200);
        }
    }
}
