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

	Opportunity.$inject = ['$state', '$stateParams', 'opportunityManager', 'opportunitySharedData', '$mdDialog', '$mdMedia', '$scope', 'parentModel', 'progressBarFactory', 'toastFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function Opportunity($state, $stateParams, opportunityManager, opportunitySharedData, $mdDialog, $mdMedia, $scope, parentModel, progressBarFactory, toastFactory) {

		/*jshint validthis: true */

		var vm = this;
		vm.opportunity = {
			self: {}
		};

		/*** Dialog box controller***/
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

			// vm = opportunityManager.setUpUiGrid(vm);

			vm.openViewOpportunity = function(row) {
				console.log("Inside openViewOpportunity");
				opportunityManager.openViewOpportunity(row.entity.opportunityId);
			};

			vm.openEditOpportunity = function(row) {
				console.log("inside openEditOpportunity");
				opportunityManager.openEditOpportunity(row.entity.opportunityId);
			};

			vm.openDeleteOpportunity = function(row) {
				console.log("inside openDeleteOpportunity");
				opportunityManager.openDeleteOpportunity(row.entity.opportunityId);
			};


			vm.openCreateOpportunity = function() {
				console.log("inside openCreateOpportunity");
				opportunityManager.openCreateOpportunity();
			};
		}

		if (($state.current.name === 'home.opportunity.create') || ($state.current.name === 'home.opportunity.QuickCreate')) {

			if ($state.current.name === 'home.opportunity.QuickCreate') {
				console.log("CREATE QUICK OPPORTUNITY");

				vm.opportunity = {
					self: {}
				};
				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity.self.opportunityMode = "QuickCreate";

				//setting leadId in Opportunity and setting assigning leadDetails object
				if ($stateParams.leadDetails != null) {
					vm.opportunity.self.leadId = $stateParams.leadDetails.leadId;
					vm.opportunity.leadDetails = $stateParams.leadDetails;
				}

			} else if ($state.current.name === 'home.opportunity.create') {
				console.log("CREATE OPPORTUNITY");

				vm.opportunity = {
					self: {}
				};
				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity.self.opportunityMode = "Create";

				vm.selectLead = function(lead) {
					vm.opportunity.self.leadId = lead.leadId;
					vm.opportunity.leadDetails = lead;
				}

				vm.selectLeadDialog = function(ev) {
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
				$mdDialog.show({
					controller: confirmationDialogController,
					templateUrl: 'confirmationDialogueBox.html',
					targetEvent: '',
					parent: angular.element(document.body),
					clickOutsideToClose: true
				})
				vm.fields = JSON.parse(opportunitySharedData.getLayout('SummaryDialog'));
			};

			vm.createOpportunity = function(opportunity) {
				console.log("Inside createOpportunity().");
				console.log(opportunity);
				opportunityManager.createOpportunity(opportunity);
			}
		}

		if ($state.current.name === 'home.opportunity.edit') {
			console.log("EDIT OPPORTUNITY");

			vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
			vm.opportunity = {};

			if ($stateParams.opportunity != null) {
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
				vm.opportunity = $stateParams.opportunity;
				vm.opportunity.self.opportunityMode = "View";
			}

		}

		if ($state.current.name === 'home.opportunity.delete') {
			console.log("DELETE OPPORTUNITY");

			vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));

			if ($stateParams.opportunity != null) {
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
