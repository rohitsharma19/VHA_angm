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
			name: 'progressTracker',
			templateUrl: 'progressTracker.html'
		});

		formlyConfig.setWrapper({
			name: 'card',
			template: [
				'<md-card>\
					<img ng-src="{{to.card.imagePath}}" class="md-card-image">\
					<md-card-title>\
						<md-card-title-text>\
							<span class="md-headline">{{to.card.headline}}</span>\
						</md-card-title-text>\
					</md-card-title>\
					<md-card-content>\
						<formly-transclude></formly-transclude>\
					</md-card-content>\
					<md-card-actions layout="row" layout-align="center">\
					<md-button ng-repeat="action in to.card.actions" class={{action.class}} ng-click="">{{action.label}}</md-button>\
					</md-card-actions>\
				</md-card>'
			].join(' ')
		});

		formlyConfig.setType({
			name: 'card_tabset',
			extends: 'tabset',
			wrapper: ['card']
		});

		formlyConfig.setType({
			name: 'card_progressTracker',
			extends: 'progressTracker',
			wrapper: ['card']
		});

	}

})();
