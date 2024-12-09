<?php

namespace chemezov\luya\ckeditor\bundles;

use yii\web\AssetBundle;

/**
 * CKEditor5 self-hosted AssetBundle.
 */
class CKEditorSelfHosedAsset extends AssetBundle
{
    public $sourcePath = '@vendor/chemezov/luya-module-ckeditor/assets/ckeditor5';

    public $js = [
        'ckeditor5.umd.js',
        'translations/ru.umd.js',
    ];

    public $css = [
        'ckeditor5.css',
    ];
}
