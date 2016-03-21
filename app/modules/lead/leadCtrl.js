(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:leadCtrl
	* @description
	* # leadCtrl
	* Controller of the app
	*/

  	angular
		.module('lead')
		.controller('LeadCtrl', Lead);

		Lead.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Lead($state) {
			/*jshint validthis: true */
			var vm = this;

			vm.saveLead = function(lead){
				console.log("inside save lead method");
				$state.go("home.opportunityCreation");
			};

		}

})();
