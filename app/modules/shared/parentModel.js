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
		.factory('parentModel', ParentModel );
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	ParentModel.$inject = ['leadModel','opportunityModel','quoteModel', 'agreementModel'];

	function ParentModel(leadModel, opportunityModel, quoteModel, agreementModel) {

		var parentModel = {

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
			}

		}
		return parentModel;
	}

})();
