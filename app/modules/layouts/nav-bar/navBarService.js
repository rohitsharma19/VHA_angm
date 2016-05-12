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
						link: 'lead',
							name: 'Lead'
					},

					{
						link: 'opportunity',
							name: 'Opportunity'
					},

					{
						link: 'recommendation',
							name: 'Recommendation'
					},

					{
						link: 'quote',
							name: 'Quote'
					},

					{
						link: 'agreement',
							name: 'Agreement'
					},

		  	];

			return {
				listMenu: function () {
					return menu;
				}
			};

		}

})();
