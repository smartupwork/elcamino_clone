@props([
    'id' => 'kt_stepper'
])
<div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="{{ $id }}">
    {{ $slot }}
</div>
