<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\MeController;
use App\Http\Controllers\Auth\signInController;
use App\Http\Controllers\Auth\signOutController;


Route::prefix('auth')->group(function () {
    Route::post('signin', signInController::class)->name('signin');
    Route::post('signout', signOutController::class);

    Route::get('me', MeController::class);
});