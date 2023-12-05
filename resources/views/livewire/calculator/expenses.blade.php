<div>
    <div class="row mb-4">
        <div class="col-5"><h6>{{ __('Category') }}</h6></div>
        <div class="col-5"><h6>{{ __('Value') }}</h6></div>
    </div>

    @foreach($expenses as $index => $expense)
        <div class="row" wire:key="{{$index}}">
            <div class="col mb-3">
                <select class="form-select" data-placeholder="Select Expense Category"
                        name="expenses[{{$index}}][category]">
                    @foreach($categories as $key => $category)
                        <option value="{{ $key }}" @selected($expense['category'] == $key)>{{ __($category) }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col" wire:ignore>
                <x-theme::inputs.uislider name="expenses[{{$index}}][value]" max="10000"
                                          data-start="{{ $expense['value'] }}"/>
            </div>
            <x-calculator.actions.remove :index="$index"/>
        </div>
    @endforeach
    <x-calculator.actions.add/>

</div>
