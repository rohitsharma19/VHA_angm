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

	Recommendation.$inject = ['$state', 'recommendationSharedData'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Recommendation($state, recommendationSharedData) {
		/*jshint validthis: true */
		var vm = this;

		vm.selectedItem = {
			Offer: [],
			Device: []
		};

		vm.recommendation = {
			"Offer": JSON.parse(recommendationSharedData.getLayout('Offers')),
			"Device": JSON.parse(recommendationSharedData.getLayout('Devices')),
			"selectedItem": { Offer: [], Device: [] },
			"finalSelection": { Offers: [], Devices: [] }
		};

		vm.recommendationFields = JSON.parse(recommendationSharedData.getLayout('recommendation_CRUD'));

		vm.addOfferToFinal = function(object) {
			console.log("Inside addOfferToFinal");

			if (vm.recommendation.finalSelection.Offers.indexOf(object) == -1)
				vm.recommendation.finalSelection.Offers.push(object);
		}

		vm.selectOfferForDetail = function(object) {
			console.log("Inside selectOfferForDetail");
			vm.recommendation.selectedItem.Offer.pop();
			vm.recommendation.selectedItem.Offer.push(object);
		}

		vm.addDeviceToFinal = function(object) {
			console.log("Inside addDeviceToFinal");
			if (vm.recommendation.finalSelection.Devices.indexOf(object) == -1)
				vm.recommendation.finalSelection.Devices.push(object);
		}

		vm.selectDeviceForDetail = function(object) {
			console.log("Inside selectDeviceForDetail");
			vm.recommendation.selectedItem.Device.pop();
			vm.recommendation.selectedItem.Device.push(object);
		}

		vm.saveRecommendation = function(recommendation) {
			console.log("inside save Recommendation method");
			$state.go("home.quote.QuickCreate", {finalSelection:recommendation.finalSelection});
		};

		vm.resetQuantity = function(object) {
			console.log("Inside resetQuantity");
			object.quantity = "";
		}

	}

})();
