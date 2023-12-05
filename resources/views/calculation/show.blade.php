<x-base-layout>
    <style>
         .circle {
      width: 15px;
      height: 15px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 25px;
      background: green;
      margin: 0 auto;
      display: inline-block;
      margin: 0 8px;
    }
    .circle-wrap{
        display: flex;
        justify-content: center;
    }
    .btn{
        margin-left:7px;
    }
    .card .asset-card-body {
        padding: 2rem 0 !important;
    }
    .asset-card-body div {
        justify-content: center;
    }
    .tooltip-inner {
    color: #fff;
    background-color: #FAF9F6 ;
    color:#000000;

    }
     .bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
            border-top-color: #000000;
    }
    </style>
    
    <div class="row g-5">
        {{--<div class="circle-wrap">
        <div><a href="{{ route('calculations.show', $calculation) }}" class="btn btn-sm btn-success hover-scale"><!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/kt-products/docs/metronic/html/releases/2023-01-26-051612/core/html/src/media/icons/duotune/files/fil002.svg-->
                  <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M19 3.40002C18.4 3.40002 18 3.80002 18 4.40002V8.40002H14V4.40002C14 3.80002 13.6 3.40002 13 3.40002C12.4 3.40002 12 3.80002 12 4.40002V8.40002H8V4.40002C8 3.80002 7.6 3.40002 7 3.40002C6.4 3.40002 6 3.80002 6 4.40002V8.40002H2V4.40002C2 3.80002 1.6 3.40002 1 3.40002C0.4 3.40002 0 3.80002 0 4.40002V19.4C0 20 0.4 20.4 1 20.4H19C19.6 20.4 20 20 20 19.4V4.40002C20 3.80002 19.6 3.40002 19 3.40002ZM18 10.4V13.4H14V10.4H18ZM12 10.4V13.4H8V10.4H12ZM12 15.4V18.4H8V15.4H12ZM6 10.4V13.4H2V10.4H6ZM2 15.4H6V18.4H2V15.4ZM14 18.4V15.4H18V18.4H14Z" fill="currentColor"/>
                  <path d="M19 0.400024H1C0.4 0.400024 0 0.800024 0 1.40002V4.40002C0 5.00002 0.4 5.40002 1 5.40002H19C19.6 5.40002 20 5.00002 20 4.40002V1.40002C20 0.800024 19.6 0.400024 19 0.400024Z" fill="currentColor"/>
                  </svg>
                  </span>
                  <!--end::Svg Icon--></a>
            </div>
            <div><a href="{{ route('calculations.googleLineChart', $calculation)  }}" class="btn ml-2 btn-sm btn-success hover-scale"><!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/kt-products/docs/metronic/html/releases/2023-01-26-051612/core/html/src/media/icons/duotune/graphs/gra004.svg-->
                  <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M11 11H13C13.6 11 14 11.4 14 12V21H10V12C10 11.4 10.4 11 11 11ZM16 3V21H20V3C20 2.4 19.6 2 19 2H17C16.4 2 16 2.4 16 3Z" fill="currentColor"/>
                  <path d="M21 20H8V16C8 15.4 7.6 15 7 15H5C4.4 15 4 15.4 4 16V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor"/>
                  </svg>
                  </span>
                  <!--end::Svg Icon--></a>
          </div>
         </div>--}}
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Net Worth') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                <?php
                    $networth_tooltip = '';
                    $Savings_tooltip = '';
                    $DebtIncome_tooltip = '';
                    $Emergency_Fund__tooltip = '';
                    $Cash_Flow_tooltip = '';
                     /////////////////////////////---Cash Flow----///////////////////////////////
                     if($calculation->results->cash_flow==0){
                        $Cash_Flow_tooltip = 'Your zero cash flow reflects your disciplined financial 
                        approach, where income meets expenses responsibly. 
                        It indicates prudent money management and provides 
                        you with peace of mind, allowing you to focus on other 
                        aspects of your life. By strategically saving and 
                        investing, you can build a financially secure future.';

                    }else if($calculation->results->cash_flow<0){
                        $Cash_Flow_tooltip = 'While currently experiencing negative cash flow, 
                        remember that its an opportunity to analyze and 
                        optimize your financial situation. Embrace this 
                        chance to develop better budgeting habits, increase 
                        your financial literacy, and make informed decisions 
                        that will lead you to a more prosperous financial 
                        future.';
                    }else if($calculation->results->cash_flow>0){
                        $Cash_Flow_tooltip = 'Congratulations on your positive cash flow! This 
                        means that your income exceeds your expenses, 
                        leaving you with surplus funds each month. With this 
                        financial strength, you have the opportunity to save, 
                        invest, and make choices that align with your 
                        financial goals, providing you with a strong 
                        foundation for future financial success.';
                    }
                    /////////////////////////////---Net worth----///////////////////////////////
                    if($calculation->results->net_worth==0){
                        $networth_tooltip = 'Having a zero net worth can be viewed as a promising 
                        and exciting starting point for building a strong financial 
                        future. It means that you have a clean slate, free from 
                        burdensome debts and obligations, and you have the 
                        opportunity to create a solid foundation for your 
                        financial well-being.';

                    }else if($calculation->results->net_worth<0){
                        $networth_tooltip = 'Negative net worth simply means that your financial 
                        journey is at its starting point, filled with potential for 
                        growth. Embrace this opportunity to assess your 
                        financial situation, set clear goals, and develop a 
                        plan to reduce debts and build assets. With 
                        determination, you have the power to transform 
                        your current situation into a stepping stone towards 
                        a prosperous financial future.';
                    }else if($calculation->results->net_worth>0){
                        $networth_tooltip = 'Positive net worth is good for you because it 
                        indicates financial stability and security. It means 
                        that your assets exceed your liabilities, providing a 
                        safety net for unexpected expenses and 
                        emergencies. With positive net worth, you can 
                        confidently pursue your goals, invest in your future, 
                        and enjoy a sense of financial freedom and peace of 
                        mind';
                    }
                    /////////////////////////////---Savings----///////////////////////////////
                    if($calculation->results->savings<1){
                        $Savings_tooltip = 'aving zero savings offers a fresh start to build a 
                        strong financial foundation. Embrace this moment 
                        as an opportunity to create a savings plan tailored 
                        to your goals and priorities. With disciplined saving 
                        habits and a clear financial vision, you can achieve 
                        the financial security you desire';

                    }else if($calculation->results->savings>0 && $calculation->results->savings<11){
                        $Savings_tooltip = 'Having a 1-10% savings rate is a positive step towards 
                        building a habit of saving and financial responsibility. 
                        Consider exploring opportunities to increase your 
                        savings rate gradually, as doing so will have a 
                        significant impact on your long-term financial well-being 
                        and provide greater flexibility in achieving your financial 
                        goals.';
                    }else if($calculation->results->savings>10 && $calculation->results->savings<21){
                        $Savings_tooltip = 'Having an 10-20% savings rate is commendable 
                        and reflects a strong commitment to building 
                        financial security. Continue to maintain this positive 
                        savings habit and consider exploring additional ways 
                        to grow your savings rate, as it will further 
                        strengthen your financial position and open up more 
                        opportunities for financial growth and success.';
                    }else if($calculation->results->savings>20){
                        $Savings_tooltip = 'Having a 20% or more savings rate is a 
                        remarkable accomplishment that demonstrates 
                        your dedication to financial prudence. With such 
                        a high savings rate, you are well-positioned to 
                        achieve your financial goals faster, create 
                        opportunities for investments, and enjoy a 
                        greater sense of financial freedom and security. 
                        Keep up the excellent work.';
                    }
                    /////////////////////////////---Debt to Income----///////////////////////////////
                    if($calculation->results->debt_2_income_ratio<1){
                        $DebtIncome_tooltip = 'Having zero debt is generally considered a positive 
                        financial situation. Being debt-free means greater 
                        financial freedom and reduced financial stress. 
                        However, it\'s important to note that certain types of 
                        debt, can sometimes be used to leverage 
                        opportunities and build wealth. Ultimately, the key is 
                        to manage debt responsibly and prioritize financial 
                        stability';

                    }else if($calculation->results->debt_2_income_ratio>0 && $calculation->results->debt_2_income_ratio<41){
                        $DebtIncome_tooltip = 'Having a debt-to-income ratio of 40% or less is 
                        generally considered a healthy financial position. With a 
                        lower debt burden, you have more financial flexibility, 
                        reduced risk of defaulting on debt payments, and 
                        greater capacity to achieve your financial goals. 
                        Maintaining a debt-to-income ratio of 40% or less is a 
                        positive sign of responsible financial management and 
                        positions you well for long-term financial stability';

                    }else if($calculation->results->debt_2_income_ratio>40){
                        $DebtIncome_tooltip = 'Having a debt-to-income ratio of more than 40% can 
                        be a sign of financial strain. If you find yourself with 
                        a debt-to-income ratio exceeding 40%, it\'s crucial to 
                        reassess your financial situation, develop a realistic 
                        debt repayment plan, and consider ways to reduce 
                        debt and improve your financial health. Seeking 
                        guidance from a financial advisor or credit counselor 
                        can be beneficial in managing debt effectively';

                    }
                    /////////////////////////////---Emergency Fund Ratio----///////////////////////////////
                    if($calculation->results->emergency_fund_ratio<1){
                        $Emergency_Fund__tooltip = 'Having a zero emergency fund is a chance to 
                        proactively prioritize financial preparedness. 
                        Consider this as a starting point to establish an 
                        emergency fund, which will provide peace of mind 
                        during unexpected circumstances. By consistently 
                        contributing to your emergency fund, you are taking 
                        a positive step towards safeguarding your financial 
                        stability and being better equipped to handle life\'s 
                        uncertainties.';

                    }else if($calculation->results->emergency_fund_ratio>=1 && $calculation->results->emergency_fund_ratio<4){
                        $Emergency_Fund__tooltip = 'Congratulations on having an emergency fund that 
                        covers 1-3 months\' worth of expenses! This is a 
                        significant achievement as it provides a valuable 
                        safety net during unforeseen events or financial 
                        challenges. With this level of preparedness, you can 
                        face unexpected situations with confidence, knowing 
                        that you have a financial cushion to rely on while you 
                        work towards further strengthening your financial 
                        security.';
                    }else if($calculation->results->emergency_fund_ratio>3 && $calculation->results->emergency_fund_ratio<=6){
                        $Emergency_Fund__tooltip = 'Congratulations on having an emergency fund that 
                        covers 3-6 months\' worth of expenses! This is a 
                        remarkable accomplishment as it offers an even 
                        more substantial safety net during times of 
                        uncertainty. With such a well-prepared emergency 
                        fund, you have increased financial resilience. This 
                        level of preparedness provides you with the peace 
                        of mind and flexibility to navigate life\'s challenges 
                        with greater ease. ';
                    }else if($calculation->results->emergency_fund_ratio>6){
                        $Emergency_Fund__tooltip = 'Having an emergency fund that covers 6 
                        months or more of expenses is a fantastic 
                        achievement and a testament to your excellent 
                        financial discipline. It demonstrates that you 
                        have prioritized financial security and 
                        preparedness, providing you with a substantial 
                        safety net during unexpected situations. Well 
                        done on building such a strong foundation for 
                        your financial future!
                        ';
                    }

                    ?>
                    <a href="#" class="card bg-success hoverable mb-xl-8" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-placement="top" title="{{ $networth_tooltip }}">
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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Monthly Spending') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card bg-info hoverable mb-5 mb-xl-8" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-placement="top" title="{{ $Savings_tooltip }}">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">
                                    {{ $calculation->results->savings }}%
                                </span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Savings') }}</span>
                        </div>
                    </a>
                    <a href="#" class="card bg-warning hoverable mb-xl-8" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-placement="top" title="{{ $Cash_Flow_tooltip }}">
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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Financial Calculations') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card bg-info hoverable mb-5 mb-xl-8" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-placement="top" title="{{ $DebtIncome_tooltip }}">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-4">
                                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">{{ $calculation->results->debt_2_income_ratio }}%</span>
                            </div>
                            <span class="text-white pt-1 fw-bold fs-6">{{ __('Debt to Income Ratio') }}</span>
                        </div>
                    </a>
                    <a href="#" class="card bg-warning hoverable mb-xl-8" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-placement="top" title="{{ $Emergency_Fund__tooltip }}">
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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Retirement') }}</h5>
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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Assets') }}</h5>
                    </div>
                </div>
                <div class="card-body asset-card-body">
                    <div class="d-flex align-items-center mb-4">
                        <div id="assets_chart"></div>
                    </div>
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
                    breakpoint: 1199,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    },
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300
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

