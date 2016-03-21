(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:opportunityService
	 * @description
	 * # opportunityService
	 * Service of the app
	 */

  	angular
		.module('opportunity')
		.factory('OpportunityService', Opportunity);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Opportunity.$inject = ['$http'];

		function Opportunity ($http) {

		}

})();
