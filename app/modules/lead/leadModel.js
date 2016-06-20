(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:leadService
	 * @description
	 * # leadService
	 * Service of the app
	 */

  	angular
		.module('lead')
		.factory('leadModel', Lead);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Lead.$inject = ['$http', 'CONSTANTS'];

		function Lead ($http, CONSTANTS) {

			var leadModel = function(leadData){
				if(leadData){
					angular.extend(this,leadData);
				}
			};

			leadModel.prototype = {
				save: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Lead';
					return $http.post(FINAL_URL,this);
				},
				get: function(leadId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Lead/' + leadId;
					return $http.get(FINAL_URL);
				},
				remove: function(leadId){
					var FINAL_URL = CONSTANTS.REST_URL + 'Lead/' + leadId;
					return $http.delete(FINAL_URL);
				},
				update: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Lead/';
					return $http.put(FINAL_URL,this);
				},
				getAll: function(){
					var FINAL_URL = CONSTANTS.REST_URL + 'Lead';
					return $http.get(FINAL_URL);
				}
			};
			return leadModel;
		}
})();
