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
			},

			inflateUiGrid: function(scopeVar) {
				new leadModel().getAll().then(
					function(response) {
						console.log("getAllLeads SUCCESS");
						console.log("data received");
						console.log(response.data);

						scopeVar.leadsList = response.data;
					},
					function(error) {
						console.log("getAllLeads ERROR : " + error.message);
					});
					return scopeVar;
		}
	};
		return parentModel;
	}

})();
