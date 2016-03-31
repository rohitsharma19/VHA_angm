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
			.state('home.quickquote', {
				url:'/quickquote',
				templateUrl: 'app/modules/quote/quoteCreation.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			})
			.state('home.quote.viewAll', {
				url:'/viewAll',
				templateUrl: 'app/modules/quote/quote_viewAll.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			})
			.state('home.quote.create', {
				url:'/create',
				templateUrl: 'app/modules/quote/quote_CRUD.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			})
			.state('home.quote.edit', {
				url:'/edit',
				templateUrl: 'app/modules/quote/quote_CRUD.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			})
			.state('home.quote.view', {
				url:'/view',
				templateUrl: 'app/modules/quote/quote_CRUD.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			})
			.state('home.quote.delete', {
				url:'/delete',
				templateUrl: 'app/modules/quote/quote_CRUD.html',
				controller: 'QuoteCtrl',
				controllerAs: 'vm'
			});
	}]);
