<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InviteRequest extends FormRequest {

    public function authorize() {
        return true;
    }

    public function rules() {
        return [
            'name' => ['required', 'regex:/^[A-Za-z\s]+$/'],
            'email' => 'required|email',
        ];
    }

    public function messages() {
        return [
            'name.regex' => 'Name and surname must contain only letters.',
            "name.required" => "Please enter a name and a surname.",
            'email.email' => 'Email must be a valid email.',
            "email.required" => "Please fill in the email field."
        ];
    }
}
