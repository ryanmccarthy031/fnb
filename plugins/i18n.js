module.exports = {
    use: 'gridsome-plugin-i18n',
    options: {
        locales: [
            'es-es',
            'en-us',
        ],
        enablePathRewrite: false,
        fallbackLocale: 'en-us',
        defaultLocale: 'en-us',
        messages: {
            'en-us': require('../locales/en-us.json'), // Messages files
            'es-es': require('../locales/es-es.json'),
          }
    },
}