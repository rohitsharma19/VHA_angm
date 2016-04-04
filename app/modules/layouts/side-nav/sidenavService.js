(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('vha')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'lead.QuickCreate',
							name: 'Quick Lead Creation'
					},
					{
						link: 'lead.viewAll',
							name: 'Lead'
					},
			    
					{
						link: 'opportunity.viewAll',
							name: 'Opportunity'
					},
			    
					/*{
						link: 'recommendation',
							name: 'Recommendation'
					},*/
			    
					{
						link: 'quote.viewAll',
							name: 'Quote'
					},
			    
					{
						link: 'agreement.viewAll',
							name: 'Agreement'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
