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
							name: 'Quick Lead Creation',
							icon: 'style'
					},
					{
						link: 'lead.viewAll',
							name: 'Lead',
							icon: 'supervisor_account'
					},

					{
						link: 'opportunity.viewAll',
							name: 'Opportunity',
							icon: 'business'
					},

					/*{
						link: 'recommendation',
							name: 'Recommendation'
					},*/

					{
						link: 'quote.viewAll',
							name: 'Quote',
							icon: 'storage'
					},

					{
						link: 'agreement.viewAll',
							name: 'Agreement',
							icon: 'work'
					},

		  	];

			return {
				listMenu: function () {
					return menu;
				}
			};

		}

})();
