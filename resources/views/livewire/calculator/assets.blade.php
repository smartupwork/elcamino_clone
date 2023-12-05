<div>
    <div class="row mb-4">
        <div class="col-3"><h6>{{ __('Category') }}</h6></div>
        <div class="col-3"><h6>{{ __('Description') }}</h6></div>
        <div class="col-3"><h6>{{ __('Value') }}</h6></div>
    </div>

    @foreach($assets as $index => $asset)
        <div class="row" wire:key="{{$index}}">
            <div class="col-3 mb-3">
                <select class="form-select" data-placeholder="Select Expense Category"
                        name="assets[{{$index}}][category]">
                    @foreach($categories as $key => $category)
                        <option value="{{ $key }}" @selected($asset['category'] == $key)>{{ __($category) }}</option>
                    @endforeach
                </select>
            </div>
            <x-theme::inputs.text col-class="col-3" name="assets[{{$index}}][description]" value="{{ $asset['description'] }}"/>
            <div class="col-4" wire:ignore>
                <x-theme::inputs.uislider
                    name="assets[{{$index}}][value]" max="1000000"
                    data-start="{{ $asset['value'] }}"
                />
            </div>
            <x-calculator.actions.remove :index="$index"/>
        </div>
    @endforeach
    <x-calculator.actions.add/>

</div>
