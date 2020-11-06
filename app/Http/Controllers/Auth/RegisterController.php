<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResources;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |---------------------------------------
    | Register controller
    |---------------------------------------
    | Handles user registration.
    */

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if ($validator->fails()) {
            return ['errors' => $validator->errors()->all()];
        }
        return true;
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function register(Request $request) 
    {
        $validation = $this->validator($request->all());
        if ($validation !== true) {
            return response($validation, 422);
        }

        $user = $this->create($request->all());
        event(new Registered($user));

        return new UserResources($user);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password']
        ]);
        return $user;
    }
}
