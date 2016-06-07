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

	Lead.$inject = ['$state', 'leadModel', 'parentModel', 'progressBarFactory', 'toastFactory'];

	function Lead($state, leadModel, parentModel, progressBarFactory, toastFactory) {


		var leadManager = {

			getLead: function(leadId) {
				console.log("Inside leadManager.getLead()");
				var lead = new leadModel();
				return lead.get(leadId);
			},

			getAllLeads: function() {
				console.log("Inside leadManager.getAllLeads()");
				var lead = new leadModel();
				return lead.getAll();
			},

			createLead: function(leadData) {
				console.log("Inside leadManager.createLead()");
				progressBarFactory.showProgressBar();

				if (leadData == null) {
					console.log("leadData is null.");
					progressBarFactory.hideProgressBar();
					alert('Please fill in the required details.');
				} else {
					var lead = new leadModel(leadData);
					lead.save().then(
						function(response) {
							toastFactory.openSuccessToast('Lead ' + response.data.leadId + ' created successfully.');
							console.log("Lead created:");
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
				console.log("Inside leadManager.updateLead()");
				progressBarFactory.showProgressBar();

				var lead = new leadModel(leadData);
				lead.update().then(
					function(response) {
						toastFactory.openSuccessToast('Lead ' + response.data.leadId + ' updated successfully.');
						$state.go('home.lead.viewAll').then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While updating Lead: ' + error.message);
						console.log("ERROR lead.update()");
						console.log(error.data);
					}
				);
			},

			deleteLead: function(leadId) {
				console.log("Inside leadManager.deleteLead()");
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
							console.log("ERROR lead.delete()");
							console.log(error.data);
						}
					);
				} else {
					console.log("Lead deletion cancelled by User");
				}
			},

			inflateUiGrid: function(vm) {
				console.log("Inside leadManager.inflateUiGrid()");
				leadManager.getAllLeads().then(
					function(response) {
						console.log("getAllLeads SUCCESS");
						console.log(response.data);

						vm.leadsList = response.data;
					},
					function(error) {
						alert('Error While getting All Leads: ' + error.message);
						console.log("ERROR leadManager.getAllLeads()");
						console.log(error.data);
					});
				return vm;
			},

			openViewLead: function(leadId) {
				console.log("Inside leadManager.openViewLead()");
				progressBarFactory.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						var lead = response.data;

						$state.go('home.lead.view', {
							'lead': lead
						}).then(function() {
							progressBarFactory.hideProgressBar();
						});

					},
					function(error) {
						alert('Error While get Lead: ' + error.message);
						console.log("ERROR leadModel().get()");
						console.log(error.data);
					}
				);
			},

			openEditLead: function(leadId) {
				console.log("Inside leadManager.openEditLead()");
				progressBarFactory.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						var lead = response.data;

						$state.go('home.lead.edit', {
							'lead': lead
						}).then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While get Lead: ' + error.message);
						console.log("ERROR leadModel().get()");
						console.log(error.data);
					}
				);
			},

			openDeleteLead: function(leadId) {
				console.log("Inside leadManager.openDeleteLead()");
				progressBarFactory.showProgressBar();

				new leadModel().get(leadId).then(
					function(response) {
						console.log("getLead SUCCESS");
						console.log(response.data);

						var lead = response.data;

						$state.go('home.lead.delete', {
							'lead': lead
						}).then(function() {
							progressBarFactory.hideProgressBar();
						});

					},
					function(error) {
						alert('Error While get Lead: ' + error.message);
						console.log("ERROR leadModel().get()");
						console.log(error.data);
					}
				);
			},

			openCreateLead: function() {
				console.log("Inside leadManager.openCreateLead()");
				progressBarFactory.showProgressBar();

				$state.go('home.lead.create').then(function() {
					progressBarFactory.hideProgressBar();
				});
			}
		};
		return leadManager;
	}
})();
