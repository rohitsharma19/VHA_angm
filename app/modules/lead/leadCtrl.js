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

	Lead.$inject = ['$state', '$stateParams', 'leadManager', 'leadSharedData', '$mdDialog', '$mdMedia', 'parentModel', 'progressBarFactory', 'toastFactory', 'pageStructureFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Lead($state, $stateParams, leadManager, leadSharedData, $mdDialog, $mdMedia, parentModel, progressBarFactory, toastFactory, pageStructureFactory) {

		var vm = this;

		vm.lead = {};
		vm.lead.contacts = [];
		vm.lead.tempContact = {};
		vm.lead.tempContact.addressList =[];

		function DialogController($scope, $mdDialog) {
			$scope.model = vm.lead;
			$scope.fields = vm.fields;
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.save = function(answer) {
				vm.createLead(vm.lead);
				$mdDialog.hide(answer);
			};
			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
		};

		if ($state.current.name === 'home.lead.viewAll') {

			console.log("VIEW ALL LEADS");
			vm.leadsList = [];

			pageStructureFactory.getLayout('lead_viewAll')
				.then(
					function(response) {
						vm.fields = response.data;
					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

			leadManager.inflateUiGrid(vm);

			vm.openViewLead = function(row) {
				console.log("Inside openViewLead");
				leadManager.openViewLead(row.entity.leadId);
			};

			vm.openEditLead = function(row) {
				console.log("Inside openEditLead");
				leadManager.openEditLead(row.entity.leadId);
			};

			vm.openDeleteLead = function(row) {
				console.log("Inside openDeleteLead");
				leadManager.openDeleteLead(row.entity.leadId);
			};

			vm.openCreateLead = function() {
				console.log("Inside openCreateLead");
				leadManager.openCreateLead();
			};
		}

		if (($state.current.name === 'home.lead.create') || ($state.current.name === 'home.lead.QuickCreate')) {

			if ($state.current.name === 'home.lead.QuickCreate') {
				console.log("CREATE QUICK LEAD");
				// vm.lead = {};
				pageStructureFactory.getLayout('lead_CRUD')
					.then(
						function(response) {
							vm.leadFields = response.data;
							vm.lead.leadMode = "QuickCreate";
							vm.lead.contactMode = "Create";
							vm.lead.addressMode = "Create";
						},
						function(error) {
							alert("Oops! Something went wrong.\n Try reloading the page");
						});

			} else if ($state.current.name === 'home.lead.create') {
				console.log("CREATE LEAD");

				// vm.lead = {};
				pageStructureFactory.getLayout('lead_CRUD')
					.then(
						function(response) {
							vm.leadFields = response.data;
							vm.lead.leadMode = "Create";
							vm.lead.contactMode = "Create";
							vm.lead.addressMode = "Create";
						},
						function(error) {
							alert("Oops! Something went wrong.\n Try reloading the page");
						});
			}

			vm.createLead = function(lead) {
				console.log("Inside createLead()");
				console.log(lead);
				leadManager.createLead(lead);
			};

			vm.addContact = function(lead) {
				console.log("Inside addContact()");
				if (vm.lead.contacts.indexOf(lead.tempContact) == -1) {
					vm.lead.contacts.push(lead.tempContact);
					vm.resetTempContact();
				}
			};

			vm.updateContact = function(lead) {
				vm.resetTempContact();
				vm.lead.contactMode = "Create";
				vm.lead.addressMode = "Create";
			};

			vm.addAddress = function(lead) {
				console.log("Inside addAddress()");
				if (vm.lead.tempContact.addressList.indexOf(lead.tempContact.tempAddress) == -1) {
					vm.lead.tempContact.addressList.push(lead.tempContact.tempAddress);
					vm.resetTempAddress();
				}
			};

			vm.updateAddress = function(lead) {
				vm.resetTempAddress();
				vm.lead.contactMode = "Create";
				vm.lead.addressMode = "Create";
			}

			vm.confirmDetails = function(lead) {
				console.log("Inside confirmDetails()");
				$mdDialog.show({
					controller: DialogController,
					templateUrl: 'dialogueBox.html',
					parent: angular.element(document.body),
					clickOutsideToClose: true
				})
				vm.fields = JSON.parse(leadSharedData.getLayout('SummaryDialog'));
			};
		}

		vm.setTempContact = function(contact) {
			vm.lead.tempContact = contact;
			vm.lead.contactMode = "Update";
		}

		vm.resetTempContact = function() {
			vm.resetTempAddress();
			for (var key in vm.lead.tempContact) {
				if (key != "$$hashKey" && key!="tempAddress" && key!="addressList") {
					var fieldID = document.querySelector('[ng-model="model.tempContact.' + key + '"]').id;
					vm.leadFields[1].form[fieldID].$setUntouched();
					vm.leadFields[1].form[fieldID].$setPristine();
				}
			}
			vm.lead.tempContact = {};

			if (vm.lead.contactMode == "Update")
				vm.lead.contactMode = "Create";
		}

		vm.setTempAddress = function(address) {
			vm.lead.tempContact.tempAddress = address;
			vm.lead.addressMode = "Update";
		}

		vm.resetTempAddress = function() {
			for (var key in vm.lead.tempContact.tempAddress) {
				if (key != "$$hashKey") {
					var fieldID = document.querySelector('[ng-model="model.tempContact.tempAddress.' + key + '"]').id;
					vm.leadFields[1].form[fieldID].$setUntouched();
					vm.leadFields[1].form[fieldID].$setPristine();
				}
			}
			vm.lead.tempContact.tempAddress = {};

			if (vm.lead.addressMode == "Update")
				vm.lead.addressMode = "Create";
		}


		if ($state.current.name === 'home.lead.edit') {
			console.log("EDIT LEAD");

			vm.lead = {};
			pageStructureFactory.getLayout('lead_CRUD')
				.then(
					function(response) {
						vm.leadFields = response.data;
						vm.lead.leadMode = "QuickCreate";
						vm.lead.contactMode = "Create";
						vm.lead.addressMode = "Create";

						if ($stateParams.lead != null) {
							console.log("$stateParams.lead");
							console.log($stateParams.lead);
							vm.lead = $stateParams.lead;
							vm.lead.leadMode = "Update";
						}

					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

			vm.updateLead = function(lead) {
				console.log("Inside updateLead()");
				console.log(lead);
				leadManager.updateLead(lead);
			};
		}

		if ($state.current.name === 'home.lead.view') {
			console.log("VIEW LEAD");

			vm.lead = {};
			pageStructureFactory.getLayout('lead_CRUD')
				.then(
					function(response) {
						vm.leadFields = response.data;
						vm.lead.leadMode = "QuickCreate";
						vm.lead.contactMode = "Create";
						vm.lead.addressMode = "Create";

						if ($stateParams.lead != null) {
							console.log("$stateParams.lead");
							console.log($stateParams.lead);
							vm.lead = $stateParams.lead;
							vm.lead.leadMode = "View";
						}
					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

		}

		if ($state.current.name === 'home.lead.delete') {
			console.log("DELETE LEAD");

			vm.lead = {};
			pageStructureFactory.getLayout('lead_CRUD')
				.then(
					function(response) {
						vm.leadFields = response.data;
						vm.lead.leadMode = "QuickCreate";
						vm.lead.contactMode = "Create";
						vm.lead.addressMode = "Create";

						if ($stateParams.lead != null) {
							console.log("$stateParams.lead");
							console.log($stateParams.lead);
							vm.lead = $stateParams.lead;
							vm.lead.leadMode = "Delete";
						}

					},
					function(error) {
						alert("Oops! Something went wrong.\n Try reloading the page");
					});

			vm.deleteLead = function(lead) {
				console.log("Inside deleteLead()");
				console.log(lead);
				leadManager.deleteLead(lead.leadId);
			};
		}
	}
})();
