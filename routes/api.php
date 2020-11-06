<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Team\PlayerController;
use App\Http\Controllers\Team\TeamController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);

     
/*
|---------------------------------------------------------------------------
| Guarded api resources
|---------------------------------------------------------------------------
*/
Route::middleware(['auth:api', 'json.response'])->group( function () {
    Route::resource('teams', TeamController::class);
    Route::resource('players', PlayerController::class);
});