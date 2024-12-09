<?php

namespace chemezov\luya\ckeditor;

use chemezov\luya\ckeditor\bundles\AdminAsset;
use chemezov\luya\ckeditor\bundles\CKEditorSelfHosedAsset;
use yii\base\Application;

/**
 * Ckeditor Admin Module.
 *
 * File has been created with `module/create` command.
 *
 * @author
 * @since 1.0.0
 */
class Module extends \luya\admin\base\Module
{
    public ?string $assetBundleClass = CKEditorSelfHosedAsset::class;

    public string $licenseKey = 'GPL';

    public array $editorConfig = [];

    /**
     * @var callable|null
     */
    public $blockOutputCallback = null;

    public ?string $blockTagName = 'div';

    public array $blockHtmlOptions = [
        'class' => ['block-text'],
    ];

    public function getAdminAssets()
    {
        return [
            $this->assetBundleClass,
            AdminAsset::class,
        ];
    }

    public function luyaBootstrap(Application $app)
    {
        $editorConfig = array_merge(['licenseKey' => $this->licenseKey], $this->editorConfig);

        $app->view->registerJsVar('ckeditorConfig', $editorConfig);

        parent::luyaBootstrap($app);
    }
}
