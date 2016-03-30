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

			//var leadMode = null;
			var leadSharedData = null;

			return{
				/*setLeadMode : function(mode){
					leadMode = mode;
				},
				getLeadMode : function(){
					return leadMode;
				},
				resetLeadMode : function(){
					leadMode = null;
				},*/
				setLead : function(leadData){
					leadSharedData = leadData;
				},
				getLead : function(){
					return leadSharedData;
				},
				resetLead : function(){
					leadSharedData = null;
				} 
			}
		}
})();
