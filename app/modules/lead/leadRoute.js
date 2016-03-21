'use strict';

/**
 * @ngdoc function
 * @name app.route:leadRoute
 * @description
 * # leadRoute
 * Route of the app
 */

angular.module('lead')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.lead', {
				url:'/lead',
				templateUrl: 'app/modules/lead/lead.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.quickLead', {
				url:'/quickLead',
				templateUrl: 'app/modules/lead/leadCreation.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			});

		
	}]);
