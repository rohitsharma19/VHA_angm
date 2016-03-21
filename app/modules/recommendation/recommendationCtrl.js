(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:recommendationCtrl
	* @description
	* # recommendationCtrl
	* Controller of the app
	*/

  	angular
		.module('recommendation')
		.controller('RecommendationCtrl', Recommendation);

		Recommendation.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Recommendation($state) {
			/*jshint validthis: true */
			var vm = this;

			vm.saveRecommendation = function(recommendation){
				console.log("inside save Recommendation method");
				$state.go("home.quoteCreation");
			};

		}

})();
