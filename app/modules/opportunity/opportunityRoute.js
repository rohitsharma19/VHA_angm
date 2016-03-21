'use strict';

/**
 * @ngdoc function
 * @name app.route:opportunityRoute
 * @description
 * # opportunityRoute
 * Route of the app
 */

angular.module('opportunity')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.opportunity', {
				url:'/opportunity',
				templateUrl: 'app/modules/opportunity/opportunity.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			})
			.state('home.opportunityCreation', {
				url:'/quickLead',
				templateUrl: 'app/modules/opportunity/opportunityCreation.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			});;

		
	}]);
