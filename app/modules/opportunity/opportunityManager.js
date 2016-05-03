(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:opportunityService
	 * @description
	 * # opportunityService
	 * Service of the app
	 */

	angular
		.module('opportunity')
		.factory('opportunityManager', Opportunity);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Opportunity.$inject = ['$state', 'opportunityModel', 'opportunitySharedData'];

	function Opportunity($state, opportunityModel, opportunitySharedData) {


		var opportunityManager = {

			getOpportunity: function(opportunityId) {
				//return new opportunityModel().get(opportunityId);
				var opportunity = new opportunityModel();
				return opportunity.get(opportunityId);
			},

			getAllOpportunitys: function() {
				//return $http.get("http://203.200.67.15/VHAMW/webapi/Opportunity");
				var opportunity = new opportunityModel();
				return opportunity.getAll();
			},

			createOpportunity: function(opportunityData) {

				if (opportunityData == null) {
					console.log("opportunityData is null.");
					alert('Please fill in the required details.');
				} else {
					opportunityData.opportunityId = "L" + Date.now();

					/* Creating formatted date */
					var today = new Date();
					var dd = today.getDate();
					var mm = today.getMonth() + 1; //January is 0!

					var yyyy = today.getFullYear();
					if (dd < 10) {
						dd = '0' + dd
					}
					if (mm < 10) {
						mm = '0' + mm
					}
					var today = yyyy + "-" + mm + "-" + dd;
					/* Date formation ends here */

					opportunityData.opportunityCreationDate = today;

					var opportunity = new opportunityModel(opportunityData);
					opportunity.save().then(
						function(response) {
							alert('Opportunity ' + opportunity.opportunityId + ' created successfully.');
							if ($state.current.name === 'home.opportunity.QuickCreate') {
								$state.go('home.quote.QuickCreate');
							} else if ($state.current.name === 'home.opportunity.create') {
								$state.go('home.opportunity.viewAll');
							}

						},
						function(error) {
							alert('Error While creating Opportunity:');
							console.log("ERROR opportunity.save()");
							console.log(error.data);
						}
					);
				}
			},

			updateOpportunity: function(opportunityData) {
				var opportunity = new opportunityModel(opportunityData);
				opportunity.update().then(
					function(response) {
						alert('Opportunity ' + opportunityData.opportunityId + ' updated successfully.');
						$state.go('home.opportunity.viewAll');
					},
					function(error) {
						alert('Error While deleting Opportunity: ' + error.message);
					}
				);
			},

			deleteOpportunity: function(opportunityId) {
				if (confirm('Are you sure you want to delete this opportunity?')) {
					var opportunity = new opportunityModel();
					opportunity.remove(opportunityId).then(
						function(response) {
							alert('Opportunity ' + opportunityId + ' deleted successfully.');
							$state.go('home.opportunity.viewAll');
						},
						function(error) {
							alert('Error While deleting Opportunity: ' + error.message);
						}
					);
				} else {
					console.log("Opportunity deletion cancelled by User");
				}
			},

			inflateUiGrid: function(vm) {

				// vm.gridOptions = {};
				// vm.gridOptions.enableHorizontalScrollbar = 2;
				// vm.gridOptions.enableVerticalScrollbar = 2;
				// vm.gridOptions.enableFiltering=true;
				//
				// vm.gridOptions.columnDefs = [
				// 		{ field: 'opportunityId',
				// 			cellTemplate:'<md-button class="md-primary" aria-label="opportunityId" ng-click="grid.appScope.vm.openViewOpportunity(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.opportunityId}}</md-button>'
				// 		},
				// 		{ field: 'opportunityName' },
				// 		{ field: 'opportunitySource' },
				// 		{ field: 'opportunityType' },
				// 		/*{ field: 'opportunitySize' },
				// 		{ field: 'purchaseTimeFrame' },
				// 		{ field: 'probability' },
				// 		{ field: 'competitor' },*/
				// 		/*{ field: 'requestedDate' },
				// 		{ field: 'closedDate' },*/
				// 		{ field: 'closureReason' },
				// 		{ field: 'territoryCodeOrRegion' },
				// 		{ field: 'stage' },
				// 		/*{ field: 'autoAssignFlag' },
				// 		{ field: 'opportunityRisksFlag' },
				// 		{ field: 'opportunityPotentialFlag' },
				// 		{ field: 'solutionOptionsFlag' },
				// 		{ field: 'communicationPreference' },
				// 		{ field: 'assignedToGroup' },
				// 		{ field: 'assignedToUser' },
				// 		{ field: 'createdByUser' },
				// 		{ field: 'createdByGroup' },
				// 		{ field: 'opportunityCreationDate' },
				// 		{ field: 'opportunityLastUpdateDate' },
				// 		{ field: 'title' },
				// 		{ field: 'firstName' },
				// 		{ field: 'lastName' },
				// 		{ field: 'contactNumber' },
				// 		{ field: 'dateOfBirth' },
				// 		{ field: 'emailAddress' },
				// 		{ field: 'contactRole' },
				// 		{ field: 'preferredModeOfCommmunication' },*/
				// 		{ field: 'leadId' },
				// 		{ field: 'opportunityVersion' },
				// 		{ name:  'Actions',
				// 			cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditOpportunity(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteOpportunity(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
				// 			enableFiltering:false
				// 		}
				//         ];

				opportunityManager.getAllOpportunitys().then(
					function(response) {
						console.log("getAllOpportunitys SUCCESS");
						console.log("data received");
						console.log(response.data);

						// vm.gridOptions.data = response.data;
						vm.opportunitiesList = response.data;
					},
					function(error) {
						console.log("getAllOpportunitys ERROR : " + error.message);
					});

				return vm;
			},

			openViewOpportunity: function(opportunityId) {
				new opportunityModel().get(opportunityId).then(
					function(response) {
						console.log("getOpportunity SUCCESS");
						console.log(response.data);

						opportunitySharedData.setOpportunity(response.data);

						$state.go('home.opportunity.view');
					},
					function(error) {
						console.log("getOpportunity ERROR");
						console.log(error);
					}
				);
			},

			openEditOpportunity: function(opportunityId) {
				new opportunityModel().get(opportunityId).then(
					function(response) {
						console.log("getOpportunity SUCCESS");
						console.log(response.data);

						opportunitySharedData.setOpportunity(response.data);

						$state.go('home.opportunity.edit');
					},
					function(error) {
						console.log("getOpportunity ERROR");
						console.log(error);
					}
				);
			},

			openDeleteOpportunity: function(opportunityId) {
				new opportunityModel().get(opportunityId).then(
					function(response) {
						console.log("getOpportunity SUCCESS");
						console.log(response.data);

						opportunitySharedData.setOpportunity(response.data);

						$state.go('home.opportunity.delete');
					},
					function(error) {
						console.log("getOpportunity ERROR");
						console.log(error);
					}
				);
			},

			openCreateOpportunity: function() {
				$state.go('home.opportunity.create');
			}
		};
		return opportunityManager;
	}
})();
