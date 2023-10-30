<?php

namespace App\Http\Controllers\Api;

use App\Models\Guest;
use App\Mail\WelcomeEmail;
use Illuminate\Http\Request;
use App\Mail\tableAssignment;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class GuestFilterController extends Controller {

    //all
    public function getAllGuests() {
        $allGuests = Guest::all();
        return response([
            "all" => $allGuests,
        ], 200);
    }

    public function editGuest(Request $request) {
        $guest = Guest::where("id", $request['id'])->first();
        if ($guest) {
            $assignedTable = $guest->table_number;
            if ($assignedTable === null) {
                $guest->update($request->all());
                Mail::to($guest->email)->send(new tableAssignment($guest->fullname, $guest->table_number));
            } else {
                $guest->update($request->all());
            }
        } else {
            return response(["message" => "Error Please try again Later!"]);
        }
    }
}
