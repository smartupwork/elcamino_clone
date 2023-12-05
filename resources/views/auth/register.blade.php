<x-auth-layout>
    <form method="POST" action="{{ route('register') }}" class="form w-100">
        @csrf

        <div class="text-center mb-10">
            <h1 class="text-dark mb-3">
                {{ __('Create an Account') }}
            </h1>
            <div class="text-gray-400 fw-bold fs-4">
                {{ __('Already have an account?') }}

                <a href="{{ route('login') }}" class="link-primary fw-bolder">
                    {{ __('Sign in here') }}
                </a>
            </div>
        </div>

        <div class="row fv-row mb-7 fv-plugins-icon-container">
            <div class="col-xl-6">
                <label for="first_name" class="form-label fw-bolder text-dark fs-6 ">{{ __('First Name') }}</label>
                <input class="form-control form-control-lg form-control-solid @error('first_name') is-invalid @enderror"
                       type="text" placeholder="" name="first_name" autocomplete="off" id="first_name"
                       value="{{ old('first_name') }}"
                />
                <x-error field="first_name"/>
            </div>
            <div class="col-xl-6">
                <label for="last_name" class="form-label fw-bolder text-dark fs-6 ">{{ __('Last Name') }}</label>
                <input class="form-control form-control-lg form-control-solid @error('last_name') is-invalid @enderror"
                       type="text" placeholder="" name="last_name" autocomplete="off" id="last_name"
                       value="{{ old('last_name') }}"
                />
                <x-error field="last_name"/>
            </div>
        </div>

        <div class="fv-row mb-10">
            <label class="form-label fs-6 fw-bolder text-dark" for="email">{{ __('Email') }}</label>
            <input class="form-control form-control-lg form-control-solid @error('email') is-invalid @enderror"
                   type="email" name="email" id="email" value="{{ old('email') }}" required autofocus
            />
            <x-error field="email"/>
        </div>

        <div class="fv-row mb-10">
            <label class="form-label fs-6 fw-bolder text-dark" for="dob">{{ __('Date of Birth') }}</label>
            <input class="form-control form-control-lg form-control-solid datepicker @error('dob') is-invalid @enderror"
                   type="text" name="dob" id="dob" value="{{ old('dob') }}" required
            />
            <x-error field="dob"/>
        </div>
        <div class="mb-10 fv-row">
            <label for="password" class="form-label fw-bolder text-dark fs-6">{{ __('Password') }}</label>
            <div class="position-relative mb-3">
                <input
                    class="form-control form-control-lg form-control-solid @error('password') is-invalid @enderror"
                    type="password" placeholder="" name="password" autocomplete="off" id="password"
                />
                <x-theme::show-password/>
                <x-error field="password"/>
            </div>
        </div>

        <div class="fv-row mb-10">
            <label class="form-label fw-bolder text-dark fs-6 mb-0"
                   for="password-confirm">{{ __('Confirm Password') }}</label>
            <input class="form-control form-control-lg form-control-solid"
                   type="password" name="password_confirmation" autocomplete="off" required id="password-confirm"
            />
        </div>

        <div class="text-center">
            <button type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
                {{ __('Continue')  }}
            </button>
        </div>
    </form>

    <x-theme::scripts>
        <script>
            $(".datepicker").daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    locale: {
                        format: 'MM-DD-YYYY',
                    }
                }, function (start, end, label) {
                }
            );
        </script>
    </x-theme::scripts>
</x-auth-layout>
