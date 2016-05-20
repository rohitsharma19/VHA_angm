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
			// .state('home.agreement.edit', {
			// 	url:'/edit',
			// 	templateUrl: 'app/modules/agreement/agreement_CRUD.html',
			// 	controller: 'AgreementCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.agreement.view', {
				url:'/view',
				templateUrl: 'app/modules/agreement/agreement_CRUD.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			// .state('home.agreement.delete', {
			// 	url:'/delete',
			// 	templateUrl: 'app/modules/agreement/agreement_CRUD.html',
			// 	controller: 'AgreementCtrl',
			// 	controllerAs: 'vm'
			// });
	}]);
