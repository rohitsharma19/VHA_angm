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
		.factory('agreementModel', Agreement);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Agreement.$inject = ['$http', 'CONSTANTS'];

		function Agreement ($http, CONSTANTS) {

			var agreementModel = function(agreementData){
				if(agreementData){
					angular.extend(this,agreementData);
				}
			};

			agreementModel.prototype = {
				save: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Agreement';
					return $http.post(FINAL_URL,this);
				},
				get: function(agreementId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Agreement/' + agreementId;
					return $http.delete(FINAL_URL);
				},
				remove: function(agreementId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Agreement/' + agreementId;
					return $http.delete(FINAL_URL);
				},
				update: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Agreement/';
					return $http.put(FINAL_URL,this);
				},
				getAll: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Agreement';
					return $http.get(FINAL_URL);
				}
			};
			return agreementModel;
		}
})();
