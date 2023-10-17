<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Http\Requests\InviteRequest;
use App\Models\Guest;

class UserController extends Controller {

    public function getInvite(InviteRequest $request) {
        $userDetails =  $request->validated();

        if ($userDetails) {
            $capitalizedName = ucwords($userDetails['name']);
            $lowercaseEmail = strtolower($userDetails['email']);
            $user = Guest::where('email', $lowercaseEmail)->first();

            if ($user && $user->fullname === $capitalizedName) {
                /**@var User $user */
                $token = $user->createToken("main")->plainTextToken;
                return response([
                    "user" => $user,
                    "token" => $token
                ]);
            } else {
                return response([
                    "message" => "No Invitation with those Credentials"
                ], 422);
            }
        }
    }
}
