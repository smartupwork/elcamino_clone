<?php

return array(
    // Assets
    'assets' => array(
        'favicon' => 'media/logos/favicon.ico',
        'fonts' => array(
            'google' => array(
                'Poppins:300,400,500,600,700',
            ),
        ),
        'css' => array(
            'plugins/global/plugins.bundle.css',
            'plugins/global/plugins-custom.bundle.css',
            'css/style.bundle.css',
        ),
        'js' => array(
            'plugins/global/plugins.bundle.js',
            'js/scripts.bundle.js',
            'js/custom/widgets.js',
        ),
    ),

    // Layout
    'layout' => array(
        'main' => array(
            'base' => 'default',
            'type' => 'default',
            'dark-mode-enabled' => true,
            'primary-color' => '#009EF7',
        ),
        'loader' => array(
            'display' => false,
            'type' => 'default',
        ),
        'header' => array(
            'display' => true,
            'width' => 'fluid',
            'left' => 'menu',
            'fixed' => array(
                'desktop' => true,
                'tablet-and-mobile' => true,
            ),
            'menu-icon' => 'svg',
        ),
        'toolbar' => array(
            'display' => true,
            'width' => 'fluid',
            'fixed' => array(
                'desktop' => true,
                'tablet-and-mobile' => false,
            ),
            'layout' => 'toolbar-1',
            'layouts' => array(
                'toolbar-1' => array(
                    'height' => '55px',
                    'height-tablet-and-mobile' => '55px',
                ),
                'toolbar-2' => array(
                    'height' => '75px',
                    'height-tablet-and-mobile' => '65px',
                ),
                'toolbar-3' => array(
                    'height' => '55px',
                    'height-tablet-and-mobile' => '55px',
                ),
                'toolbar-4' => array(
                    'height' => '65px',
                    'height-tablet-and-mobile' => '65px',
                ),
                'toolbar-5' => array(
                    'height' => '75px',
                    'height-tablet-and-mobile' => '65px',
                ),
            ),
        ),
        'page-title' => array(
            'display' => true,
            'breadcrumb' => true,
            'description' => false,
            'layout' => 'default',
            'direction' => 'row',
            'responsive' => true,
            'responsive-breakpoint' => 'lg',
            'responsive-target' => '#kt_toolbar_container',
        ),
        'aside' => array(
            'display' => false,
            'theme' => 'dark',
            'menu' => 'main',
            'fixed' => true,
            'minimized' => false,
            'minimize' => true,
            'hoverable' => true,
            'menu-icon' => 'svg',
        ),
        'content' => array(
            'width' => 'fluid',
            'layout' => 'default',
        ),
        'footer' => array(
            'width' => 'fluid',
        ),
        'scrolltop' => array(
            'display' => true,
        ),
        'docs' => array(
            'logo-path' => array(
                'default' => 'logos/logo-1.svg',
                'dark' => 'logos/logo-1-dark.svg',
            ),
            'logo-class' => 'h-25px',
        ),
        'illustrations' => array(
            'set' => 'sketchy-1',
        ),
        'engage' => array(
            'demos' => array(
                'enabled' => true,
                'direction' => 'end',
            ),
            'explore' => array(
                'enabled' => true,
                'direction' => 'end',
            ),
            'help' => array(
                'enabled' => true,
                'direction' => 'end',
            ),
            'purchase' => array(
                'enabled' => true,
            ),
        ),
    ),

    // Meta
    'meta' => array(
        'title' => 'El Camino Financial',
        'description' => 'Elcamino Finance',
        'keywords' => 'Elcamino Finance',
        'canonical' => 'https://preview.keenthemes.com/metronic8',
    ),

    // General
    'general' => array(
        'website' => 'https://keenthemes.com',
        'about' => 'https://keenthemes.com',
        'contact' => 'mailto:support@keenthemes.com',
        'support' => 'https://keenthemes.com/support',
        'bootstrap-docs-link' => 'https://getbootstrap.com/docs/5.0',
        'licenses' => 'https://keenthemes.com/licensing',
        'social-accounts' => array(
            /*array(
                'name' => 'Youtube',
                'url' => 'https://www.youtube.com/c/KeenThemesTuts/videos',
                'logo' => 'svg/social-logos/youtube.svg', "class" => "h-20px",
            ),*/
        ),
    ),

);
