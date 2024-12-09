<?php
/**
 * View file for block: CKEditorBlock
 *
 * File has been created with `block/create` command.
 *
 * @formatter:off
 * @param $this->cfgValue('cssClass');
 * @param $this->varValue('content');
 * @formatter:on
 *
 * @var \luya\cms\base\PhpBlockView $this
 */

use chemezov\luya\ckeditor\Module;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;

$module = Module::getInstance();
$content = $this->varValue('content');

if (is_callable($module->blockOutputCallback)) {
    $content = call_user_func($module->blockOutputCallback, $content);
}

$tagName = $module->blockTagName;
$htmlOptions = ArrayHelper::merge($module->blockHtmlOptions, ['class' => [$this->cfgValue('cssClass')]]);

?>
<?= Html::tag(Module::getInstance()->blockTagName, $content, $htmlOptions); ?>
