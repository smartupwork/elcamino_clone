<div class="d-flex flex-stack pt-10">
    <div class="me-2">
        <button type="button" class="btn btn-lg btn-light-primary me-3"
                data-kt-stepper-action="previous">
            <span class="svg-icon svg-icon-3 me-1">
                {!! theme()->getSvgIcon("icons/duotune/arrows/arr063.svg", "svg-icon-1") !!}
            </span>
            {{ __('Back') }}
        </button>
    </div>
    <div>
        <button type="submit" class="btn btn-primary" data-kt-stepper-action="submit">
            <span class="indicator-label">
                Submit
            </span>
        </button>

        <button type="button" class="btn btn-primary" data-kt-stepper-action="next">
            {{ __('Continue') }}
        </button>
    </div>
</div>
