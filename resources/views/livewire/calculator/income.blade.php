<div class="row mb-3">
    <label class="col-lg-4 col-form-label  fw-bold fs-6 py-0">
        Scenario

    </label>

    <div class="col-lg-8">
        <input type="hidden"  id="Scenario" value="0" name="scenario">
        <input type="checkbox" class="form-check-input" id="Scenario" value="1" name="scenario" @if(@$calculation->scenario==1) checked @endif>
    </div>
</div>
<div>
    <x-theme::inputs.uislider
        label="Income" name="income" max="200000"
        data-step="100" data-start="{{ $income }}"
    />
</div>
