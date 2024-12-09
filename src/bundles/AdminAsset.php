<?php

namespace chemezov\luya\ckeditor\bundles;

use luya\web\Asset;

class AdminAsset extends Asset
{
    public $sourcePath = '@vendor/chemezov/luya-module-ckeditor/src/resources';

    public $js = [
        'ckeditor5.js',
    ];

    public $depends = [
        'luya\admin\assets\Main',
    ];
}
