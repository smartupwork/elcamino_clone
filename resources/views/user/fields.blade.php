<x-base-layout>
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">{{ __('Profile Details') }}</h3>
            </div>
        </div>
        <form class="form" enctype="multipart/form-data" action="{{ route('profile.update') }}" method="post">
            @csrf
            <div class="card-body border-top p-9">
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
                    <div class="col-lg-8">
                        <div class="image-input image-input-outline" data-kt-image-input="true"
                             style="background-image: url({{ asset('theme/media/svg/avatars/blank.svg') }})">
                            <div class="image-input-wrapper w-125px h-125px"
                                 style="background-image: url({{ $user->getFirstMediaUrl('avatar') }})"></div>
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
                                       placeholder="First name" value="{{ old('first_name', $user->first_name) }}"/>
                                <x-error field="first_name"/>
                            </div>
                            <div class="col-lg-6 fv-row">
                                <input type="text" name="last_name"
                                       class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('last_name') is-invalid @enderror"
                                       placeholder="Last name" value="{{ old('last_name', $user->last_name) }}"/>
                                <x-error field="last_name"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Date of Birth') }}</label>
                    <div class="col-lg-8 fv-row">
                        <input
                            type="text" name="dob"
                            class="datepicker form-control form-control-lg form-control-solid mb-3 mb-lg-0 @error('dob') is-invalid @enderror"
                            placeholder="Last name"
                            value="{{ old('dob', $user->dob?->format('m-d-Y')) }}"
                        />
                        <x-error field="dob"/>
                    </div>
                </div>
            </div>

            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn btn-primary">{{ __('Save Changes') }}</button>
            </div>
        </form>
    </div>
    <x-theme::scripts>
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
        </script>
    </x-theme::scripts>
</x-base-layout>

