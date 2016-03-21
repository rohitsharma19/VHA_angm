'use strict';

// Karma configuration
module.exports = function (config) {
	config.set({
		// Frameworks to use
		frameworks: ['jasmine'],

		// List of files / patterns to load in the browser
		files: [
			'src/bower_components/jquery/dist/jquery.js',
			'src/bower_components/es5-shim/es5-shim.js',
			'src/bower_components/json3/lib/json3.min.js',
			'src/bower_components/angular/angular.js',
			'src/bower_components/angular-aria/angular-aria.js',
			'src/bower_components/angular-resource/angular-resource.js',
			'src/bower_components/angular-mocks/angular-mocks.js',
			'src/bower_components/angular-cookies/angular-cookies.js',
			'src/bower_components/angular-sanitize/angular-sanitize.js',
			'src/bower_components/angular-animate/angular-animate.js',
			'src/bower_components/angular-touch/angular-touch.js',
			'src/bower_components/angular-ui-router/release/angular-ui-router.js',
			'src/bower_components/angular-aria/angular-aria.js',
			'src/bower_components/angular-material/angular-material.js',
			'src/bower_components/angular-messages/angular-messages.js',
			'src/bower_components/angular-material-icons/angular-material-icons.js',
			'app/app.js',
			'app/modules/home/homeModule.js',
			'app/modules/home/homeCtrl.js',
			'app/modules/home/homeRoute.js',
			'app/modules/home/homeService.js',
			'app/modules/home/home-test.js',
			'app/modules/lead/leadModule.js',
			'app/modules/lead/leadCtrl.js',
			'app/modules/lead/leadRoute.js',
			'app/modules/lead/leadService.js',
			'app/modules/lead/lead-test.js',
			'app/modules/opportunity/opportunityModule.js',
			'app/modules/opportunity/opportunityCtrl.js',
			'app/modules/opportunity/opportunityRoute.js',
			'app/modules/opportunity/opportunityService.js',
			'app/modules/opportunity/opportunity-test.js',
			'app/modules/recommendation/recommendationModule.js',
			'app/modules/recommendation/recommendationCtrl.js',
			'app/modules/recommendation/recommendationRoute.js',
			'app/modules/recommendation/recommendationService.js',
			'app/modules/recommendation/recommendation-test.js',
			'app/modules/quote/quoteModule.js',
			'app/modules/quote/quoteCtrl.js',
			'app/modules/quote/quoteRoute.js',
			'app/modules/quote/quoteService.js',
			'app/modules/quote/quote-test.js',
			'app/modules/agreement/agreementModule.js',
			'app/modules/agreement/agreementCtrl.js',
			'app/modules/agreement/agreementRoute.js',
			'app/modules/agreement/agreementService.js',
			'app/modules/agreement/agreement-test.js',
		],

		// Test results reporter to use
		// Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['progress'],
		reporters: ['spec'],

		plugins : [
			'karma-jasmine',
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],

		// Web server port
		port: 9876,

		// Enable / disable colors in the output (reporters and logs)
		colors: true,

		// Level of logging
		// Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// Enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// If true, it capture browsers, run tests and exit
		singleRun: true
	});
};
