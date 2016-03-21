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
		.module('recommendation')
		.factory('RecommendationService', Recommendation);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Recommendation.$inject = ['$http'];

		function Recommendation ($http) {

		}

})();
