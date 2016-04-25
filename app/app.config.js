(function() {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('vha')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


		$urlRouterProvider
			.otherwise('/dashboard');

		$mdThemingProvider.theme('default')
			.primaryPalette('red')
			.accentPalette('blue');

	}

	//runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope, formlyConfig) {
		'use strict';
		console.log('AngularJS run() function...');

		formlyConfig.setType({
			name: 'test',
			templateUrl: 'test.html'
		});
		formlyConfig.setType({
			name: 'tabset',
			templateUrl: 'tabset.html'
		});

		formlyConfig.setType({
			name: 'card',
			templateUrl: 'card.html',
			defaultOptions: {
				templateOptions: {
					 disabled: false,
					// imagePath: imagePath,
					// headline: headline,
					// formName: formName,
					// model: model,
					// fields: fields,
					// actions: actions
				}
			}
		});


	}

})();
