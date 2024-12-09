(function () {
    "use strict";

    zaa.directive("zaaCkeditor", function () {
        return {
            restrict: "E",
            scope: {
                "model": "=",
                "options": "=",
                "label": "@label",
                "i18n": "@i18n",
                "id": "@fieldid",
                "placeholder": "@placeholder",
                "name": "@name",
            },
            link: function ($scope, $element) {
                const {
                    ClassicEditor,
                    Alignment,
                    Autoformat,
                    Autosave,
                    BlockQuote,
                    Bold,
                    Code,
                    CodeBlock,
                    Essentials,
                    FindAndReplace,
                    FontBackgroundColor,
                    FontColor,
                    FontFamily,
                    FontSize,
                    GeneralHtmlSupport,
                    Heading,
                    Highlight,
                    HorizontalLine,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    List,
                    ListProperties,
                    MediaEmbed,
                    Mention,
                    Paragraph,
                    PasteFromMarkdownExperimental,
                    PasteFromOffice,
                    RemoveFormat,
                    SourceEditing,
                    SpecialCharacters,
                    Strikethrough,
                    Subscript,
                    Superscript,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextTransformation,
                    TodoList,
                    Underline
                } = window.CKEDITOR;

                const LICENSE_KEY = 'GPL';

                const editorConfig = {
                    toolbar: {
                        items: [
                            'heading',
                            // '|',
                            // 'fontSize',
                            // 'fontFamily',
                            'fontColor',
                            'fontBackgroundColor',
                            '|',
                            'bold',
                            'italic',
                            'underline',
                            'strikethrough',
                            'subscript',
                            'superscript',
                            'code',
                            'removeFormat',
                            '|',
                            // 'specialCharacters',
                            'horizontalLine',
                            'link',
                            // 'mediaEmbed',
                            'insertTable',
                            'highlight',
                            'blockQuote',
                            'codeBlock',
                            '|',
                            // 'alignment',
                            // '|',
                            'bulletedList',
                            'numberedList',
                            // 'todoList',
                            'outdent',
                            'indent',
                            '|',
                            'findAndReplace',
                            'sourceEditing',
                        ],
                        shouldNotGroupWhenFull: false
                    },
                    plugins: [
                        Alignment,
                        Autoformat,
                        Autosave,
                        BlockQuote,
                        Bold,
                        Code,
                        CodeBlock,
                        Essentials,
                        FindAndReplace,
                        FontBackgroundColor,
                        FontColor,
                        FontFamily,
                        FontSize,
                        GeneralHtmlSupport,
                        Heading,
                        Highlight,
                        HorizontalLine,
                        Indent,
                        IndentBlock,
                        Italic,
                        Link,
                        List,
                        ListProperties,
                        MediaEmbed,
                        Mention,
                        Paragraph,
                        PasteFromMarkdownExperimental,
                        PasteFromOffice,
                        RemoveFormat,
                        SourceEditing,
                        SpecialCharacters,
                        Strikethrough,
                        Subscript,
                        Superscript,
                        Table,
                        TableCaption,
                        TableCellProperties,
                        TableColumnResize,
                        TableProperties,
                        TableToolbar,
                        TextTransformation,
                        TodoList,
                        Underline
                    ],
                    fontFamily: {
                        supportAllValues: true
                    },
                    fontSize: {
                        options: [10, 12, 14, 'default', 18, 20, 22],
                        supportAllValues: true
                    },
                    heading: {
                        options: [
                            {
                                model: 'paragraph',
                                title: 'Paragraph',
                                class: 'ck-heading_paragraph'
                            },
                            // {
                            //     model: 'heading1',
                            //     view: 'h1',
                            //     title: 'Heading 1',
                            //     class: 'ck-heading_heading1'
                            // },
                            {
                                model: 'heading2',
                                view: 'h2',
                                title: 'Heading 2',
                                class: 'ck-heading_heading2'
                            },
                            {
                                model: 'heading3',
                                view: 'h3',
                                title: 'Heading 3',
                                class: 'ck-heading_heading3'
                            },
                            {
                                model: 'heading4',
                                view: 'h4',
                                title: 'Heading 4',
                                class: 'ck-heading_heading4'
                            },
                            {
                                model: 'heading5',
                                view: 'h5',
                                title: 'Heading 5',
                                class: 'ck-heading_heading5'
                            },
                            {
                                model: 'heading6',
                                view: 'h6',
                                title: 'Heading 6',
                                class: 'ck-heading_heading6'
                            }
                        ]
                    },
                    htmlSupport: {
                        allow: [
                            {
                                name: /^.*$/,
                                styles: true,
                                attributes: true,
                                classes: true
                            }
                        ]
                    },
                    initialData: '',
                    language: 'ru',
                    licenseKey: LICENSE_KEY,
                    link: {
                        addTargetToExternalLinks: true,
                        defaultProtocol: 'https://',
                        decorators: {
                            toggleDownloadable: {
                                mode: 'manual',
                                label: 'Downloadable',
                                attributes: {
                                    download: 'file'
                                }
                            }
                        }
                    },
                    list: {
                        properties: {
                            styles: true,
                            startIndex: true,
                            reversed: true
                        }
                    },
                    mention: {
                        feeds: [
                            {
                                marker: '@',
                                feed: [
                                    /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
                                ]
                            }
                        ]
                    },
                    // placeholder: 'Type or paste your content here!',
                    table: {
                        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                    }
                };

                let config = angular.extend({}, editorConfig, window.ckeditorConfig || {});

                let editorInstance;

                // Найти textarea
                const textarea = $element.find('textarea')[0];

                // Инициализация CKEditor
                ClassicEditor
                    .create(textarea, config)
                    .then(editor => {
                        editorInstance = editor;

                        // Установка значения из ngModel
                        if ($scope.model) {
                            editorInstance.setData($scope.model);
                        }

                        // Синхронизация данных
                        editor.model.document.on('change:data', () => {
                            $scope.$apply(() => {
                                $scope.model = editorInstance.getData();
                            });
                        });
                    })
                    .catch(error => {
                        console.error('Ошибка инициализации CKEditor:', error);
                    });

                // Удаление редактора при уничтожении
                $scope.$on('$destroy', function () {
                    if (editorInstance) {
                        editorInstance.destroy();
                    }
                });
            },

            template: function () {
                //@formatter:off
                return '' +
                    '<div class="form-group form-side-by-side" ng-class="{\'input--hide-label\': i18n}">' +
                        '<div ng-if="label" class="form-side form-side-label">' +
                            '<label for="{{id}}">{{label}}</label>' +
                        '</div>' +
                        '<div class="form-side">' +
                            '<div class="editor-container editor-container_classic-editor">' +
                                '<div class="editor-container__editor">' +
                                    '<textarea id="{{id}}" insert-paste-listener ng-model="model" type="text" class="form-control" auto-grow></textarea>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                //@formatter:on
            }
        }
    });
})();
