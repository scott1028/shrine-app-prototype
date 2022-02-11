const esbuild = require('esbuild');
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

const cliOptions = new Set(process.argv);
const options = {
    // NOTE: code spliting build test
    format: 'esm',
    splitting: true,
    // NOTE: import(...) is supported. Ref: https://caniuse.com/?search=import
    //       try polyfill for lost new API
    target: 'chrome63', // NOTE: dynamical import is supported after chrome63
    // target: 'chrome58', // NOTE: by core-js polyfill
    //
    entryPoints: ['src/app.jsx'],
    bundle: true,
    metafile: true,
    outdir: 'dist/',
    watch: cliOptions.has('--watch'),
    plugins: [
        htmlPlugin({
            files: [
                {
                    entryPoints: [
                        'src/app.jsx',
                    ],
                    filename: 'index.html',
                    htmlTemplate: `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <base href="/" target="_self">
                        </head>
                        <body>
                            <div id="root"></div>
                        </body>
                        </html>
                    `,
                    scriptLoading: 'module',
                },
            ]
        })
    ]
}

esbuild.build(options).catch(() => process.exit(1));
