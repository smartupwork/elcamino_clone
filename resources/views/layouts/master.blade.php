@extends('layouts.base')

@section('content')
    @if (theme()->getOption('layout', 'main/type') === 'blank')
        <div class="d-flex flex-column flex-root">
            {{ $slot }}
        </div>
    @else
        <div class="d-flex flex-column flex-root">
            <div class="page d-flex flex-row flex-column-fluid">
                @if( theme()->getOption('layout', 'aside/display') === true )
                    {{ theme()->getView('layout/aside/_base') }}
                @endif

                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    {{ theme()->getView('layout/header/_base') }}

                    <div class="content d-flex flex-column flex-column-fluid {{ theme()->printHtmlClasses('content', false) }}"
                        id="kt_content">
                        @if (theme()->getOption('layout', 'toolbar/display') === true)
                            {{ theme()->getView('layout/toolbars/_' . theme()->getOption('layout', 'toolbar/layout')) }}
                        @endif

                        <div class="post d-flex flex-column-fluid" id="kt_post">
                            {{ theme()->getView('layout/_content', compact('slot')) }}
                        </div>

                    </div>

                    {{ theme()->getView('layout/_footer') }}
                </div>
            </div>
        </div>

        @if(theme()->getOption('layout', 'scrolltop/display') === true)
            {{ theme()->getView('layout/_scrolltop') }}
        @endif
    @endif
@endsection
