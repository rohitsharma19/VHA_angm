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

	Quote.$inject = ['$state', '$stateParams', 'quoteManager', 'quoteSharedData', '$mdDialog', '$mdMedia', '$scope', 'parentModel', 'progressBarFactory', 'toastFactory', 'pageStructureFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Quote($state, $stateParams, quoteManager, quoteSharedData, $mdDialog, $mdMedia, $scope, parentModel, progressBarFactory, toastFactory, pageStructureFactory) {
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
		// Controller for the Dialog Box
		function opportunitySelectionDialogController($scope, $mdDialog, parentModel, quoteManager) {

			$scope.fields = vm.fields;
			$scope.opportunityList = [];

			$scope.checkVariable = "Here in Quote";
			parentModel.inflateOpportunityUiGrid($scope);

			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};

			$scope.selectOpportunity = function(row) {
				var opportunity = row.entity;
				parentModel.getLead(opportunity.leadId).then(
					function(response) {
						opportunity.leadDetails = response.data;
						vm.selectOpportunity(opportunity);
						$mdDialog.hide();
					},
					function(error) {
						console.log("parentModel.getLead ERROR");
						console.log(error.data);
					}
				);
			}

			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};

			$scope.vm = $scope;

		};



		if ($state.current.name === 'home.quote.viewAll') {

			console.log("VIEW ALL QUOTES");

			// vm = quoteManager.setUpUiGrid(vm);
			vm.quotesList = [];

			pageStructureFactory.getLayout('quote_viewAll')
				.then(
					function(response) {
						vm.quoteFields = response.data;
					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

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

				pageStructureFactory.getLayout('quote_CRUD')
					.then(
						function(response) {
							vm.quoteFields = response.data;
							vm.quote.self.quoteMode = "Create";
						},
						function(error) {
							alert("Oops! Something went wrong.\n Try reloading the page");
						});

				vm.selectOpportunity = function(opportunity) {
					vm.quote.self.opportunityId = opportunity.opportunityId;
					vm.quote.opportunityDetails = opportunity;
					vm.quote.leadDetails = opportunity.leadDetails;
				}

				vm.selectOpportunityDialog = function(ev) {
					$mdDialog.show({
						controller: opportunitySelectionDialogController,
						templateUrl: 'opportunitySelectDialogBox.html',
						parent: angular.element(document.body),
						clickOutsideToClose: true
					})
					vm.fields = JSON.parse(quoteSharedData.getLayout('opportunity_viewAll'));
				};


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

				pageStructureFactory.getLayout('quote_CRUD')
					.then(
						function(response) {
							vm.quoteFields = response.data;
							vm.quote.self.quoteMode = "QuickCreate";
						},
						function(error) {
							alert("Oops! Something went wrong.\n Try reloading the page");
						});


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

			pageStructureFactory.getLayout('quote_CRUD')
				.then(
					function(response) {
						vm.quoteFields = response.data;

						if ($stateParams.quote != null) {
							vm.quote = $stateParams.quote;
							vm.quote.self.quoteMode = "Update";
						}

					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

			vm.updateQuote = function(quote) {
				console.log("Inside updateQuote()");
				console.log(quote.self);
				quoteManager.updateQuote(quote);
			};
		}

		if ($state.current.name === 'home.quote.view') {
			console.log("VIEW QUOTE");

			pageStructureFactory.getLayout('quote_CRUD')
				.then(
					function(response) {
						vm.quoteFields = response.data;

						if ($stateParams.quote != null) {
							vm.quote = $stateParams.quote;
							vm.quote.self.quoteMode = "View";
						}
					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

		}

		if ($state.current.name === 'home.quote.delete') {
			console.log("DELETE QUOTE");

			pageStructureFactory.getLayout('quote_CRUD')
				.then(
					function(response) {
						vm.quoteFields = response.data;

						if ($stateParams.quote != null) {
							vm.quote = $stateParams.quote;
							vm.quote.self.quoteMode = "Delete";
						}
					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

			vm.deleteQuote = function(quote) {
				console.log("Inside deleteQuote()");
				console.log(quote);
				quoteManager.deleteQuote(quote.self.quoteId);
			};
		}
	}
})();
