@props([
    'label' => __('Add'),
    'col' => 'col-2',
])

<div class="form-group mt-5 float-end">
    <a href="@jsvoid" class="btn btn-light-primary"
       wire:loading.class="disabled"
       wire:loading.attr="disabled"
       wire:click.prevent="add()">
        <i class="la la-plus"></i>{{ $label }}
    </a>
</div>
