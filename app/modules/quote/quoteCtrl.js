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

	Quote.$inject = ['$state', '$stateParams', 'quoteManager', 'quoteSharedData', 'parentModel', 'progressBarFactory', 'toastFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Quote($state, $stateParams, quoteManager, quoteSharedData, parentModel, progressBarFactory, toastFactory) {
		/*jshint validthis: true */
		var vm = this;

		vm.quote = {
			"Offer": JSON.parse(quoteSharedData.getLayout('Offers')),
			"Device": JSON.parse(quoteSharedData.getLayout('Devices')),
			"selectedItem": {
				Offer_Device: []
			},
			"finalSelection": {
				Offer_Devices: []
			},
			"self": {}
		};

		if ($state.current.name === 'home.quote.viewAll') {

			console.log("VIEW ALL QUOTES");

			// vm = quoteManager.setUpUiGrid(vm);
			vm.quotesList = [];

			vm.quoteFields = JSON.parse(quoteSharedData.getLayout('quote_viewAll'));
			quoteManager.inflateUiGrid(vm);


			vm.openViewQuote = function(row) {
				console.log("Inside openViewQuote");
				quoteManager.openViewQuote(row.entity.quoteId);
			};

			vm.openEditQuote = function(row) {
				console.log("inside openEditQuote");
				quoteManager.openEditQuote(row.entity.quoteId);
			};

			vm.openDeleteQuote = function(row) {
				console.log("inside openDeleteQuote");
				quoteManager.openDeleteQuote(row.entity.quoteId);
			};

			vm.openCreateQuote = function() {
				console.log("inside openCreateQuote");
				quoteManager.openCreateQuote();
			};
		}

		if (($state.current.name === 'home.quote.create') || ($state.current.name === 'home.quote.QuickCreate')) {


			vm.calculateGrandTotal = function() {
				vm.quote.self.discountedPrice = 0;
				angular.forEach(vm.quote.finalSelection.Offer_Devices, function(object) {
					vm.quote.self.discountedPrice = vm.quote.self.discountedPrice + object.total;
				})
			}

			if ($state.current.name === 'home.quote.create') {
				console.log("CREATE QUOTE");

				vm.quote.self.quoteMode = "QuickCreate";
				vm.quoteFields = JSON.parse(quoteSharedData.getLayout('quote_CRUD'));

			} else if ($state.current.name === 'home.quote.QuickCreate') {
				console.log("CREATE QUICK QUOTE");

				if ($stateParams.finalSelection != null) {
					vm.temp = $stateParams.finalSelection;
					vm.quote.finalSelection.Offer_Devices = vm.temp.Offers.concat(vm.temp.Devices);

					angular.forEach(vm.quote.finalSelection.Offer_Devices, function(object) {
						object.total = object.price * object.quantity;
					});
					vm.calculateGrandTotal();
				}

				if ($stateParams.leadDetails != null)
					vm.quote.leadDetails = $stateParams.leadDetails;

				if ($stateParams.opportunityDetails != null) {
					vm.quote.opportunityDetails = $stateParams.opportunityDetails;
					vm.quote.self.opportunityId = $stateParams.opportunityDetails.opportunityId;
				}

				vm.quote.self.quoteMode = "QuickCreate";
				vm.quoteFields = JSON.parse(quoteSharedData.getLayout('quote_CRUD'));
				console.log("vm.quote");
				console.log(vm.quote);
			}

			vm.selectOfferForDetail = function(object) {
				console.log("Inside selectOfferForDetail");
				vm.quote.selectedItem.Offer_Device.pop();
				vm.quote.selectedItem.Offer_Device.push(object);
			}

			vm.addOffer_DeviceToFinal = function(object) {
				console.log("Inside addOffer_DeviceToFinal");
				if (vm.quote.finalSelection.Offer_Devices.indexOf(object) == -1) {
					object.total = object.price * object.quantity;
					vm.quote.finalSelection.Offer_Devices.push(object);
					vm.calculateGrandTotal();
				}
			}

			vm.selectDeviceForDetail = function(object) {
				console.log("Inside selectDeviceForDetail");
				vm.quote.selectedItem.Offer_Device.pop();
				vm.quote.selectedItem.Offer_Device.push(object);
			}

			vm.resetQuantity = function(object) {
				console.log("Inside resetQuantity");
				object.quantity = "";
			}

			vm.reCalculateTotal = function(object) {
				console.log("Inside reCalculateTotal");
				object.total = ((100 - object.discount) / 100) * object.price * object.quantity;
				vm.calculateGrandTotal();
			}

			vm.createQuote = function(quote) {
				console.log("Inside createQuote().");
				console.log(quote);
				quoteManager.createQuote(quote);
			};

		}

		if ($state.current.name === 'home.quote.edit') {
			console.log("EDIT QUOTE");

			if ($stateParams.quote != null) {
				vm.quote = $stateParams.quote;
				vm.quote.self.quoteMode = "Update";
			}

			vm.quoteFields = JSON.parse(quoteSharedData.getLayout('quote_CRUD'));

			vm.updateQuote = function(quote) {
				console.log("Inside updateQuote()");
				console.log(quote.self);
				quoteManager.updateQuote(quote);
			};
		}

		if ($state.current.name === 'home.quote.view') {
			console.log("VIEW QUOTE");

			if ($stateParams.quote != null) {
				vm.quote = $stateParams.quote;
				vm.quote.self.quoteMode = "View";
			}

			vm.quoteFields = JSON.parse(quoteSharedData.getLayout('quote_CRUD'));
		}

		if ($state.current.name === 'home.quote.delete') {
			console.log("DELETE QUOTE");

			if ($stateParams.quote != null) {
				vm.quote = $stateParams.quote;
				vm.quote.self.quoteMode = "Delete";
			}

			vm.quoteFields = JSON.parse(quoteSharedData.getLayout('quote_CRUD'));

			vm.deleteQuote = function(quote) {
				console.log("Inside deleteQuote()");
				console.log(quote);
				quoteManager.deleteQuote(quote.self.quoteId);
			};
		}
	}
})();
