@props([
    'id' => 'repeater'
])

@php
    $list = $id;
@endphp
<div class="repeater" id="{{ $id }}">
    <div data-repeater-list="{{ $list }}">
        <div class="row" data-repeater-item>
            {{ $slot }}
            <x-theme::repeater.actions.delete />
        </div>
    </div>

    <x-theme::repeater.actions.add-new />
</div>
