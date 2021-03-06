'use strict';

/**
 * @ngdoc function
 * @name app.route:agreementRoute
 * @description
 * # agreementRoute
 * Route of the app
 */

angular.module('agreement')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.agreement', {
				url:'/agreement',
				templateUrl: 'app/modules/agreement/agreement.html',
				// controller: 'AgreementCtrl',
				// controllerAs: 'vm'
			})
			.state('home.agreement.QuickCreate', {
				url:'/QuickCreate',
				params:{finalSelection:null, leadDetails:null, opportunityDetails:null, quoteDetails: null},
				templateUrl: 'app/modules/agreement/agreement_CRUD.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			.state('home.agreement.viewAll', {
				url:'/viewAll',
				templateUrl: 'app/modules/agreement/agreement_viewAll.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			.state('home.agreement.create', {
				url:'/create',
				templateUrl: 'app/modules/agreement/agreement_CRUD.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			.state('home.agreement.edit', {
				url:'/edit',
				params: {agreement: null},
				templateUrl: 'app/modules/agreement/agreement_CRUD.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			.state('home.agreement.view', {
				url:'/view',
				params: {agreement: null},
				templateUrl: 'app/modules/agreement/agreement_CRUD.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			.state('home.agreement.delete', {
				url:'/delete',
				params: {agreement: null},
				templateUrl: 'app/modules/agreement/agreement_CRUD.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			});
	}]);
