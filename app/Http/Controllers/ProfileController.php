<?php

namespace App\Http\Controllers;

use App\Helpers\ValidationRules;
use Illuminate\Http\Request;


class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        abort(404);
    }

    public function edit()
    {
        $user = auth()->user();
        $data = array();
        $data['user'] = $user;
        $data['method'] = 'put';
        $data['route'] = route('users.update', $user);

        return  view('user.form', $data);
    }
}
