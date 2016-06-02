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

	Opportunity.$inject = ['$state', 'opportunityModel', 'opportunitySharedData', 'parentModel', 'progressBarFactory', 'toastFactory'];

	function Opportunity($state, opportunityModel, opportunitySharedData, parentModel, progressBarFactory, toastFactory) {


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

				//showing progress bar while the opportunity is saved
				progressBarFactory.showProgressBar();

				if (opportunityData.self == null) {
					console.log("opportunityData is null.");
					alert('Please fill in the required details.');
				} else {

					var opportunity = new opportunityModel(opportunityData.self);
					opportunity.save().then(
						function(response) {
							toastFactory.openSuccessToast('Opportunity ' + response.data.opportunityId + ' created successfully.');
							if ($state.current.name === 'home.opportunity.QuickCreate') {
								$state.go('home.recommendation.QuickCreate', {
									opportunityDetails: response.data,
									leadDetails: opportunityData.leadDetails
								}).then(function() {
									progressBarFactory.hideProgressBar();
								});
							} else if ($state.current.name === 'home.opportunity.create') {
								$state.go('home.opportunity.viewAll').then(function() {
									progressBarFactory.hideProgressBar();
								});
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

				progressBarFactory.showProgressBar();

				var opportunity = new opportunityModel(opportunityData.self);
				opportunity.update().then(
					function(response) {
						toastFactory.openSuccessToast('Opportunity ' + response.data.opportunityId + ' updated successfully.');
						$state.go('home.opportunity.viewAll').then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Opportunity: ' + error.message);
					}
				);
			},

			deleteOpportunity: function(opportunityId) {

				progressBarFactory.showProgressBar();

				if (confirm('Are you sure you want to delete this opportunity?')) {
					var opportunity = new opportunityModel();
					opportunity.remove(opportunityId).then(
						function(response) {
							toastFactory.openSuccessToast('Opportunity ' + opportunityId + ' deleted successfully.');
							$state.go('home.opportunity.viewAll').then(function() {
								progressBarFactory.hideProgressBar();
							});
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

				progressBarFactory.showProgressBar();

				new opportunityModel().get(opportunityId).then(
					function(response) {
						console.log("getOpportunity SUCCESS");
						console.log(response.data);
						var opportunity = {
							self: {}
						};
						opportunity.self = response.data;

						parentModel.getLead(opportunity.self.leadId).then(
							function(response) {
								opportunity.leadDetails = response.data;
								console.log(opportunity.leadDetails);

								$state.go('home.opportunity.view',{'opportunity':opportunity}).then(function() {
									progressBarFactory.hideProgressBar();
								});
							},
							function(error) {
								console.log("getOpportunity_Lead ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getOpportunity ERROR");
						console.log(error);
					}
				);
			},

			openEditOpportunity: function(opportunityId) {

				progressBarFactory.showProgressBar();

				new opportunityModel().get(opportunityId).then(
					function(response) {
						console.log("getOpportunity SUCCESS");
						console.log(response.data);
						var opportunity = {
							self: {}
						};
						opportunity.self = response.data;

						parentModel.getLead(opportunity.self.leadId).then(
							function(response) {
								opportunity.leadDetails = response.data;
								console.log(opportunity.leadDetails);
								$state.go('home.opportunity.edit',{'opportunity':opportunity}).then(function() {
									progressBarFactory.hideProgressBar();
								});
							},
							function(error) {
								console.log("getOpportunity_Lead ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getOpportunity ERROR");
						console.log(error);
					}
				);
			},

			openDeleteOpportunity: function(opportunityId) {

				progressBarFactory.showProgressBar();

				new opportunityModel().get(opportunityId).then(
					function(response) {
						console.log("getOpportunity SUCCESS");
						console.log(response.data);
						var opportunity = {
							self: {}
						};
						opportunity.self = response.data;

						parentModel.getLead(opportunity.self.leadId).then(
							function(response) {
								opportunity.leadDetails = response.data;
								console.log(opportunity.leadDetails);
								$state.go('home.opportunity.view', {'opportunity':opportunity}).then(function() {
									progressBarFactory.hideProgressBar();
								});
							},
							function(error) {
								console.log("getOpportunity_Lead ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getOpportunity ERROR");
						console.log(error);
					}
				);
			},

			openCreateOpportunity: function() {

				progressBarFactory.showProgressBar();

				$state.go('home.opportunity.create').then(function() {
					progressBarFactory.hideProgressBar();
				});
			}
		};
		return opportunityManager;
	}
})();
