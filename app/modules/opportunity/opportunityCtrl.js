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

	Opportunity.$inject = ['$state', '$stateParams', 'opportunityManager', 'opportunitySharedData', '$mdDialog', '$mdMedia', 'parentModel', 'progressBarFactory', 'toastFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function Opportunity($state, $stateParams, opportunityManager, opportunitySharedData, $mdDialog, $mdMedia, parentModel, progressBarFactory, toastFactory) {

		/*jshint validthis: true */

		var vm = this;
		vm.opportunity = {
			self: {}
		};
		vm.opportunity.self.contacts = [];

		/*** Dialog box controllers***/
		function leadSelectionDialogController($scope, $mdDialog, parentModel, opportunityManager) {
			$scope.fields = vm.fields;
			$scope.leadsList = [];

			$scope.checkVariable = "Here";
			parentModel.inflateUiGrid($scope);
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.selectLead = function(row) {
				vm.selectLead(row.entity);
				$mdDialog.hide();
			}
			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
			$scope.vm = $scope;
		};

		function confirmationDialogController($scope, $mdDialog) {
			$scope.model = vm.opportunity.self;
			$scope.fields = vm.fields;
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.save = function(answer) {
				vm.createOpportunity(vm.opportunity);
				$mdDialog.hide(answer);
			};
			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
		}


		if ($state.current.name === 'home.opportunity.viewAll') {

			console.log("VIEW ALL OPPORTUNITIES");

			vm.opportunitiesList = [];

			vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_viewAll'));
			opportunityManager.inflateUiGrid(vm);

			vm.openViewOpportunity = function(row) {
				console.log("Inside openViewOpportunity");
				opportunityManager.openViewOpportunity(row.entity.opportunityId);
			};

			vm.openEditOpportunity = function(row) {
				console.log("Inside openEditOpportunity");
				opportunityManager.openEditOpportunity(row.entity.opportunityId);
			};

			vm.openDeleteOpportunity = function(row) {
				console.log("Inside openDeleteOpportunity");
				opportunityManager.openDeleteOpportunity(row.entity.opportunityId);
			};

			vm.openCreateOpportunity = function() {
				console.log("Inside openCreateOpportunity");
				opportunityManager.openCreateOpportunity();
			};
		}

		if (($state.current.name === 'home.opportunity.create') || ($state.current.name === 'home.opportunity.QuickCreate')) {

			if ($state.current.name === 'home.opportunity.QuickCreate') {
				console.log("CREATE QUICK OPPORTUNITY");

				vm.opportunity = {
					self: {}
				};
				vm.opportunity.self.contacts = [];
				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity.self.opportunityMode = "QuickCreate";

				if ($stateParams.leadDetails != null) {
					console.log("$stateParams.leadDetails");
					console.log($stateParams.leadDetails);
					vm.opportunity.self.leadId = $stateParams.leadDetails.leadId;
					vm.opportunity.leadDetails = $stateParams.leadDetails;
				}

			} else if ($state.current.name === 'home.opportunity.create') {
				console.log("CREATE OPPORTUNITY");

				vm.opportunity = {
					self: {}
				};
				vm.opportunity.self.contacts = [];
				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity.self.opportunityMode = "Create";

				vm.selectLead = function(lead) {
					console.log("Inside selectLead()");
					vm.opportunity.self.leadId = lead.leadId;
					vm.opportunity.leadDetails = lead;
				}

				vm.selectLeadDialog = function(ev) {
					console.log("Inside selectLeadDialog()");
					$mdDialog.show({
						controller: leadSelectionDialogController,
						templateUrl: 'leadSelectDialogBox.html',
						parent: angular.element(document.body),
						clickOutsideToClose: true
					})
					vm.fields = JSON.parse(opportunitySharedData.getLayout('lead_viewAll'));
				};
			}

			vm.confirmDetailsDialog = function(lead) {
				console.log("Inside confirmDetailsDialog()");
				$mdDialog.show({
					controller: confirmationDialogController,
					templateUrl: 'confirmationDialogueBox.html',
					parent: angular.element(document.body),
					clickOutsideToClose: true
				})
				vm.fields = JSON.parse(opportunitySharedData.getLayout('SummaryDialog'));
			};

			vm.addContact = function(opportunity) {
				console.log("vm.opportunityFields");
				console.log(vm.opportunityFields);
				console.log("Inside addContact()");
				if (vm.opportunity.self.contacts.indexOf(opportunity.self.tempContact) == -1) {
					vm.opportunity.self.contacts.push(opportunity.self.tempContact);
					vm.resetTempContact();
				}
			};

			vm.updateContact = function(opportunity) {
				vm.resetTempContact();
				vm.opportunity.self.contactMode = "Create";
			}

			vm.createOpportunity = function(opportunity) {
				console.log("Inside createOpportunity()");
				console.log(opportunity);
				opportunityManager.createOpportunity(opportunity);
			}
		}

		vm.setTempContact = function(contact) {
			vm.opportunity.self.tempContact = contact;
			vm.opportunity.self.contactMode = "Update";
		}

		vm.resetTempContact = function() {

			vm.opportunityFields[1].form['formly_1_input_self.tempContact.firstName_1'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_input_self.tempContact.firstName_1'].$setPristine();

			vm.opportunityFields[1].form['formly_1_input_self.tempContact.lastName_2'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_input_self.tempContact.lastName_2'].$setPristine();

			vm.opportunityFields[1].form['formly_1_select_self.tempContact.title_0'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_select_self.tempContact.title_0'].$setPristine();

			vm.opportunityFields[1].form['formly_1_input_self.tempContact.contactNum_1'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_input_self.tempContact.contactNum_1'].$setPristine();

			vm.opportunityFields[1].form['formly_1_input_self.tempContact.eMail_3'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_input_self.tempContact.eMail_3'].$setPristine();

			vm.opportunityFields[1].form['formly_1_select_self.tempContact.contactRole_4'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_select_self.tempContact.contactRole_4'].$setPristine();

			vm.opportunityFields[1].form['formly_1_select_self.tempContact.prefModOfCom_5'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_select_self.tempContact.prefModOfCom_5'].$setPristine();

			vm.opportunityFields[1].form['formly_1_datepicker_self.tempContact.dob_2'].$setUntouched();
			vm.opportunityFields[1].form['formly_1_datepicker_self.tempContact.dob_2'].$setPristine();

			vm.opportunity.self.tempContact ={};

		}

		if ($state.current.name === 'home.opportunity.edit') {
			console.log("EDIT OPPORTUNITY");

			vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
			vm.opportunity = {};

			if ($stateParams.opportunity != null) {
				console.log("$stateParams.opportunity");
				console.log($stateParams.opportunity);
				vm.opportunity = $stateParams.opportunity;
				vm.opportunity.self.opportunityMode = "Update";
			}

			vm.updateOpportunity = function(opportunity) {
				console.log("Inside updateOpportunity()");
				console.log(opportunity);
				opportunityManager.updateOpportunity(opportunity);
			};

		}

		if ($state.current.name === 'home.opportunity.view') {
			console.log("VIEW OPPORTUNITY");
			vm.opportunity = {};
			vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));

			if ($stateParams.opportunity != null) {
				console.log("$stateParams.opportunity");
				console.log($stateParams.opportunity);
				vm.opportunity = $stateParams.opportunity;
				vm.opportunity.self.opportunityMode = "View";
			}

		}

		if ($state.current.name === 'home.opportunity.delete') {
			console.log("DELETE OPPORTUNITY");

			vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));

			if ($stateParams.opportunity != null) {
				console.log("$stateParams.opportunity");
				console.log($stateParams.opportunity);
				vm.opportunity = $stateParams.opportunity;
				vm.opportunity.self.opportunityMode = "Delete";
			}

			vm.deleteOpportunity = function(opportunity) {
				console.log("Inside deleteOpportunity()");
				console.log(opportunity);
				opportunityManager.deleteOpportunity(opportunity.self.opportunityId);
			};

		}
	}
})();
