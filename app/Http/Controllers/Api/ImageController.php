<?php

namespace App\Http\Controllers\API;

use App\Models\Guest;
use App\Models\Image;
use App\Mail\ImageUpload;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\InviteRequest;
use Illuminate\Support\Facades\Mail;

class ImageController extends Controller {
    public function verifyUser(InviteRequest $request) {

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


    public function uploadImg(Request $request) {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            date_default_timezone_set('Europe/Malta');
            $currentDateTime = date('d-m-Y_His');
            $imageName = $request->input('fullname') . '_' . $currentDateTime . ".jpg";
            if (!file_exists('uploads')) {
                mkdir('uploads', 0777, true);
            }
            $image->storeAs('public/uploads', $imageName);
        }
        $image = new Image([
            'name' => $request->input("fullname"),
            'email' => $request->input("email"),
            'img_url' => $imageName,
        ]);
        Mail::to("neil.mallia1@gmail.com")->send(new ImageUpload($request->input("fullname")));
        $image->save();
        return response()->json(['message' => 'Image uploaded successfully'], 200);
    }


    public function getImages(Request $request) {
        $allimages = Image::all();
        $perPage = 3;
        $page = $request->query('page', 1);


        $images = Image::orderBy('created_at', 'desc') // Order by creation date in descending order
            ->paginate($perPage, ['*'], 'page', $page);


        return response()->json([
            "allImages" => $allimages,
            'images' => $images->items(),
            'current_page' => $images->currentPage(),
            'total_pages' => $images->lastPage(),
        ]);
    }
}
