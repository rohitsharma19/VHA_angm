'use strict';

/**
 * @ngdoc function
 * @name app.route:recommendationRoute
 * @description
 * # recommendationRoute
 * Route of the app
 */

angular.module('recommendation')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.recommendation', {
				url:'/recommendation',
				templateUrl: 'app/modules/recommendation/recommendation.html',
				controller: 'RecommendationCtrl',
				controllerAs: 'vm'
			})
			.state('home.recommendation.QuickCreate', {
				url: '/QuickCreate',
				params: {finalSelection: null, leadDetails: null, opportunityDetails: null},
				templateUrl: 'app/modules/recommendation/recommendationCreation.html',
				controller: 'RecommendationCtrl',
				controllerAs: 'vm'
			})
			.state('home.recommendationCreation', {
				url:'/quickLead',
				templateUrl: 'app/modules/recommendation/recommendationCreation.html',
				controller: 'RecommendationCtrl',
				controllerAs: 'vm'
			});


	}]);
