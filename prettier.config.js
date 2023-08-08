module.exports = {
    // Options
    arrowParens               : 'always',      // Default: 'always' (always|avoid)
    bracketSameLine           : true,          // Default: false (bool)
    bracketSpacing            : true,          // Default: true (bool)
    embeddedLanguageFormatting: 'auto',        // Default: 'auto' (off|auto)
    endOfLine                 : 'lf',          // Default: 'lf' (lf|crlf|cr|auto)
    htmlWhitespaceSensitivity : 'css',         // Default: 'css' (css|strict|ignore)
    insertPragma              : false,         // Default: false (int)
    jsxSingleQuote            : false,         // Default: false (bool)
    printWidth                : 120,           // Default: 80 (int)
    proseWrap                 : 'preserve',    // Default: 'preserve' (always|never|preserve)
    quoteProps                : 'as-needed',   // Default: 'as-needed' (as-needed|consistent|preserve)
    rangeEnd                  : Infinity,      // Default: Infinity (int)
    rangeStart                : 0,             // Default: 0 (int)
    requirePragma             : false,         // Default: false (bool)
    semi                      : true,          // Default: true (bool)
    singleQuote               : true,          // Default: false (bool)
    singleAttributePerLine    : false,         // Default: false (bool)
    tabWidth                  : 4,             // Default: 2 (int)
    trailingComma             : 'es5',         // Default: 'es5' (es5|none|all)
    useTabs                   : false,         // Default: false (bool)
    overrides                 : [{
        files  : '*.js',
        options: {
            parser: 'babel'  // Default: None (string)
        },
        files  : '*.scss',
        options: {
            parser: 'scss',  // Default: None (string)
        },
        files  : '*.vue',
        options: {
            parser                 : 'vue',      // Default: None (string)
            printWidth             : Infinity,   // Default: 80 (int)
            vueIndentScriptAndStyle: true        // Default: false (bool)
        }
    }]
}
