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

	Shared.$inject = ['leadModel','opportunityModel','quoteModel', 'agreementModel', '$rootScope'];

	function Shared(leadModel, opportunityModel, quoteModel, agreementModel, $rootScope) {

		var sharedService = {

			getLead: function(leadId) {
				return new leadModel().get(leadId);
			},

			getOpportunity: function(opportunityId) {
				return new opportunityModel().get(opportunityId);
			},

			getQuote: function(quoteId) {
				return new quoteModel().get(quoteId);
			},

			getAgreement: function(agreementId) {
				return new agreementModel().get(agreementId);
			},

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
