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
				// controller: 'OpportunityCtrl',
				// controllerAs: 'vm'
			})
			.state('home.opportunity.QuickCreate', {
				url:'/QuickCreate',
				params: {leadDetails: null},
				templateUrl: 'app/modules/opportunity/opportunity_CRUD.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			})
			.state('home.opportunity.viewAll', {
				url:'/viewAll',
				templateUrl: 'app/modules/opportunity/opportunity_viewAll.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			})
			.state('home.opportunity.create', {
				url:'/create',
				templateUrl: 'app/modules/opportunity/opportunity_CRUD.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			})
			.state('home.opportunity.edit', {
				url:'/edit',
				params: {opportunity: null},
				templateUrl: 'app/modules/opportunity/opportunity_CRUD.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			})
			.state('home.opportunity.view', {
				url:'/view',
				params: {opportunity: null},
				templateUrl: 'app/modules/opportunity/opportunity_CRUD.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			})
			.state('home.opportunity.delete', {
				url:'/delete',
				params: {opportunity: null},
				templateUrl: 'app/modules/opportunity/opportunity_CRUD.html',
				controller: 'OpportunityCtrl',
				controllerAs: 'vm'
			});
	}]);
