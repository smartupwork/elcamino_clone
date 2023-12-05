<style>
    .datecol{
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

<div class="{{ $colClass }} datecol" >
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
    <input required type="text" id="datepicker" class="form-control form-control-lg {{ $background ? "form-control-{$background}" : '' }}"
           {{ $attributes->merge() }} name="{{ $name }}" placeholder="" value=""/>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="{{ asset('theme\js\custom\documentation\forms\daterangepicker.js')}}"></script>
<script>
    $( document ).ready(function() {
        $("#datepicker").daterangepicker({
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
});
</script>