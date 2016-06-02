(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:recommendationService
	 * @description
	 * # recommendationService
	 * Service of the app
	 */

	angular
		.module('shared')
		.factory('progressBarFactory', ProgressBarFactory);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	ProgressBarFactory.$inject = ['$rootScope'];

	function ProgressBarFactory($rootScope) {

		var progressBarFactory = {

			showProgressBar: function() {
				$rootScope.showProgressBar = true;
			},

			hideProgressBar: function() {
				$rootScope.showProgressBar = false;
			}

		}
		return progressBarFactory;
	}

})();
