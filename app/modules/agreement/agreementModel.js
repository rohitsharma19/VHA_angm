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

		Agreement.$inject = ['$http'];

		function Agreement ($http) {

			var agreementModel = function(agreementData){
				if(agreementData){
					angular.extend(this,agreementData);
				}
			};

			agreementModel.prototype = {
				save: function(){
					// return $http.post("http://125.20.35.91/VHAMW/webapi/Agreement",this);
					return $http.post("http://192.168.100.16:8080/VHAMW/webapi/Agreement",this);
				},
				get: function(agreementId){
					// return $http.get("http://125.20.35.91/VHAMW/webapi/Agreement/"+agreementId);
					return $http.get("http://192.168.100.16:8080/VHAMW/webapi/Agreement/"+agreementId);
				},
				remove: function(agreementId){
					// return $http.delete("http://125.20.35.91/VHAMW/webapi/Agreement/"+agreementId);
					return $http.delete("http://192.168.100.16:8080/VHAMW/webapi/Agreement/"+agreementId);
				},
				update: function(){
					// return $http.put("http://125.20.35.91/VHAMW/webapi/Agreement/",this);
					return $http.put("http://192.168.100.16:8080/VHAMW/webapi/Agreement/",this);
				},
				getAll: function(){
					// return $http.get("http://125.20.35.91/VHAMW/webapi/Agreement");
					return $http.get("http://192.168.100.16:8080/VHAMW/webapi/Agreement");
				}
			};
			return agreementModel;
		}
})();
