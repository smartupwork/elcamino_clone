<style>
    .per_sym{
        display: block;
        text-align: right;
        position: relative;
        left: 10px;
    }
    .retirementcol{
        display: flex;
        align-items: center;
    }
</style>
@props([
    'id' => '',
    'help' => '',
    'label' => '',
    'required' => true,
    'name' => '',
    'colClass' => 'col',
    'background' => 'solid'
])

@php
    $id = $id ?? $name;
    $label = $label ?? $id;

@endphp

<div class="{{ $colClass }} retirementcol">
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
    <input required type="text" class="form-control form-control-lg {{ $background ? "form-control-{$background}" : '' }}"
           {{ $attributes->merge() }}
           name="{{ $name }}" placeholder="" value=""/>
           @php 
           if($name=='retirement_age'){
            echo"<h5 style='display: none;'>%</h5>";
        }else{
            echo"<h5 class='per_sym'>%</h5>";
        }
           @endphp
</div>
