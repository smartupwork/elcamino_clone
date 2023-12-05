@props([
    'label' => __('Delete'),
    'col' => 'col-2',
    'index'
])
<div class="{{ $col }} text-end">
    <a href="@jsvoid" class="btn btn-light-danger delete-calculation"
       wire:loading.class="disabled"
       wire:loading.attr="disabled"
       wire:click.prevent="remove({{$index}})">
        <i class="la la-trash-o"></i>{{ $label }}
    </a>
</div>
