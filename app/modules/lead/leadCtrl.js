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

	Lead.$inject = ['$state', '$stateParams', 'leadManager', 'leadSharedData', '$mdDialog', '$mdMedia', 'parentModel', 'progressBarFactory', 'toastFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Lead($state, $stateParams, leadManager, leadSharedData, $mdDialog, $mdMedia, parentModel, progressBarFactory, toastFactory) {

		var vm = this;

		vm.lead = {};
		vm.lead.contacts = [];

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

			vm.fields = JSON.parse(leadSharedData.getLayout('lead_viewAll'));
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
				vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
				vm.lead.leadMode = "QuickCreate";
				vm.lead.contactMode = "Create";
			} else if ($state.current.name === 'home.lead.create') {
				console.log("CREATE LEAD");

				// vm.lead = {};
				vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
				vm.lead.leadMode = "Create";
				vm.lead.contactMode = "Create";
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

			vm.leadFields[1].form['formly_1_input_tempContact.firstName_1'].$setUntouched();
			vm.leadFields[1].form['formly_1_input_tempContact.firstName_1'].$setPristine();

			vm.leadFields[1].form['formly_1_input_tempContact.lastName_2'].$setUntouched();
			vm.leadFields[1].form['formly_1_input_tempContact.lastName_2'].$setPristine();

			vm.leadFields[1].form['formly_1_select_tempContact.title_0'].$setUntouched();
			vm.leadFields[1].form['formly_1_select_tempContact.title_0'].$setPristine();

			vm.leadFields[1].form['formly_1_input_tempContact.contactNum_1'].$setUntouched();
			vm.leadFields[1].form['formly_1_input_tempContact.contactNum_1'].$setPristine();

			vm.leadFields[1].form['formly_1_input_tempContact.eMail_3'].$setUntouched();
			vm.leadFields[1].form['formly_1_input_tempContact.eMail_3'].$setPristine();

			vm.leadFields[1].form['formly_1_select_tempContact.contactRole_4'].$setUntouched();
			vm.leadFields[1].form['formly_1_select_tempContact.contactRole_4'].$setPristine();

			vm.leadFields[1].form['formly_1_select_tempContact.prefModOfCom_5'].$setUntouched();
			vm.leadFields[1].form['formly_1_select_tempContact.prefModOfCom_5'].$setPristine();

			vm.leadFields[1].form['formly_1_datepicker_tempContact.dob_2'].$setUntouched();
			vm.leadFields[1].form['formly_1_datepicker_tempContact.dob_2'].$setPristine();

			vm.lead.tempContact ={};

		}

		if ($state.current.name === 'home.lead.edit') {
			console.log("EDIT LEAD");

			vm.lead = {};
			vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));

			if ($stateParams.lead != null) {
				console.log("$stateParams.lead");
				console.log($stateParams.lead);
				vm.lead = $stateParams.lead;
				vm.lead.leadMode = "Update";
			}

			vm.updateLead = function(lead) {
				console.log("Inside updateLead()");
				console.log(lead);
				leadManager.updateLead(lead);
			};
		}

		if ($state.current.name === 'home.lead.view') {
			console.log("VIEW LEAD");

			vm.lead = {};
			vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));

			if ($stateParams.lead != null) {
				console.log("$stateParams.lead");
				console.log($stateParams.lead);
				vm.lead = $stateParams.lead;
				vm.lead.leadMode = "View";
			}
		}

		if ($state.current.name === 'home.lead.delete') {
			console.log("DELETE LEAD");

			vm.lead = {};
			vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));

			if ($stateParams.lead != null) {
				console.log("$stateParams.lead");
				console.log($stateParams.lead);
				vm.lead = $stateParams.lead;
				vm.lead.leadMode = "Delete";
			}

			vm.deleteLead = function(lead) {
				console.log("Inside deleteLead()");
				console.log(lead);
				leadManager.deleteLead(lead.leadId);
			};
		}
	}
})();
