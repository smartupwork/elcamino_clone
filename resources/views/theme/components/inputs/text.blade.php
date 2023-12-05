@props([
    'id' => '',
    'help' => '',
    'label' => '',
    'required' => false,
    'name' => '',
    'colClass' => 'col',
    'background' => 'solid'
])

@php
    $id = $id ?? $name;
    $label = $label ?? $id;

@endphp

<div class="{{ $colClass }}">
    @if($label)
        <label class="d-flex align-items-center fs-5 fw-bold mb-2" id="{{ $id }}">
            <span class="{{ $required ? 'required' : '' }}">{{ __($label) }}</span>

            @if($help)
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
                   title="{{ __($help) }}">
                </i>
            @endif
        </label>
    @endif
    <input type="text" class="form-control form-control-lg {{ $background ? "form-control-{$background}" : '' }}"
           {{ $attributes->merge() }}
           name="{{ $name }}" placeholder="" value=""/>
</div>
