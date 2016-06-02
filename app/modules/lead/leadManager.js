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

	Lead.$inject = ['$state', 'leadModel', 'leadSharedData', 'parentModel', 'progressBarFactory', 'toastFactory'];

	function Lead($state, leadModel, leadSharedData, parentModel, progressBarFactory, toastFactory) {


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
				progressBarFactory.showProgressBar();

				if (leadData == null) {
					console.log("leadData is null.");
					alert('Please fill in the required details.');
				} else {
					var lead = new leadModel(leadData);
					lead.save().then(
						function(response) {
							toastFactory.openSuccessToast('Lead '+ response.data.leadId + ' created successfully.');
							console.log(response.data);
							if ($state.current.name === 'home.lead.QuickCreate') {
								$state.go('home.opportunity.QuickCreate', {
									leadDetails: response.data
								}).then(function() {
									progressBarFactory.hideProgressBar();
								});
							} else if ($state.current.name === 'home.lead.create') {
								$state.go('home.lead.viewAll').then(function() {
									progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				var lead = new leadModel(leadData);
				lead.update().then(
					function(response) {
						toastFactory.openSuccessToast('Lead ' + leadData.leadId + ' updated successfully.');
						$state.go('home.lead.viewAll').then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Lead: ' + error.message);
					}
				);
			},

			deleteLead: function(leadId) {

				progressBarFactory.showProgressBar();

				if (confirm('Are you sure you want to delete this lead?')) {
					var lead = new leadModel();
					lead.remove(leadId).then(
						function(response) {
							toastFactory.openSuccessToast('Lead ' + leadId + ' deleted successfully.');
							$state.go('home.lead.viewAll').then(function() {
								progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						leadSharedData.setLead(response.data);

						$state.go('home.lead.view').then(function() {
							progressBarFactory.hideProgressBar();
						});

					},
					function(error) {
						console.log("getLead ERROR");
						console.log(error);
					}
				);
			},

			openEditLead: function(leadId) {

				progressBarFactory.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						leadSharedData.setLead(response.data);

						$state.go('home.lead.edit').then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						console.log("getLead ERROR");
						console.log(error);
					}
				);
			},

			openDeleteLead: function(leadId) {

				progressBarFactory.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						leadSharedData.setLead(response.data);

						$state.go('home.lead.delete').then(function() {
							progressBarFactory.hideProgressBar();
						});

					},
					function(error) {
						console.log("getLead ERROR");
						console.log(error);
					}
				);
			},

			openCreateLead: function() {

				progressBarFactory.showProgressBar();

				$state.go('home.lead.create').then(function() {
					progressBarFactory.hideProgressBar();
				});
			}
		};
		return leadManager;
	}
})();
