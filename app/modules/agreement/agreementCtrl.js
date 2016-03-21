(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:agreementCtrl
	* @description
	* # agreementCtrl
	* Controller of the app
	*/

  	angular
		.module('agreement')
		.controller('AgreementCtrl', Agreement);

		Agreement.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Agreement($state) {
			/*jshint validthis: true */
			var vm = this;

			vm.saveAgreement = function(agreement){
				console.log("inside save Agreement method");
				$state.go("home.dashboard");
			};

		}

})();
