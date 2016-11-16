var jasmineReporters = require('jasmine-reporters');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 7200000,
    

    /**
     * usage example:
     * protractor protractor.conf.js --specs=e2e/policies/response-rules/actions/actionAlert.spec.js
     */
    suites: {
        'general#login': 'e2e/test1.spec.js',
    //    'general#login1': 'e2e/test2.spec.js'
    },
    capabilities:
    {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                'disable-extensions'
            ]
        }
    },

    framework: 'jasmine2',
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval : 5000000,
        allScriptsTimeout: 20000000
    },

    params: {
        username: 'WiproTraining',
		password: 'bbb'
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            savePath: 'testreports',
            consolidate: true,
            useDotNotation: true
        }));
    }

};