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
		.factory('agreementSharedData', Agreement);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Agreement.$inject = ['$http'];

		function Agreement ($http) {

			//var agreementMode = null;
			var agreementSharedData = null;

			return{
				/*setAgreementMode : function(mode){
					agreementMode = mode;
				},
				getAgreementMode : function(){
					return agreementMode;
				},
				resetAgreementMode : function(){
					agreementMode = null;
				},*/
				setAgreement : function(agreementData){
					agreementSharedData = agreementData;
				},
				getAgreement : function(){
					return agreementSharedData;
				},
				resetAgreement : function(){
					agreementSharedData = null;
				}
			};
		}
})();
