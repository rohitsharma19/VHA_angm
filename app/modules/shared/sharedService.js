(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:recommendationService
	 * @description
	 * # recommendationService
	 * Service of the app
	 */

	angular
		.module('shared')
		.factory('sharedService', Shared);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Shared.$inject = ['leadModel', '$rootScope'];

	function Shared(leadModel, $rootScope) {

		var sharedService = {

			getLead: function(leadId) {
				return new leadModel().get(leadId);
			},
			// getOpportunity: function(opportunityId) {
			// 	return opportunityManager.getOpportunity(opportunityId);
			// },
			//
			// getQuote: function(quoteId) {
			// 	return quoteManager.getQuote(quoteId);
			// },
			//
			// getAgreement: function(agreementId) {
			// 	return agreementManager.getAgreement(agreementId);
			// },

			showProgressBar: function() {
				$rootScope.showProgressBar = true;
			},

			hideProgressBar: function() {
				$rootScope.showProgressBar = false;
			}

		}
		return sharedService;
	}

})();
