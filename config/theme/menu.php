<?php

return array(
    // Main menu
    'main'          => array(
        //// Dashboard
        array(
            'title' => 'Dashboard',
            'path'  => '',
            'icon'  => theme()->getSvgIcon("theme/media/icons/duotune/art/art002.svg", "svg-icon-2"),
        ),
    ),

    // Horizontal menu
    'horizontal'    => array(
        // Dashboard
        array(
            'title'   => 'Home',
            'path'    => 'calculations',
            'classes' => array('item' => 'me-lg-1'),
        ),

        array(
            'title'   => 'New Snapshot',
            'path'    => 'calculations/create',
            'classes' => array('item' => 'me-lg-1'),
        ),

        // array(
        //     'title'   => 'FAQs',
        //     'path'    => 'faqs',
        //     'classes' => array('item' => 'me-lg-1'),
        // ),

        array(
            'title'   => 'Users Management',
            'path'    => 'users',
            'classes' => array('item' => 'me-lg-1'),
            'permission' => 'access-admin-panel',
        ),
        // array(
        //     'title'   => 'CMS',
        //     'path'    => 'cms',
        //     'classes' => array('item' => 'me-lg-1'),
        //     'permission' => 'access-admin-panel',
        // ),
        // array(
        //     'title'   => 'Subscribers',
        //     'path'    => 'subscribers',
        //     'classes' => array('item' => 'me-lg-1'),
        //     'permission' => 'access-admin-panel',
        // ),
        // array(
        //     'title'   => 'Email Management',
        //     'path'    => 'email-management',
        //     'classes' => array('item' => 'me-lg-1'),
        //     'permission' => 'email-resource',
        // ),
    ),
);
