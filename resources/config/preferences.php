<?php

return [
    'sidebar_hover' => 'anomaly.field_type.boolean',
    'navigation'    => [
        'type'       => 'anomaly.field_type.textarea',
        'input_view' => 'pyrocms.theme.accelerant::admin/navigation/preferences',
    ],
    'layout'        => [
        'type'   => 'anomaly.field_type.select',
        'config' => [
            'options'       => [
                'regular'         => 'Regular',
                'tight'           => 'Tighter',
            ],
            'default_value' => 'regular',
            'mode'          => 'dropdown',
        ],
    ],
    'sidebars'        => [
        'type'   => 'anomaly.field_type.select',
        'config' => [
            'options'       => [
                'regular'        => 'Regular',
                'static'         => 'Static Sidebars',
            ],
            'default_value' => 'regular',
            'mode'          => 'dropdown',
        ],
    ],
];
