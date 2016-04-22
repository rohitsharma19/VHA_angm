(function () {
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

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider','$mdThemingProvider'];

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

	function runBlock($rootScope,formlyConfig) {
		'use strict';
		console.log('AngularJS run() function...');

		formlyConfig.setType({
			name:'test',
			template:'<h1>Hello</h1>'
		});

		formlyConfig.setType({
			name:'test1',
			templateUrl:'test1.html'
		});

		formlyConfig.setType({
			name:'tabs',
			templateUrl:'tabs.html'
		});

	}

})();
