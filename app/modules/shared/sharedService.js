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

		Shared.$inject = ['leadManager'];

		function Shared (leadManager) {

			var sharedService = {

				getLead: function(leadId) {
					return leadManager.getLead(leadId);
				},
				getOpportunity: function(opportunityId) {
					return opportunityManager.getOpportunity(opportunityId);
				},

				getQuote: function(quoteId) {
					return quoteManager.getQuote(quoteId);
				},

				getAgreement: function(agreementId) {
					return agreementManager.getAgreement(agreementId);
				}
		}
		return sharedService;
	}

})();
