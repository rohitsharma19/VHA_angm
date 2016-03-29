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
			})
			.state('home.lead.viewAll', {
				url:'/viewAll',
				templateUrl: 'app/modules/lead/lead_viewAll.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.create', {
				url:'/create',
				templateUrl: 'app/modules/lead/lead_create.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.edit', {
				url:'/edit',
				templateUrl: 'app/modules/lead/lead_edit.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.view', {
				url:'/view',
				templateUrl: 'app/modules/lead/lead_view.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.delete', {
				url:'/delete',
				templateUrl: 'app/modules/lead/lead_delete.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			});

		
	}]);
