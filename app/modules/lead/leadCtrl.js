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

				vm.lead = {};
				vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
				vm.lead.leadMode = "QuickCreate";
			} else if ($state.current.name === 'home.lead.create') {
				console.log("CREATE LEAD");

				vm.lead = {};
				vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
				vm.lead.leadMode = "Create";
			}

			vm.createLead = function(lead) {
				console.log("Inside createLead()");
				console.log(lead);
				leadManager.createLead(lead);
			};

			vm.addContact = function(lead) {
				console.log("Inside addContact().");
				console.log(lead);
				console.log(vm.leadFields);
			};

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
