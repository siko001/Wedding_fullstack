<?php

namespace App\Http\Controllers\Api;


use App\Models\Guest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\InviteRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\ConfirmationEmail;
use App\Mail\GuestConfirmationToAdmin;

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
    public function confirmAttandance(Request $request) {
        $userChoice = $request->all();
        $guestEmail = $userChoice["email"];
        $guest = Guest::where("email", $guestEmail)->first();
        $guestName = $guest["fullname"];



        info($guestName);
        $guest->confirmed = "yes";
        $attendance = $userChoice['attending'];
        if ($userChoice['attending'] != "yes") {
            Mail::to($guestEmail)->send(new ConfirmationEmail($guestName, $attendance));
            Mail::to("neil.mallia1@gmail.com")->send(new GuestConfirmationToAdmin($guestName, $attendance));
            $guest->attending = "no";
            $guest->save();
            return response([
                "message" => "We're sorry you won't be joining us! If you change your mind, contact Neil!"
            ], 200);
        } else {
            Mail::to($guestEmail)->send(new ConfirmationEmail($guestName, $attendance));
            Mail::to("neil.mallia1@gmail.com")->send(new GuestConfirmationToAdmin($guestName, $attendance));
            $guest->attending = "yes";
            $guest->save();
            return response([
                "message" => "Thank you for confirming your attendance! We'll keep in touch with more updates!"
            ], 200);
        }
    }
}
