@props([
    'name' => '',
    'help' => '',
    'label' => '',
    'min' => 0,
    'max' => 100,
    'required' => false,
    'id' => ''
])
<div class="row">
    @if($label)
    <label class="col-lg-4 col-form-label {{ $required ? 'required' : '' }} fw-bold fs-6 py-0">
        {{$label }}

        @if($help)
            <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
               title="{{ __($help) }}">
            </i>
        @endif
    </label>
    @endif

    <div class="{{ $label ? 'col-lg-8' : 'col-12' }}">
        <div class="d-flex flex-column text-center slider-container">
            <div class="noUi-sm noUi-slider my-5" data-min="{{ $min }}" data-max="{{ $max }}" id="{{ $id }}"
                {{ $attributes->merge() }}>
            </div>
            <input class="slider-value form-control form-control-lg" type="hidden" name="{{ $name }}">
        </div>
    </div>
</div>

