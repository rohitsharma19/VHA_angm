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
		.factory('pageStructureFactory', PageStructureFactory);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	PageStructureFactory.$inject = ['$http'];

	function PageStructureFactory($http) {

		var pageStructureFactory = {

			getLayout: function(view) {
				if (view === 'lead_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/leadCRUD.json');
				} else if (view === 'lead_viewAll') {
					return $http.get('app/modules/shared/pageStructureJSON/leadViewAll.json');
				} else if (view === 'opportunity_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/opportunityCRUD.json');
				} else if (view === 'opportunity_viewAll') {
					return $http.get('app/modules/shared/pageStructureJSON/opportunityViewAll.json');
				} else if (view === 'recommendation_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/recommendation.json');
				} else if (view === 'quote_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/quoteCRUD.json');
				} else if (view === 'quote_viewAll') {
					return $http.get('app/modules/shared/pageStructureJSON/quoteViewAll.json');
				} else if (view === 'agreement_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/agreementCRUD.json');
				} else if (view === 'agreement_viewAll') {
					return $http.get('app/modules/shared/pageStructureJSON/agreementViewAll.json');
				}
			}

		}
		return pageStructureFactory;
	}

})();
