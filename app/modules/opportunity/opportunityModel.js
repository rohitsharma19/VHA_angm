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
		.factory('opportunityModel', Opportunity);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Opportunity.$inject = ['$http', 'CONSTANTS'];

		function Opportunity ($http, CONSTANTS) {

			var opportunityModel = function (opportunityData){
				if(opportunityData){
					angular.extend(this,opportunityData);
				}
			};

			opportunityModel.prototype = {
				save: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Opportunity';
					return $http.post(FINAL_URL,this);
				},
				get: function(opportunityId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Opportunity/' + opportunityId;
					return $http.get(FINAL_URL);
				},
				remove: function(opportunityId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Opportunity/' + opportunityId;
					return $http.delete(FINAL_URL);
				},
				update: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Opportunity/';
					return $http.put(FINAL_URL,this);
				},
				getAll: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Opportunity';
					return $http.get(FINAL_URL);
				}
			};
			return opportunityModel;
		}
})();
