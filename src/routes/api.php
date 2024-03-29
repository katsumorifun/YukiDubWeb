<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

use App\Http\Controllers\api\v1\AnimesApiController;
use App\Http\Controllers\api\v1\Auth\LoginController;
use App\Http\Controllers\api\v1\Auth\RegisterController;
use App\Http\Controllers\api\v1\GenresApiController;
use App\Http\Controllers\api\v1\PeopleApiController;
use App\Http\Controllers\api\v1\RoleController;
use App\Http\Controllers\api\v1\UsersApiController;
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

Route::prefix('v1')->group(function () {
    Route::apiResource('users', UsersApiController::class);

    Route::apiResource('people', PeopleApiController::class)->only(['index', 'show']);
    Route::apiResource('people', PeopleApiController::class)->only(['store', 'update', 'destroy'])
    ->middleware('auth:api');

    Route::get('people/{id}/changes', [PeopleApiController::class, 'changes']);
    Route::get('people/{id}/works', [PeopleApiController::class, 'getWorks']);
    Route::get('people/{id}/roles', [PeopleApiController::class, 'getRoles']);
    Route::get('people/{id}/animes', [PeopleApiController::class, 'getAnime']);
    Route::get('people/{id}/mangas', [PeopleApiController::class, 'getMangas']);
    Route::delete('people/{peopleId}/roles/', [PeopleApiController::class, 'removeRole']);

    Route::apiResource('genres', GenresApiController::class)->only(['index', 'show']);

    Route::apiResource('anime', AnimesApiController::class)->only(['index', 'show']);
    Route::apiResource('anime', AnimesApiController::class)->only(['store', 'update', 'destroy'])
    ->middleware('auth:api');
    Route::post('anime/{id}/poster', [AnimesApiController::class, 'updatePoster'])->middleware('auth:api');
    Route::post('anime/{id}/vote', [AnimesApiController::class, 'vote'])->middleware('auth:api');
    Route::post('anime/{id}/score', [AnimesApiController::class, 'getScore']);

    Route::apiResource('roles', RoleController::class);

    Route::prefix('auth')->group(function () {
        Route::post('register', [RegisterController::class, 'callBack']);
        Route::get('login', [LoginController::class, 'login']);
        Route::post('accessToken', [LoginController::class, 'getAccessToken']);
        Route::get('profile', [UsersApiController::class, 'authUser'])->middleware(['auth:api', 'scope:profile-management']);
    });
});
