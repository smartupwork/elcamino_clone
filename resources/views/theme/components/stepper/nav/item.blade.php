@props([
    'current' => false,
    'step' => '',
    'title' => '',
    'description' => ''
])
<div class="stepper-item {{ $current ? 'current' : '' }}" data-kt-stepper-element="nav" data-kt-stepper-action="step">
    <div class="stepper-line w-40px"></div>
    <div class="stepper-icon w-40px h-40px">
        <i class="stepper-check fas fa-check"></i>
        <span class="stepper-number">{{ $step }}</span>
    </div>
    <div class="stepper-label">
        <h3 class="stepper-title">{{ $title }}</h3>
        <div class="stepper-desc">{{ $description }}</div>
    </div>
</div>
