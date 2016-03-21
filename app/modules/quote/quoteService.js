(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:quoteService
	 * @description
	 * # quoteService
	 * Service of the app
	 */

  	angular
		.module('quote')
		.factory('QuoteService', Quote);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Quote.$inject = ['$http'];

		function Quote ($http) {

		}

})();
