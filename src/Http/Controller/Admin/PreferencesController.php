<?php namespace Pyrocms\AccelerantTheme\Http\Controller\Admin;

use Anomaly\PreferencesModule\Preference\Contract\PreferenceRepositoryInterface;
use Anomaly\Streams\Platform\Http\Controller\AdminController;

/**
 * Class PreferencesController
 *
 * @link   http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PreferencesController extends AdminController
{

    /**
     * Save the navigation order.
     *
     * @param PreferenceRepositoryInterface $preferences
     */
    public function navigation(PreferenceRepositoryInterface $preferences)
    {
        $preferences->set('pyrocms.theme.accelerant::navigation', serialize($this->request->get('navigation')));
    }
}
