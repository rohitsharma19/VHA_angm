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
					return $http.post("http://203.200.67.15/VHAMW/webapi/Agreement",this);
				},
				get: function(agreementId){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Agreement/"+agreementId);
				},
				remove: function(agreementId){
					return $http.delete("http://203.200.67.15/VHAMW/webapi/Agreement/"+agreementId);
				},
				update: function(){
					return $http.put("http://203.200.67.15/VHAMW/webapi/Agreement/",this);
				},
				getAll: function(){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Agreement");
				}
			};
			return agreementModel;
		}
})();
