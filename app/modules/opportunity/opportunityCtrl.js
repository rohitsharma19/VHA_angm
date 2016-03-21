(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:opportunityCtrl
	* @description
	* # opportunityCtrl
	* Controller of the app
	*/

  	angular
		.module('opportunity')
		.controller('OpportunityCtrl', Opportunity);

		Opportunity.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Opportunity($state) {
			/*jshint validthis: true */
			var vm = this;

			vm.saveOpportunity = function(opportunity){
				console.log("inside save Opportunity method");
				$state.go("home.recommendationCreation");
			};

		}

})();
