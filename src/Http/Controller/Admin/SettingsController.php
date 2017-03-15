<?php namespace Pyrocms\AccelerantTheme\Http\Controller\Admin;

use Anomaly\SettingsModule\Setting\Contract\SettingRepositoryInterface;
use Anomaly\Streams\Platform\Http\Controller\AdminController;

/**
 * Class SettingsController
 *
 * @link   http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class SettingsController extends AdminController
{

    /**
     * Save the navigation order.
     *
     * @param SettingRepositoryInterface $settings
     */
    public function navigation(SettingRepositoryInterface $settings)
    {
        $settings->set('pyrocms.theme.accelerant::navigation', serialize($this->request->get('navigation')));
    }
}
