<div>
    <div class="row mb-4">
        <div class="col-5"><h6>{{ __('Description') }}</h6></div>
        <div class="col-5"><h6>{{ __('Value') }}</h6></div>
    </div>

    @foreach($goals as $index => $goal)
        <div class="row" wire:key="{{$index}}">
            <x-theme::inputs.text name="goals[]" value="{{ $goal }}"/>
            <div class="col" wire:ignore>
                <x-theme::inputs.uislider name="goals[]" max="1000000" data-start="{{ $goal }}"/>
            </div>
            <x-calculator.actions.remove :index="$index"/>
        </div><br>
    @endforeach
    <x-calculator.actions.add/>
</div>