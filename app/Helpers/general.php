<?php

if ( ! function_exists('percent')) {
    function percent($percent, $amount = 1)
    {
        $percent = (float) $percent;
        return $amount * ($percent/100);
    }
}

if ( ! function_exists('percentage')) {
    function percentage($number, $precision = 2)
    {
        return round($number * 100, $precision);
    }
}

if ( ! function_exists('percent')) {
    function percent($percent, $amount = 1)
    {
        return $amount * ($percent/100);
    }
}

function inflationAdjustedReturn($post_return, $pre_return){
    $return = ((1 + $post_return) / (1 + $pre_return)) - 1;
    $return_percentage = $return * 100;
    return round($return_percentage, 8);
}
