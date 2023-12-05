<x-base-layout>
    <div class="row g-5">
        <div class="col-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Net Worth') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card bg-success hoverable mb-xl-8">
                        <div class="card-body d-flex justify-content-between">
                            <span class="badge badge-white">
                                {!! theme()->getSvgIcon('icons/duotune/arrows/arr066.svg', 'svg-icon-5hx svg-icon-success me-2') !!}
                            </span>
                            <div>
                                <div class="d-flex align-items-center mb-4">
                                    <span class="fs-4 fw-bold text-white me-1 align-self-start">$</span>
                                    <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2"
                                          data-kt-countup="true" data-kt-countup-value="{{ $calculation->results->net_worth }}">0</span>
                                </div>
                                <span class="text-white pt-1 fw-bold fs-1 text-center">{{ __('Net Worth') }}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Goals') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    @foreach($calculation->goals as $i => $goal)
                        <div class="mb-10">
                            <div class="form-check form-check-custom form-check-solid rounded bg-light-success p-3">
                                <input class="form-check-input" type="checkbox" value="" id="goals_{{$i}}">
                                <label class="form-check-label" for="goals_{{$i}}">{{ $goal }}</label>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Monthly Spending') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card bg-info hoverable mb-5 mb-xl-8">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">
                                    {{ $calculation->results->savings }}%
                                </span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Savings') }}</span>
                        </div>
                    </a>
                    <a href="#" class="card bg-warning hoverable mb-xl-8">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">{{ $calculation->results->cash_flow < 0 ? '-' : '+' }}</span>
                                <span class="fs-4 fw-bold text-white me-1 align-self-start">$</span>
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">{{ number_format(abs($calculation->results->cash_flow)) }}</span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Cash Flow') }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Financial Calculations') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card bg-info hoverable mb-5 mb-xl-8">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">{{ $calculation->results->debt_2_income_ratio }}%</span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Debt to Income Ratio') }}</span>
                        </div>
                    </a>
                    <a href="#" class="card bg-warning hoverable mb-xl-8">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">{{ $calculation->results->emergency_fund_ratio }}</span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Emergency Fund Ratio') }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Retirement Plan') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card bg-warning hoverable mb-xl-8">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-4 fw-bold text-white me-1 align-self-start">$</span>
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">
                                    {{ number_format($calculation->results->retirement_plan['required_monthly_savings']) ?? '-' }}
                                </span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Required Monthly Savings') }}</span>
                        </div>
                    </a>
                    @php($progress = $calculation->results->retirement_plan['progress'] ?? 0)
                    <div class="progress h-50px bg-success bg-opacity-50 mb-7" data-bs-toggle="tooltip" data-bs-placement="top" title="{{ $progress }}%">
                        <div class="progress-bar bg-success" role="progressbar" style="width: {{$progress}}%"
                             aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="fs-2">{{$progress}}%</div>
                        </div>
                    </div>
                    <div class="bg-info text-white p-5 rounded text-center">
                        <span class="fs-1">{{ $calculation->results->retirement_plan['years_until_retirement'] ?? 0 }}</span>
                        <span>{{ __('Years Remaining') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Assets') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div id="assets_chart"></div>
                </div>
            </div>
        </div>
    </div>
    <x-theme::scripts>
        <script src="//www.google.com/jsapi"></script>
        <script>
            let target = document.getElementById('assets_chart');
            let seriesData = @json($calculation->results->assets_graph_data['series']);
            let options = {
                series: seriesData.map(str => Number(str)),
                legend: {
                    position: 'bottom'
                },
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: @json($calculation->results->assets_graph_data['labels']),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };

            let chart = new ApexCharts(target, options);
            chart.render();
        </script>
    </x-theme::scripts>
</x-base-layout>

