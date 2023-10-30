<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\GuestFilterController;
use App\Http\Controllers\API\ImageController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    // Define the routes that require authentication here
    Route::post('/registerGuest', [AdminController::class, "registerGuest"]);
    route::get("/guests/all", [GuestFilterController::class, "getAllGuests"]);
    route::put("/guests/edit/{id}", [GuestFilterController::class, "editGuest"]);
});

Route::post("/getinvite", [UserController::class, "getInvite"]);
Route::put("/confirm_guest", [UserController::class, "confirmAttandance"]);

Route::post('/verifyUser', [ImageController::class, "verifyUser"]);
Route::post("/uploadImg", [ImageController::class, "uploadImg"]);
Route::get('/images', [ImageController::class, 'getImages']);


Route::post("/registerAdmin", [AdminController::class, "register"]);
Route::post("loginAdmin", [AdminController::class, "login"]);
