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
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			})
			.state('home.agreementCreation', {
				url:'/quickLead',
				templateUrl: 'app/modules/agreement/agreementCreation.html',
				controller: 'AgreementCtrl',
				controllerAs: 'vm'
			});

		
	}]);
