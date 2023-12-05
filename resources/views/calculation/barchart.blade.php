<x-base-layout>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

</head>
<style>
@media only screen and (max-width: 600px) {
  #myChart {
    test: 10px;
  }
  .center{
    width:100%!important;
  }
}
    table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
     }
    .center {
        margin: auto;
        width: 100%;
        padding: 10px;
    }
    .circle-wrap{
        display: flex;
        justify-content: center;
        margin-bottom:10px;
    }
    .left{

    }
    #myChart{
      margin: 20px auto;
    }
    img{
        max-width: 100%;
    }
</style>

<body>
<div class="circle-wrap">
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
         </div>
         <div class="col-12 col-md-12 col-lg-12">
            <div class="card shadow-sm h-100">
                <div class="card-header">
                    <div class="card-title text-center">
                        <h5>{{ __('Balance Sheet Analysis') }}</h5>
                    </div>
                </div>
                <div class="card-body" style="max-width: 1170px; margin: 0 auto;">
                    <a href="#" class="card hoverable mb-xl-8">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="left">
                                 <img id="img" src="{{asset('/theme/media/illustrations/sketchy-1/17-dark.png')}}" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="center">
                                <canvas id="myChart" style="width:100%;max-width:800px">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="right">
                                <img src="{{asset('/theme/media/illustrations/sketchy-1/10.png')}}" />
                            </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

<script>
    var xValues = ["Assets", "Liabilities", "Net Worth"];
    var barColors = ["green", "red","blue"];

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        
        datasets: [{
          backgroundColor: barColors,
          data: @php
                        foreach ($result as $row) {

                            echo "[ '" .$assets->totalAssets. "','" .'-'.$assets->totalDebts. "','" . $calculation->results->net_worth . "'],";
                        }

                @endphp
        }]
      },
      options: {
          legend: {display: false},
          title: {
            display: false,
            text: "Balance sheet"
          },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value) {
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    }
                }]
            }
            ,
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                            });

                    } }
            },
        }
      
      
    });
</script>

   
</body>

</html>
</x-base-layout>
