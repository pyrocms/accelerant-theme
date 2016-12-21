<?php namespace Pyrocms\AccelerantTheme;

use Anomaly\Streams\Platform\Addon\AddonServiceProvider;
use Illuminate\Pagination\AbstractPaginator;

/**
 * Class AccelerantThemeServiceProvider
 *
 * @link   http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class AccelerantThemeServiceProvider extends AddonServiceProvider
{

    /**
     * Register the addon.
     */
    public function register()
    {
        AbstractPaginator::$defaultView       = 'pyrocms.theme.accelerant::pagination/bootstrap-4';
        AbstractPaginator::$defaultSimpleView = 'streams::pagination/simple-bootstrap-4';
    }
}
