<?php

namespace App\Http\Controllers\Auth;

use auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class signInController extends Controller
{
    public function __invoke(Request $request)
    {
        if (!$token = auth()->attempt($request->only('email', 'password'))) {
            return response(null, 401);
        }

        return response()->json(compact('token'));
    }
}