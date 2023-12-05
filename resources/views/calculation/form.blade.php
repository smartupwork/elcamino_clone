<x-base-layout>
    <div class="ajax_loader"></div>
    <form action="{{ route('calculations.store') }}" method="post" id="calculator_form">
        @csrf
        <div class="mb-3">
            <x-theme::inputs.text name="name" :background="false" placeholder="Snapshot Name (Optional)" value=""/>

            <x-theme::inputs.hidden name="last_inserted_id" :background="false" value="0"/>
            
        </div>
        @isset($id)
            <input type="hidden" name="update_id" :background="false" value="{{$id}}"/>
            @endisset
        <div class="card mb-10">
            <div class="card-body">
                <x-input-type/>
                <x-theme::stepper.container id="calculator_wizard">
                    <x-theme::stepper.nav.container>
                        @foreach($steps as $i => $step)
                            <x-theme::stepper.nav.item
                                :current="$step['current'] ?? false"
                                :step="$i" :title="__($step['title'])"
                                :description="__($step['description'])"
                            />
                        @endforeach
                    </x-theme::stepper.nav.container>

                    <div class="flex-row-fluid py-lg-5 px-lg-15">
                        @foreach($steps as $step)
                            <div class="{{ ($step['current'] ?? false) == true ? 'current' : '' }}"
                                 data-kt-stepper-element="content">
                                <div class="w-100 content-center">
                                    <p class="text-center fs-1 mb-20">{{ __($step['description']) }}</p>
                                    @livewire("calculator.{$step['name']}", ['calculation' => $calculation])
                                    @if($step['name'] !== 'goals' && $step['name'] !== 'retirement')
                                        <x-calculator.total/>
                                    @endif
                                </div>
                            </div>
                        @endforeach
                        <x-theme::stepper.footer/>
                    </div>
                </x-theme::stepper.container>
            </div>
        </div>
    </form>

    <x-theme::styles>
        <style>
            .noUi-value {
                top: 0 !important;
            }

            .noUi-marker-horizontal.noUi-marker {
                height: 0 !important;
            }

            .noUi-horizontal .noUi-tooltip {
                left: 235% !important;
                /*top: -23% !important;*/
                top: -100% !important;
                /*bottom: unset !important;*/
                box-shadow: none !important;
                background: none !important;
            }
           
            
        </style>
    </x-theme::styles>
    <x-theme::scripts>
        <script>

            jQuery(document).ready(function(){
                jQuery('#save_btn').click(function(e){

                    jQuery.ajax({
                        url: "{{ url('calculator/ajax-save') }}",
                        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                        method: 'post',
                        data: $('#calculator_form').serialize(),
                        beforeSend: function(){
                            $("body").addClass("loading");
                        },
                        success: function(result){
                            if(result['succuess']=='succuess'){

                                $('#last_inserted_id').val(result['last_id'])
                                {{ "toastr.success"}}{!! "('" !!}{{ __('Your data has been saved successfully!') }}{!! "')" !!}
                                //const notyf = new Notyf();

                            }
                        },
                        complete: function(){
                            $("body").removeClass("loading");
                        }
                    });
                });
            });


            function initiateSliders() {
                let sliders = $('.noUi-slider');
                sliders.each(function () {
                    initiateSlider($(this));
                });
            }

            function initiateSlider(element) {
                let slider = $(element);
                let sliderElement = element[0];
                let min = slider.data('min');
                let max = slider.data('max');
                let start = slider.data('start') ?? 0;
                let step = slider.data('step') ?? 50;

                let currencyFormat = wNumb({
                    decimals: 0,
                    thousand: ',',
                    prefix: '$'
                });

                let options = {
                    start: start,
                    tooltips: currencyFormat,
                    step: step,
                    range: {
                        min: min,
                        max: max
                    },
                    pips: {
                        mode: 'positions',
                        values: [0, 100],
                        density: 100,
                        format: currencyFormat
                    }
                }

                if (sliderElement.noUiSlider !== undefined) {
                    return;
                }

                noUiSlider.create(sliderElement, options);
                toggleInput();

                sliderElement.noUiSlider.on("update", function (values, handle) {
                    let value = Math.round(values[handle]);
                    $(slider).closest('.slider-container').find('.slider-value').val(value).trigger('change');
                    updateSliderValues(slider);
                });
            }

            function initWizard() {
                let element = document.querySelector("#calculator_wizard");

                let stepper = new KTStepper(element);

                stepper.on("kt.stepper.next", function (stepper) {
                    stepper.goNext();
                });

                stepper.on("kt.stepper.click", function (stepper) {
                    stepper.goTo(stepper.getClickedStepIndex()); // go to clicked step
                });

                stepper.on("kt.stepper.previous", function (stepper) {
                    stepper.goPrevious();
                });
            }

            function updateSliderValues(slider) {
                if (slider !== undefined) {
                    let container = $(slider).closest('[data-kt-stepper-element="content"]');
                    updateTotal(container)
                    return;
                }

                let sections = $('[data-kt-stepper-element="content"]');

                sections.each(function () {
                    updateTotal($(this))
                });
            }

            function updateTotal(container) {
                let inputs = container.find('.slider-value');
                let total = 0;
                inputs.each(function () {
                    total += Number($(this).val());
                });

                let moneyFormat = wNumb({
                    mark: '.',
                    thousand: ',',
                });

                container.find('.sliders-total').html(moneyFormat.to(total));
            }

            function toggleInput() {
                let input_type = $('input[type=radio][name=input_type]:checked').val();
                let container = $('#kt_content_container');

                if (input_type === 'slider') {
                    container.find('.noUi-slider').removeClass('d-none');
                    container.find('.slider-value').attr('type', 'hidden');
                } else if (input_type === 'text') {
                    container.find('.noUi-slider').addClass('d-none');
                    container.find('.slider-value').attr('type', 'number');
                }
            }

            $(function () {
                initiateSliders();
                initWizard();
                updateSliderValues();

                $('input[type=radio][name=input_type]').change(function() {
                    toggleInput();
                });

                $('#kt_content_container').on('change', '.slider-value', function (){
                    let container = $(this).closest('[data-kt-stepper-element="content"]')
                    updateTotal(container);
                });
            })

        </script>
        <script>
            Livewire.on('refreshSlider', () => {
                initiateSliders();
            })

            Livewire.on('updateTotal', () => {
                updateSliderValues();
            })
            $(document).ready(function() {
            WindowWidth = $(window).width();
            if (WindowWidth < 480){
                $("#inputtextvalue").click(); 
            }
            })
        </script>
    </x-theme::scripts>
</x-base-layout>

