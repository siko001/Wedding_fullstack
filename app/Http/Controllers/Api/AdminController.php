<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Guest;
use App\Mail\WelcomeEmail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AdminController extends Controller {
    public function register(Request $request) {


        $details = $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users,email",
            "password" => "required"
        ]);

        if ($details) {
            $details['password'] = Hash::make($details['password']);
            // Create a new user with the hashed password
            User::create($details);
            return response(["message" => "Registration successful"], 200);
        } else {
            return response(["errors" => $request->validator->errors()], 422);
        }
    }


    public function login(Request $request) {
        $details = $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        if (auth()->attempt($details)) {
            $user = auth()->user();
            /**@var User $user */
            $token = $user->createToken("main")->plainTextToken;
            return response([
                "message" => "Login successful",
                "token" => $token,
            ]);
        } else {
            return response(["message" => "Invalid credentials"], 422);
        }
    }


    public function registerGuest(Request $request) {
        $details = $request->validate([
            "fullname" => "required|unique:guests,fullname",
            "email" => "required|email|unique:guests,email",
        ]);
        if ($details) {
            $capitalizedName = ucwords($details['fullname']);
            $lowercaseEmail = strtolower($details['email']);
            info($details);
            Mail::to($lowercaseEmail)->send(new WelcomeEmail($capitalizedName, $lowercaseEmail));
            Guest::create(["fullname" => $capitalizedName, "email" => $lowercaseEmail]);
            return response(["message" => "success"], 200);
        } else {
            return response(["message" => "Failure"], 422);
        }
    }
}
