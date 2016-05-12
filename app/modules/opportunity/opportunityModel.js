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
					return $http.post("http://203.200.67.15/VHAMW/webapi/Opportunity",this);
				},
				get: function(opportunityId){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Opportunity/"+opportunityId);
				},
				remove: function(opportunityId){
					return $http.delete("http://203.200.67.15/VHAMW/webapi/Opportunity/"+opportunityId);
				},
				update: function(){
					return $http.put("http://203.200.67.15/VHAMW/webapi/Opportunity/",this);
				},
				getAll: function(){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Opportunity");
				}
			};
			return opportunityModel;
		}
})();
