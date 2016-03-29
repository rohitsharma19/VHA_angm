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
		.factory('leadSharedData', Lead);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Lead.$inject = ['$http'];

		function Lead ($http) {

			var leadSharedData = null;

			return{
				set : function(leadData){
					leadSharedData = leadData;
				},
				get : function(){
					return leadSharedData;
				},
				reset : function(){
					leadSharedData = null;
				} 
			}

		}

})();
