(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:agreementService
	 * @description
	 * # agreementService
	 * Service of the app
	 */

  	angular
		.module('agreement')
		.factory('AgreementService', Agreement);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Agreement.$inject = ['$http'];

		function Agreement ($http) {

		}

})();
