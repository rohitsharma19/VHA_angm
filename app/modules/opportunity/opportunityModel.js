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

		Opportunity.$inject = ['$http'];

		function Opportunity ($http) {

			var opportunityModel = function (opportunityData){
				if(opportunityData){
					angular.extend(this,opportunityData);
				}
			};

			opportunityModel.prototype = {
				save: function(){
					// return $http.post("http://125.20.35.91/VHAMW/webapi/Opportunity",this);
					return $http.post("http://192.168.100.16:8080/VHAMW/webapi/Opportunity",this);
				},
				get: function(opportunityId){
					// return $http.get("http://125.20.35.91/VHAMW/webapi/Opportunity/"+opportunityId);
					return $http.get("http://192.168.100.16:8080/VHAMW/webapi/Opportunity/"+opportunityId);
				},
				remove: function(opportunityId){
					// return $http.delete("http://125.20.35.91/VHAMW/webapi/Opportunity/"+opportunityId);
					return $http.delete("http://192.168.100.16:8080/VHAMW/webapi/Opportunity/"+opportunityId);
				},
				update: function(){
					// return $http.put("http://125.20.35.91/VHAMW/webapi/Opportunity/",this);
					return $http.put("http://192.168.100.16:8080/VHAMW/webapi/Opportunity/",this);
				},
				getAll: function(){
					// return $http.get("http://125.20.35.91/VHAMW/webapi/Opportunity");
					return $http.get("http://192.168.100.16:8080/VHAMW/webapi/Opportunity");
				}
			};
			return opportunityModel;
		}
})();
