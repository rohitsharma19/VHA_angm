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

				vm.selectLead = function(lead){
					vm.opportunity.self.leadId=lead.leadId;
					vm.opportunity.leadDetails=lead;
				};

				vm.showAdvanced = function(ev) {
					var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
					$mdDialog.show({
							controller: DialogController,
							templateUrl: 'leadSelectDialogBox.html',
							parent: angular.element(document.body),
							clickOutsideToClose: true,
							fullscreen: useFullScreen
						})
						// .then(function(answer) {
						//   $scope.status = 'You said the information was "' + answer + '".';
						// }, function() {
						//   $scope.status = 'You cancelled the dialog.';
						// });
					vm.fields = JSON.parse(opportunitySharedData.getLayout('lead_viewAll'));
					// $scope.$watch(function() {
					//   return $mdMedia('xs') || $mdMedia('sm');
					// }, function(wantsFullScreen) {
					//   $scope.customFullscreen = (wantsFullScreen === true);
					// });
				};

				function DialogController($scope, $mdDialog, parentModel, opportunityManager) {
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
				};

								vm.createOpportunity = function(opportunity) {
									console.log("Inside createOpportunity().");
									console.log(opportunity);
									opportunityManager.createOpportunity(opportunity);
			}

			vm.confirmDetails = function(lead) {
				// var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
				$mdDialog.show({
						controller: DialogController,
						templateUrl: 'confirmationDialogueBox.html',
						targetEvent: '',
						parent: angular.element(document.body),
						clickOutsideToClose: true
							// fullscreen: useFullScreen
					})
					.then(function(answer) {
						// vm.status = 'You said the information was "' + answer + '".';
					}, function() {
						// vm.status = 'You cancelled the dialog.';
					});
				console.log(vm.status);
				vm.fields = JSON.parse(opportunitySharedData.getLayout('SummaryDialog'));
				// $scope.$watch(function() {
				//   return $mdMedia('xs') || $mdMedia('sm');
				// },
				// function(wantsFullScreen) {
				//   vm.customFullscreen = (wantsFullScreen === true);
				// });
			};

			function DialogController($scope, $mdDialog) {
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
		}

			if ($state.current.name === 'home.opportunity.edit') {
				console.log("EDIT OPPORTUNITY");

				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity = {};

				if ($stateParams.opportunity != null) {
					vm.opportunity = $stateParams.opportunity;
					vm.opportunity.self.opportunityMode = "Update";
				}

			if ($stateParams.opportunity != null) {
				vm.opportunity = $stateParams.opportunity;
				vm.opportunity.self.opportunityMode = "Update";

			}

			if ($state.current.name === 'home.opportunity.view') {
				console.log("VIEW OPPORTUNITY");
				vm.opportunity = {};
				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));

				if ($stateParams.opportunity != null) {
					vm.opportunity = $stateParams.opportunity;
					vm.opportunity.self.opportunityMode = "View";
				}


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
			if ($stateParams.opportunity != null) {
				vm.opportunity = $stateParams.opportunity;
				vm.opportunity.self.opportunityMode = "Delete";

			}
		}
	}
}
})();
