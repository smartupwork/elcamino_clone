<div>
    <div class="row mb-4">
        <div class="col-5"><h6>{{ __('Description') }}</h6></div>
        <div class="col-5"><h6>{{ __('Value') }}</h6></div>
    </div>

    @foreach($debts as $index => $debt)
        <div class="row" wire:key="{{$index}}">
            <x-theme::inputs.text name="debts[{{$index}}][description]" value="{{$debt['description']}}"/>
            <div class="col" wire:ignore>
                <x-theme::inputs.uislider name="debts[{{$index}}][value]" max="1000000" data-start="{{ $debt['value'] }}"/>
            </div>
            <x-calculator.actions.remove :index="$index"/>
        </div><br>
    @endforeach
    <x-calculator.actions.add/>

</div>
