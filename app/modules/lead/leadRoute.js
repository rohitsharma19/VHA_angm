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
				//controller: 'LeadCtrl',
				//controllerAs: 'vm'
			})
			.state('home.lead.QuickCreate', {
				url:'/QuickCreate',
				templateUrl: 'app/modules/lead/lead_CRUD.html',
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
				templateUrl: 'app/modules/lead/lead_CRUD.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.edit', {
				url:'/edit',
				params: {lead: null},
				templateUrl: 'app/modules/lead/lead_CRUD.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.view', {
				url:'/view',
				params: {lead: null},
				templateUrl: 'app/modules/lead/lead_CRUD.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			})
			.state('home.lead.delete', {
				url:'/delete',
				params: {lead: null},
				templateUrl: 'app/modules/lead/lead_CRUD.html',
				controller: 'LeadCtrl',
				controllerAs: 'vm'
			});
	}]);
