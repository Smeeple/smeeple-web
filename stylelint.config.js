module.exports = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'blockless-after-blockless', 'inside-block'],
            },
        ],
        'color-function-notation': [
            'modern',
            {
                ignore: ['with-var-inside'],
            },
        ],
        'color-named': [
            'never',
            {
                ignore: ['inside-function'],
            },
        ],
        'comment-empty-line-before': null,
        'custom-property-pattern': '',
        'declaration-no-important': true,
        'font-family-no-missing-generic-family-keyword': null,
        'max-nesting-depth': 4,
        'media-feature-range-notation': null,
        'no-descending-specificity': null,
        'scss/at-if-no-null': null,
        'scss/at-rule-no-unknown': null,
        'scss/dollar-variable-colon-space-after': 'always-single-line',
        'scss/operator-no-newline-after': null,
        'selector-class-pattern': '',
        'selector-max-id': 0,
        'unit-disallowed-list': ['em'],
    },
};
