<?php

namespace chemezov\luya\ckeditor\blocks;

use luya\cms\base\PhpBlock;
use luya\cms\frontend\blockgroups\ProjectGroup;
use luya\cms\frontend\blockgroups\TextGroup;
use luya\cms\helpers\BlockHelper;
use luya\generic\Module;

/**
 * Ck Editor Block.
 *
 * File has been created with `block/create` command.
 */
class CKEditorBlock extends PhpBlock
{
    /**
     * @inheritDoc
     */
    public function blockGroup()
    {
        return TextGroup::class;
    }

    /**
     * @inheritDoc
     */
    public function name()
    {
        return 'Редактор';
    }

    /**
     * @inheritDoc
     */
    public function icon()
    {
        return 'border_color'; // see the list of icons on: https://material.io/icons/
    }

    /**
     * @inheritDoc
     */
    public function config()
    {
        return [
            'vars' => [
                ['var' => 'content', 'label' => null, 'type' => 'zaa-ckeditor'],
            ],
            'cfgs' => [
                ['var' => 'cssClass', 'label' => Module::t('block_cfg_additonal_css_class'), 'type' => self::TYPE_TEXT],
            ],
        ];
    }

    /**
     * {@inheritDoc}
     *
     * @param {{cfgs.cssClass}}
     * @param {{vars.content}}
     */
    public function admin()
    {
        return '{% if vars.content is empty %}<span class="block__empty-text">' . Module::t('block_wysiwyg_no_content') . '</span>{% else %}{{ vars.content }}{% endif %}';
    }
}
