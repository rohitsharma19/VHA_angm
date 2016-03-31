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
		.factory('opportunitySharedData', Opportunity);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Opportunity.$inject = ['$http'];

		function Opportunity ($http) {

			//var opportunityMode = null;
			var opportunitySharedData = null;

			return{
				/*setOpportunityMode : function(mode){
					opportunityMode = mode;
				},
				getOpportunityMode : function(){
					return opportunityMode;
				},
				resetOpportunityMode : function(){
					opportunityMode = null;
				},*/
				setOpportunity : function(opportunityData){
					opportunitySharedData = opportunityData;
				},
				getOpportunity : function(){
					return opportunitySharedData;
				},
				resetOpportunity : function(){
					opportunitySharedData = null;
				} 
			}
		}
})();
