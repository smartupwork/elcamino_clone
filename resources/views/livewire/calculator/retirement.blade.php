
<div>

    {{--@php--}}
    {{--use Illuminate\Support\Facades\Auth;--}}

        {{--// $calculation->retirement_age = '';--}}
        {{--if($calculation->retirement_age == 'NULL' || $calculation->retirement_age == ''){--}}
            {{--$calculation->retirement_age = auth()->user()->retirement_age;--}}
        {{--}--}}

        {{--if($calculation->pre_retirement == 'NULL' || $calculation->pre_retirement == ''){--}}
            {{--$calculation->pre_retirement = auth()->user()->pre_retirement;--}}

        {{--}--}}
        {{--if($calculation->post_retirement == 'NULL' || $calculation->post_retirement == ''){--}}
            {{--$calculation->post_retirement = auth()->user()->post_retirement;--}}

        {{--}--}}
        {{----}}
        {{--if($calculation->inflation == 'NULL' || $calculation->inflation == ''){--}}
            {{--$calculation->inflation = auth()->user()->inflation;--}}

        {{--}--}}
        {{----}}
        {{--if($calculation->wage_replacement_ratio == 'NULL' || $calculation->wage_replacement_ratio == ''){--}}
            {{--$calculation->wage_replacement_ratio = auth()->user()->wage_replacement_ratio;--}}

        {{--}--}}
        {{----}}
    {{--@endphp--}}
        <div class="row mb-4">
            <div class="col-5"><h6>{{ __('Description') }}</h6></div>
            <div class="col-5"><h6>{{ __('Value') }}</h6></div>
        </div>
        <div class="row" wire:key="">
            <div class="col-5"><h6>{{ __('Retirement Age') }}</h6></div>
                <div class="col" wire:ignore style="margin-bottom: 8px;">
                    <x-theme::inputs.R_text name="retirement_age" value="{{ $calculation->retirement_age ?? auth()->user()->retirement_age }}" data-start="" required/>
                </div>
            </div>
            <div class="row" wire:key="">
            <div class="col-5"><h6>{{ __('Cost Of Living') }}</h6></div>
                <div class="col" wire:ignore style="margin-bottom: 8px;">
                    <x-theme::inputs.R_text name="cost_living" value="" data-start="" required/>
                </div>
            </div>

            <div class="row" wire:key="">
                <div class="col-5"><h6>{{ __('Date of Birth') }}</h6></div>
                    <div class="col" wire:ignore style="margin-bottom: 8px;">
                        <x-theme::inputs.date_picker name="dob" value="{{ Auth::user()->dob->format('m-d-Y') }}" data-start="" required/>
                    </div>
                </div>
                        <div class="me-2 float-end">
                            <button onclick="myFunction()" type="button" class="btn btn-lg btn-light-primary me-3">Advanced Options</button>
                        </div><br><br><br><br>
                                        

                <div id="show" style="display:none; !important">    
                        <div class="row" wire:key="">
                        <div class="col-5"><h6>{{ __('Pre-Retirement Return') }}</h6></div>
                            <div class="col" wire:ignore style="margin-bottom: 8px;">
                                <x-theme::inputs.R_text name="pre_retirement" value="{{ $calculation->pre_retirement ?? auth()->user()->pre_retirement }}" data-start="5"/>
                            </div>
                        </div>
                        <div class="row" wire:key="">
                        <div class="col-5"><h6>{{ __('Post-Retirement Return') }}</h6></div>
                            <div class="col" wire:ignore style="margin-bottom: 8px;">
                                <x-theme::inputs.R_text name="post_retirement" value="{{ $calculation->post_retirement ?? auth()->user()->post_retirement }}" data-start="" require/>
                            </div>
                        </div>
                        <div class="row" wire:key="">
                        <div class="col-5"><h6>{{ __('Inflation') }}</h6></div>
                            <div class="col" wire:ignore style="margin-bottom: 8px;">
                                <x-theme::inputs.R_text name="inflation" value="{{ $calculation->inflation ?? auth()->user()->inflation }}" data-start=""/>
                            </div>
                        </div>
                        
                        <div class="row" wire:key="">
                        <div class="col-5"><h6>{{ __('Wage Replacement Ratio') }}</h6></div>
                            <div class="col" wire:ignore style="margin-bottom: 8px;">
                                <x-theme::inputs.R_text name="wage_replacement_ratio" value="{{ $calculation->wage_replacement_ratio ?? auth()->user()->wage_replacement_ratio }}" data-start=""/>
                            </div>
                        </div>
                </div>

</div>
<script>
    function myFunction() {
      var x = document.getElementById("show");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
</script>
    <script>
        $(".dateshow").daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                locale: {
                    format: 'MM-DD-YYYY',
                }
            }, function (start, end, label) {
            }
        );
    </script>

