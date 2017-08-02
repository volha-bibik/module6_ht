var platforms = {

    tablet: '--window-size=1024,768',
    desktop: '--window-size=1280,800'

};

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    globalTimeout: 300000,
    pageTimeout: 300000,
    allScriptsTimeout: 300000,
    specs: [
        'features/*.feature'
    ],

    capabilities: {
        name: 'chrome_'+process.env.PLATFORM,
        browserName: 'chrome',
        chromeOptions : {
            args: [platforms[process.env.PLATFORM]]
        }
    },

    cucumberOpts: {
        require: [
            'step_definitions/*.js',
            './env.js',
            './hooks.js'
        ],
        format: 'pretty',
        tags: ['@search, @edit, @remove', '@remove','search','edit']
    },

    onPrepare: function () {

    }

};
