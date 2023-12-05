<?php

namespace App\Http\Controllers;

use App\Helpers\ValidationRules;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    public function index()
    {
        $users = User::paginate(25);

        return view('user.index', compact('users'));
    }

    public function create()
    {
        $data = array();
        $data['route'] = route('users.store');

        return view('user.form', $data);
    }

    public function store(Request $request)
    {
        $request->validate(ValidationRules::storeUser());

        $user = User::create($request->only([
            'first_name', 'last_name', 'email', 'password', 'dob'
        ]));

        if ($request->hasFile('avatar')) {
            $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        }

        return redirect()->route('users.index')
            ->with('success', __('User Created Successfully'));
    }

    public function show(User $user)
    {
        //
    }

    public function edit(User $user)
    {
        $data = array();
        $data['route'] = route('users.update', $user);
        $data['method'] = 'put';
        $data['user'] = $user;

        return view('user.form', $data);
    }

    public function update(Request $request, User $user)
    {
        // echo 'here';
        // exit;
        $request->validate(ValidationRules::updateUser($user));

        $user->update($request->only([
            'first_name', 'last_name', 'email', 'dob', 'phone', 'address', 'billing', 'pre_retirement', 'post_retirement', 'inflation', 'retirement_age', 'wage_replacement_ratio'
        ]));

        if ($password = $request->input('password')) {
            $user->update(['password' => $password]);
        }

        if ($request->email_manag =='1') {

            $user->update(['email_manag' => $request->email_manag]);
        }else if($request->email_manag =='0'){
            $user->update(['email_manag' => $request->email_manag]);
        }

        if ($request->hasFile('avatar')) {
            $user->addMediaFromRequest('avatar')
                ->toMediaCollection('avatar');
        }

        if ($user->id == auth()->id()){
            return redirect()->route('profile.edit')->with('success', 'Profile updated successfully');
        }

        return redirect()->route('users.index')
            ->with('success', __('User Updated Successfully'));
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')
            ->with('success', __('User Deleted Successfully'));
    }

    public function profile()
    {
        $user = auth()->user();
        $data = array();
        $data['user'] = $user;
        $data['method'] = 'put';
        $data['route'] = route('users.update', $user);
        $data['heading'] = __('Profile Details');

        return  view('user.form', $data);
    }

    public function imperson($id){
        Auth::logout();
        Auth::loginUsingId($id);

        return redirect()->to('/dashboard');

    }
}
