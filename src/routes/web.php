<?php

use App\Http\Controllers\api\v1\Auth\ChekController;
use App\Http\Controllers\api\v1\Auth\LoginController;
use App\Http\Controllers\api\v1\Auth\RegisterController;
use App\Http\Controllers\api\v1\Auth\SocialLoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('auth')->group(function () {
    Route::get('registration', [RegisterController::class, 'register'])
        ->name('auth.register.form');

    Route::post('registration', [RegisterController::class, 'callBack'])->name('auth.register');

    Route::get('login', function () {
        return view('auth.login', ['error'=>false]);
    })->name('login');

    Route::post('login', [LoginController::class, 'login']);

    Route::get('success', function () {
        return view('Auth.Registration.success');
    })->name('auth.success');

    Route::get('{provider}/redirect/', [SocialLoginController::class, 'redirect'])
        ->name('social.login');

    Route::get('{provider}/callback', [SocialLoginController::class, 'login']);

    Route::post('complete', [SocialLoginController::class, 'completion'])
        ->name('social.registration.completion');

    Route::get('chek/username/{name}', [ChekController::class, 'userName'])->name('auth.chek.name');

    Route::get('chek/email/{email}', [ChekController::class, 'email'])->name('auth.chek.email');
});
Route::get('auth/login/success', function () {
    return 'ok';
})->name('login.success');

Route::get('/{any}', function () {
    return view('vue');
})->where('any', '.*');
