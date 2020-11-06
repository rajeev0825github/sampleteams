<?php

namespace App\Http\Controllers\Auth;

use App\Events\Auth\UserLoggedIn;
use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
     |----------------------------------------------------------
     | Login Controller
     |----------------------------------------------------------
     | Handles api authentication using passport package.
     */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Validate login request.
     *
     * @param Request $request
     * @return void
     * 
     * @throws \Illuminate\Validation\ValidationException
     */
    private function validateLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return ['errors' => $validator->errors()->all()];
        }
        return true;
    }

    /**
     * User is authenticated
     *
     * @param Request $request
     * @return void
     */
    private function authenticated(User $user)
    {
        // TODO: Check user confirmed, active  etc

        event(new UserLoggedIn($user));

        return new UserResource($user);
    }

    /**
     * Login request
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $validation = $this->validateLogin($request);
        if ($validation !== true) {
            return response($validation, 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            return $this->authenticated($user);
        } else {
            return response(['error' => 'Unauthorised'], 422);
        }
    }

    /**
     * Logout
     *
     * @param Request $request
     * @return void
     */
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
}
