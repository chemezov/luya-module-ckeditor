<?php

namespace chemezov\luya\ckeditor\bundles;

use yii\web\AssetBundle;

/**
 * CKEditor5 CDN AssetBundle.
 */
class CKEditorCdnAsset extends AssetBundle
{
    public $js = [
        'https://cdn.ckeditor.com/ckeditor5/44.0.0/ckeditor5.umd.js',
        'https://cdn.ckeditor.com/ckeditor5/44.0.0/translations/ru.umd.js',
    ];

    public $css = [
        'https://cdn.ckeditor.com/ckeditor5/44.0.0/ckeditor5.css',
    ];
}
