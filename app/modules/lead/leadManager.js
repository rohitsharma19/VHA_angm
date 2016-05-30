(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:leadService
	 * @description
	 * # leadService
	 * Service of the app
	 */

	angular
		.module('lead')
		.factory('leadManager', Lead);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Lead.$inject = ['$state', 'leadModel', 'leadSharedData', 'sharedService'];

	function Lead($state, leadModel, leadSharedData, sharedService) {


		var leadManager = {

			getLead: function(leadId) {
				var lead = new leadModel();
				return lead.get(leadId);
			},

			getAllLeads: function() {
				var lead = new leadModel();
				return lead.getAll();
			},

			createLead: function(leadData) {
				//showing progress bar while the lead is saved
				sharedService.showProgressBar();

				if (leadData === null) {
					console.log("leadData is null.");
					alert('Please fill in the required details.');
				} else {
					var lead = new leadModel(leadData);
					lead.save().then(
						function(response) {
							// alert('Lead '+ response.data.leadId + ' created successfully.' );
							console.log(response.data);
							if ($state.current.name === 'home.lead.QuickCreate') {
								$state.go('home.opportunity.QuickCreate', {
									leadDetails: response.data
								}).then(function() {
									sharedService.hideProgressBar();
								});
							} else if ($state.current.name === 'home.lead.create') {
								$state.go('home.lead.viewAll').then(function() {
									sharedService.hideProgressBar();
								});
							}
						},
						function(error) {
							alert('Error While creating Lead: ' + error.message);
							console.log("ERROR lead.save()");
							console.log(error.data);
						}
					);
				}
			},

			updateLead: function(leadData) {

				sharedService.showProgressBar();

				var lead = new leadModel(leadData);
				lead.update().then(
					function(response) {
						alert('Lead ' + leadData.leadId + ' updated successfully.');
						$state.go('home.lead.viewAll').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Lead: ' + error.message);
					}
				);
			},

			deleteLead: function(leadId) {

				sharedService.showProgressBar();

				if (confirm('Are you sure you want to delete this lead?')) {
					var lead = new leadModel();
					lead.remove(leadId).then(
						function(response) {
							alert('Lead ' + leadId + ' deleted successfully.');
							$state.go('home.lead.viewAll').then(function() {
								sharedService.hideProgressBar();
							});
						},
						function(error) {
							alert('Error While deleting Lead: ' + error.message);
						}
					);
				} else {
					console.log("Lead deletion cancelled by User");
				}
			},

			inflateUiGrid: function(vm) {

				leadManager.getAllLeads().then(
					function(response) {
						console.log("getAllLeads SUCCESS");
						console.log("data received");
						console.log(response.data);

						vm.leadsList = response.data;
					},
					function(error) {
						console.log("getAllLeads ERROR : " + error.message);
					});

				return vm;
			},

			openViewLead: function(leadId) {

				sharedService.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						leadSharedData.setLead(response.data);

						$state.go('home.lead.view').then(function() {
							sharedService.hideProgressBar();
						});

					},
					function(error) {
						console.log("getLead ERROR");
						console.log(error);
					}
				);
			},

			openEditLead: function(leadId) {

				sharedService.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						leadSharedData.setLead(response.data);

						$state.go('home.lead.edit').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						console.log("getLead ERROR");
						console.log(error);
					}
				);
			},

			openDeleteLead: function(leadId) {

				sharedService.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						leadSharedData.setLead(response.data);

						$state.go('home.lead.delete').then(function() {
							sharedService.hideProgressBar();
						});

					},
					function(error) {
						console.log("getLead ERROR");
						console.log(error);
					}
				);
			},

			openCreateLead: function() {

				sharedService.showProgressBar();

				$state.go('home.lead.create').then(function() {
					sharedService.hideProgressBar();
				});
			}
		};
		return leadManager;
	}
})();
