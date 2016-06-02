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
		.factory('toastFactory', ToastFactory);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	function ToastFactory($mdToast) {

		var parentModel = {
			openSuccessToast: function(message) {
				$mdToast.show(
					$mdToast.simple()
					.textContent(message)
					.position('top center')
				);
			}
		}
		return parentModel;
	}

})();
