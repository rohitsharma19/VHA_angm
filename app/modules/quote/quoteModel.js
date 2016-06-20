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
		.factory('quoteModel', Quote);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Quote.$inject = ['$http', 'CONSTANTS'];

		function Quote ($http, CONSTANTS) {

			var quoteModel = function(quoteData){
				if(quoteData){
					angular.extend(this,quoteData);
				}
			};

			quoteModel.prototype = {
				save: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Quote';
					return $http.post(FINAL_URL,this);
				},
				get: function(quoteId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Quote/' + quoteId;
					return $http.delete(FINAL_URL);
				},
				remove: function(quoteId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Quote/' + quoteId;
					return $http.delete(FINAL_URL);
				},
				update: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Quote/';
					return $http.put(FINAL_URL,this);
				},
				getAll: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Quote';
					return $http.get(FINAL_URL);
				}
			};
			return quoteModel;
		}
})();
