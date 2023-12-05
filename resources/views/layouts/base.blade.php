<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"{!! theme()->printHtmlAttributes('html') !!}
    {{ theme()->printHtmlClasses('html') }}>

<head>
    <meta charset="utf-8" />
    <title>E-Finance</title>
    <meta name="description" content="{{ ucfirst(theme()->getOption('meta', 'description')) }}" />
    <meta name="keywords" content="{{ theme()->getOption('meta', 'keywords') }}" />
    <link rel="canonical" href="{{ ucfirst(theme()->getOption('meta', 'canonical')) }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon"
        href="{{ asset(theme()->getThemeAssetsPath() . '/' . theme()->getOption('assets', 'favicon')) }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{ theme()->includeFonts() }}

    @if (theme()->hasOption('page', 'assets/vendors/css'))
        @foreach (array_unique(theme()->getOption('page', 'assets/vendors/css')) as $file)
            {!! preloadCss(assetCustom($file)) !!}
        @endforeach
    @endif

    @if (theme()->hasOption('page', 'assets/custom/css'))
        @foreach (array_unique(theme()->getOption('page', 'assets/custom/css')) as $file)
            {!! preloadCss(assetCustom($file)) !!}
        @endforeach
    @endif

    @if (theme()->hasOption('assets', 'css'))
        @foreach (array_unique(theme()->getOption('assets', 'css')) as $file)
            @if (strpos($file, 'plugins') !== false)
                {!! preloadCss(assetCustom($file)) !!}
            @else
                <link href="{{ assetCustom($file) }}" rel="stylesheet" type="text/css" />
            @endif
        @endforeach
    @endif

    @if (theme()->getViewMode() === 'preview')
        {{ theme()->getView('partials/trackers/_ga-general') }}
        {{ theme()->getView('partials/trackers/_ga-tag-manager-for-head') }}
    @endif

    <link href="{{ asset('vendor/toastr/toastr.min.css') }}" rel="stylesheet" />

    @yield('styles')
    @livewireStyles
</head>

<body {!! theme()->printHtmlAttributes('body') !!} {!! theme()->printHtmlClasses('body') !!} {!! theme()->printCssVariables('body') !!}>

    @if (theme()->getOption('layout', 'loader/display') === true)
        {{ theme()->getView('layout/_loader') }}
    @endif

    @yield('content')

    @if (theme()->hasOption('assets', 'js'))
        @foreach (array_unique(theme()->getOption('assets', 'js')) as $file)
            <script src="{{ asset(theme()->getThemeAssetsPath() . '/' . $file) }}"></script>
        @endforeach
    @endif

    @if (theme()->hasOption('page', 'assets/vendors/js'))
        @foreach (array_unique(theme()->getOption('page', 'assets/vendors/js')) as $file)
            <script src="{{ asset(theme()->getThemeAssetsPath() . '/' . $file) }}"></script>
        @endforeach
    @endif

    @if (theme()->hasOption('page', 'assets/custom/js'))
        @foreach (array_unique(theme()->getOption('page', 'assets/custom/js')) as $file)
            <script src="{{ asset(theme()->getThemeAssetsPath() . '/' . $file) }}"></script>
        @endforeach
    @endif

    @if (theme()->getViewMode() === 'preview')
        {{ theme()->getView('partials/trackers/_ga-tag-manager-for-body') }}
    @endif

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="{{ asset('vendor/toastr/toastr.min.js') }}"></script>

    <script>
        @php($notifications = ['error', 'success', 'warning', 'info'])
        @foreach ($notifications as $notification)
            @if (session()->has($notification))
                @php($message = session()->get($notification))
                {{ 'toastr.' . $notification }}{!! "('" !!}{{ __($message) }}{!! "')" !!}
            @endif
        @endforeach
    </script>

    @livewireScripts
    @yield('scripts')
</body>

</html>
