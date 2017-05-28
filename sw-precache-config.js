
/* eslint-env node */

module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/manifest.json',
        '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
        '/images/*',
    ],
    navigateFallback: 'index.html',
    runtimeCaching: [
        {
            origin: 'https://dhl.toefel.nl',
            urlPattern: '/(.*)',
            handler: 'networkFirst',
            options: {
                cache: {
                    maxEntries: 200,
                    name: 'get-trips'
                }
            }
        },
    ]
};
