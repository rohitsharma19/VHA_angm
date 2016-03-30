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

		Lead.$inject = ['$http'];

		function Lead ($http) {

			var leadModel = function(leadData){
				if(leadData){
					angular.extend(this,leadData);
				}
			};
			
			leadModel.prototype = {
				save: function(){
					return $http.post("http://203.200.67.15/VHAMW/webapi/Lead",this);
				},
				get: function(leadId){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Lead/"+leadId);
				},
				remove: function(leadId){
					return $http.delete("http://203.200.67.15/VHAMW/webapi/Lead/"+leadId);
				},
				update: function(){
					return $http.put("http://203.200.67.15/VHAMW/webapi/Lead/",this);
				}
			};
			return leadModel;
		}
})();