'use strict';

/**
 * @ngdoc function
 * @name app.route:quoteRoute
 * @description
 * # quoteRoute
 * Route of the app
 */

angular.module('quote')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.quote', {
				url:'/quote',
				templateUrl: 'app/modules/quote/quote.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			})
			.state('home.quoteCreation', {
				url:'/quickLead',
				templateUrl: 'app/modules/quote/quoteCreation.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			});

		
	}]);
