@php($user = isset($user) ? $user : null)
@php($heading = $heading ?? __('User Details'))
<x-base-layout>
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">{{ $heading }}</h3>
            </div>
        </div>
        <form class="form" enctype="multipart/form-data" action="{{ $route }}" method="post">
            @csrf
            @method($method ?? 'POST')
            <div class="card-body border-top p-9">
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
                    <div class="col-lg-8">
                        <div class="image-input image-input-outline {{ $user ? '' : 'image-input-empty' }}" data-kt-image-input="true"
                             style="background-image: url({{ asset('theme/media/svg/avatars/blank.svg') }})">
                            <div class="image-input-wrapper w-125px h-125px"
                                 style="background-image: {{ $user ? "url('{$user->getFirstMediaUrl('avatar')}')" : 'none' }}"></div>
                            <label
                                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                <i class="bi bi-pencil-fill fs-7"></i>
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg"/>
                                <input type="hidden" name="avatar_remove"/>
                            </label>
                            <span
                                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                <i class="bi bi-x fs-2"></i>
                            </span>
                            <span
                                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                <i class="bi bi-x fs-2"></i>
                            </span>
                        </div>
                        <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Full Name') }}</label>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-6 fv-row">
                                <input type="text" name="first_name"
                                       class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('first_name') is-invalid @enderror"
                                       placeholder="First name" value="{{ old('first_name', $user ? $user->first_name : '') }}"/>
                                <x-error field="first_name"/>
                            </div>
                            <div class="col-lg-6 fv-row">
                                <input type="text" name="last_name"
                                       class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('last_name') is-invalid @enderror"
                                       placeholder="Last name" value="{{ old('last_name', $user ? $user->last_name : '') }}"/>
                                <x-error field="last_name"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Email') }}</label>
                    <div class="col-lg-4 fv-row">
                        <input
                            type="email" name="email"
                            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('email') is-invalid @enderror"
                            placeholder="Email"
                            value="{{ old('email', $user ? $user->email : '') }}"
                        />
                        <x-error field="email"/>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Date of Birth') }}</label>
                    <div class="col-lg-4 fv-row">
                        <input
                            type="text" name="dob"
                            class="datepicker form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('dob') is-invalid @enderror"
                            placeholder="Date of Birth"
                            value="{{ old('dob', $user ? $user->dob?->format('m-d-Y') : '') }}"
                        />
                        <x-error field="dob"/>
                    </div>
                </div>

                <div class="row mb-6">
              
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Address') }}</label>
                    <div class="col-lg-4 fv-row">
                        <div class="input-wrapper" style="position:relative;">
                        <input type="text" name="address" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('address') is-invalid @enderror" placeholder="Address" value="{{ old('address', $user ? $user->address : '') }}" />
                        <strong style="position: absolute; top: 13px; right: -25px;"></strong>
                        </div>
                        <x-error field="address" />
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Phone') }}</label>
                    <div class="col-lg-4 fv-row">
                        <div class="input-wrapper" style="position:relative;">
                            <input type="text" name="phone" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('phone') is-invalid @enderror" placeholder="Phone" value="{{ old('phone', $user ? $user->phone : '') }}" />
                            <strong style="position: absolute; top: 13px; right: -25px;"></strong>
                        </div>
                        <x-error field="phone" />
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Billing') }}</label>

                    <div class="col-lg-4 fv-row">
                        <div class="input-wrapper" style="position:relative;">
                        <input type="text" name="billing" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('billing') is-invalid @enderror" placeholder="Billing" value="{{ old('billing', $user ? $user->billing : '') }}" />
                        <strong style="position: absolute; top: 13px; right: -25px;"></strong>
                    </div>
                        <x-error field="billing" />
                    </div>
                </div>
                {{-- <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Retirement Age') }}</label>
                    <div class="col-lg-4 fv-row">
                        <input type="text" name="retirement_age" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('retirement_age') is-invalid @enderror" placeholder="Retirement Age" value="{{ old('retirement_age', $user ? $user->retirement_age : '') }}" />
                        <x-error field="retirement_age" />
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Wage Replacement Ratio') }}</label>
                    <div class="col-lg-4 fv-row">
                        <div class="input-wrapper" style="position:relative;">
                        <input type="text" name="wage_replacement_ratio" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('wage_replacement_ratio') is-invalid @enderror" placeholder="Wage Replacement Ratio" value="{{ old('wage_replacement_ratio', $user ? $user->wage_replacement_ratio : '') }}" />
                            <strong style="position: absolute; top: 13px; right: -25px;">%</strong>
                        </div>
                        <x-error field="wage_replacement_ratio" />
                    </div>
                </div> --}}
                @if(auth()->user()->isAdmin())
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Email Manaement App') }}</label>
                    <div class="col-lg-4 fv-row">
                        <div class="input-wrapper" style="position:relative;">
                        <select name="email_manag" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" >
                            <option value="1"@if($user->email_manag == '1') selected @endif>Yes</option>
                            <option value="0"@if($user->email_manag == '0') selected @endif>NO</option>
                        </select>
                        </div>
                    </div>
                </div>
                @endif


                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Password') }}</label>
                    <div class="col-lg-4 fv-row">
                        <input
                            type="text" name="password"
                            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('password') is-invalid @enderror"
                            placeholder="Password"
                            value="{{ old('password', '') }}"
                        />
                        <x-error field="password"/>
                    </div>
                </div>
            </div>

            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn btn-primary" style="margin-right: 5px;">{{ __('Save Changes') }}</button>
                @if(auth()->user()->isAdmin())
                    <a class="impersonate-confirm btn btn-primary"  href="{{ URL::to('/impersonate/'.$user->id) }}">
                        {{('Impersonate')}}
                    </a>
                @endif
            </div>

        </form>
    </div>
    <x-theme::scripts>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script>
            $(".datepicker").daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    locale: {
                        format: 'MM-DD-YYYY',
                    },
                    maxYear: parseInt(moment().format("YYYY"), 10)
                }, function (start, end, label) {
                }
            );

            $('.impersonate-confirm').on('click', function(event) {
                event.preventDefault();
                const url = $(this).attr('href');
                swal({
                    title: 'Are you sure?',
                    text: "You will be logged in as this User",
                    icon: 'warning',
                    buttons: ["Cancel", "Yes!"],
                }).then(function(value) {
                    if (value) {
                        window.location.href = url;
                    }
                });
            });
        </script>
    </x-theme::scripts>
</x-base-layout>

