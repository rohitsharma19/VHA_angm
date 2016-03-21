(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:quoteCtrl
	* @description
	* # quoteCtrl
	* Controller of the app
	*/

  	angular
		.module('quote')
		.controller('QuoteCtrl', Quote);

		Quote.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Quote($state) {
			/*jshint validthis: true */
			var vm = this;

			vm.saveQuote = function(quote){
				console.log("inside save Quote method");
				$state.go("home.agreementCreation");
			};

		}

})();
