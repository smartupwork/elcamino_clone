
<x-base-layout>
    <div class="card mb-10">
        <div class="card-header">
            <h3 class="card-title">{{ __('History') }}</h3>
            {{-- <a href="{{ url('generate-csv') }}" class="btn btn-primary mt-5 mb-15">
                <svg width="17px" height="17px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-file-download">

                    <title>Download CSV</title>

                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(1.000000, 1.000000)" fill="#FFFFFF">
                            <path d="M14.031,8.016 L14.031,12.016 L2,12.016 L2,8.016 L0,8.016 L0,15 L15.938,15 L15.938,8.016 L14.031,8.016 Z" class="si-glyph-fill"></path>
                            <path d="M8.072,8.947 L10.982,5.071 L8.968,5.05 L8.968,0.065 L7.03,0.065 L7.03,5.05 L5.03,5.05 L8.072,8.947 Z" class="si-glyph-fill"></path>
                        </g>
                    </g>
                </svg>
            </a> --}}
            {{--<div class="card-toolbar">
                @if($calculations->count())
                    <a href="{{ route('calculations.create') }}" class="btn btn-sm btn-light">
                        {{ __('Start New') }}
                    </a>
                @endif
            </div>--}}
        </div>
        <div class="card-body">
            <div class="table-responsive">
                @if($calculations->count())
                    <table class="table" id="table-responsive">
                        <thead>
                        <tr class="fw-bolder fs-6 text-gray-800">
                            <th>{{ __('Snapshot Name') }}</th>
                            <th>{{ __('Net Worth') }}</th>
                            <th>{{ __('Savings') }}</th>
                            <th>{{ __('Cash Flow') }}</th>
                            <th>{{ __('Debt to Income Ratio') }}</th>
                            <th>{{ __('Emergency Fund Ratio') }}</th>
                            <th>{{ __('Scenario') }}</th>
                            <th>{{ __('Updated') }}</th>
                            @if(auth()->user()->isAdmin())
                                <th>{{ __('User') }}</th>
                            @endif
                            <th class="text-end">{{ __('Actions') }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($calculations as $calculation)
                            <tr>
                                <td>{{ $calculation->name }}</td>
                                <td>${{ number_format($calculation->results->net_worth) }}</td>
                                <td>{{ $calculation->results->savings }}%</td>
                                <td>${{ number_format($calculation->results->cash_flow) }}</td>
                                <td>{{ $calculation->results->debt_2_income_ratio }}%</td>
                                <td>{{ $calculation->results->emergency_fund_ratio }}</td>
                                <td>{{ ($calculation->scenario==1)?'Yes':'No' }}</td>
                                <td>{{ $calculation->created_at }}</td>
                                @if(auth()->user()->isAdmin())
                                    <td>{{ $calculation->user?->name }}</td>
                                @endif
                                <td>
                                    <div class="d-flex justify-content-end flex-shrink-0">


                                        {{-- <button data-id="{{ $calculation->id }}" id="copy-confirm" class="btn btn-icon btn-active-color-primary btn-sm me-1 open_popup" type="button" >
                                            <a href="{{ URL::to('copy/'.$calculation->id) }}">
                                                {!! theme()->getSvgIcon('icons/duotune/general/gen054.svg', 'svg-icon svg-icon-3') !!}
                                            </a>
                                        </button> --}}


                                        {{-- <button data-id="{{ $calculation->id }}" class="btn btn-icon btn-active-color-primary btn-sm me-1 open_popup" type="button" data-toggle="modal" data-target="#exampleModal">
                                            {!! theme()->getSvgIcon('icons/duotune/general/gen016.svg', 'svg-icon svg-icon-3') !!}
                                        </button> --}}
                                        <a href="{{ route('calculations.show', $calculation) }}"
                                           class="btn btn-icon btn-active-color-primary btn-sm me-1">
                                            {!! theme()->getSvgIcon('icons/duotune/general/gen008.svg', 'svg-icon svg-icon-3') !!}
                                        </a>
                                        
                                        {{-- <a href="{{ URL::to('update/'.$calculation->id) }}" class="btn btn-icon btn-active-color-primary btn-sm me-1">
                                            {!! theme()->getSvgIcon('icons/duotune/art/art005.svg', 'svg-icon svg-icon-3') !!}
                                        </a> --}}
                                        <button data-bs-target="#confirm_calculation_{{ $calculation->id }}"
                                                data-bs-toggle="modal"
                                                class="btn btn-icon btn-active-color-danger btn-sm">
                                            {!! theme()->getSvgIcon('icons/duotune/general/gen027.svg', 'svg-icon svg-icon-3') !!}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <x-modals.confirm
                                :route="route('calculations.destroy', $calculation)"
                                :model="$calculation" :button="false"
                            />
                        @endforeach
                        </tbody>
                    </table>
                    {{ $calculations->links() }}
                @else
                    <div class="card-px text-center pt-15 pb-15">
                        <h2 class="fs-2x fw-bolder mb-0">{{ __('E-Finance Introductory Tutorial Videos') }}</h2>
                        <p class="text-gray-500 fs-4 fw-bold py-7">
                            {{ __('Embark on your journey to financial success by watching the three introductory videos below.') }}
                            <br/>
                            {{ __('Once complete, click on the Start Now button to start working on your financial plan.') }}
                            </p>
                        <a href="https://youtu.be/sF6r66a2zEA" target="_blank">Initial Setup</a><br/><br/>
                        <a href="https://youtu.be/Fkq1DTRu04o" target="_blank">Review Your Financial Plan</a><br/><br/>
                        <a href="https://youtu.be/1Ludmq_3Wp8" target="_blank">Finale</a><br/><br/>
                        <a href="{{ route('calculations.create') }}"
                           class="btn btn-primary er fs-6 px-8 py-4">{{ __('Start Now') }}</a><br/><br/>
                        <h4 class="text-gray-500 fs-4 fw-bold py-7">{{ __('“If you fail to plan, you are planning to fail.“ - Benjamin Franklin') }}</h4>
                    </div>
                @endif
            </div>
        </div>
    </div>
</x-base-layout>
<!--Add New User Form Start -->
<div class="modal" id="exampleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Share Snapshot</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <form action="" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <div class="col-sm-8">
                                                <input type="hidden" class="form-control" name="snapshot" id= "snapshot_id" value=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top:5px;">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Recipient Name</label>
                                            <div class="col-sm-7">
                                                <input type="text" class="form-control" name="name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top:5px;">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Recipient E-Mail</label>
                                            <div class="col-sm-7">
                                                <input type="email" class="form-control" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    </br>
                                </div>
                                <div class="row" style="margin-top:5px;">
                                    <div class="col-md-10" style="text-align: end;">
                                        <button class="btn btn-primary" type="submit" name="">Share</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--Add New User Form End -->
<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"  crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <script>
        $(document).ready(function () {

            $('#table-responsive').DataTable(
                {searching: false, paging: false, info: false, order: [[7, 'desc']]});

            $(".open_popup").click(function(){
                $('#snapshot_id').val($(this).attr('data-id'));
            });

            // $('.open_popup').on('click', function(event) {
            //     event.preventDefault();
            //     const url = $(this).attr('href');
            //     swal({
            //     title: 'Are you sure?',
            //     text: "This Client and it's details will be permanently deleted!",
            //     icon: 'warning',
            //     buttons: ["Cancel", "Yes!"],
            //     }).then(function(value) {
            //     if (value) {
            //         $(this).attr('href');
            //     }
            //     });
            // });

        });
    </script>
