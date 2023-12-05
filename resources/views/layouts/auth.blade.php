@extends('layouts.base')

@section('content')
    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-column-fluid bgi-postion-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
            style="background-image: url({{ asset(theme()->getIllustrationUrl('14-dark.png')) }})">

            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                <a href="{{ $theme->getPageUrl('') }}" class="mb-12">
                    <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/auth-logo.png') }}" style="width:150px; height:150px !important;" class="h-75px" />
                </a>

                <div class="{{ $wrapperClass ?? '' }} bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    {{ $slot }}
                </div>
            </div>
        </div>
    </div>
@endsection
