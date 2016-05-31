(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:quoteService
	 * @description
	 * # quoteService
	 * Service of the app
	 */

	angular
		.module('quote')
		.factory('quoteManager', Quote);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Quote.$inject = ['$state', 'quoteModel', 'quoteSharedData', 'sharedService'];

	function Quote($state, quoteModel, quoteSharedData, sharedService) {


		var quoteManager = {

			getQuote: function(quoteId) {
				//return new quoteModel().get(quoteId);
				var quote = new quoteModel();
				return quote.get(quoteId);
			},

			getAllQuotes: function() {
				//return $http.get("http://203.200.67.15/VHAMW/webapi/Quote");
				var quote = new quoteModel();
				return quote.getAll();
			},

			createQuote: function(quoteData) {
				//showing progress bar while the quote is saved
				sharedService.showProgressBar();

				if (quoteData == null) {
					console.log("quoteData is null.");
					alert('Please fill in the required details.');
				} else {

					var quote = new quoteModel(quoteData.self);
					quote.save().then(
						function(response) {
							alert('Quote ' + response.data.quoteId + ' created successfully.');

							if ($state.current.name === 'home.quote.QuickCreate') {
								$state.go('home.agreement.QuickCreate', {
									leadDetails: quoteData.leadDetails,
									opportunityDetails: quoteData.opportunityDetails,
									quoteDetails: quoteData.self,
									finalSelection: quoteData.finalSelection
								}).then(function() {
									sharedService.hideProgressBar();
								});
							} else if ($state.current.name === 'home.quote.create') {
								$state.go('home.quote.viewAll').then(function() {
									sharedService.hideProgressBar();
								});
							}
						},
						function(error) {
							alert('Error While creating Quote: ' + error.message);
						}
					);
				}
			},

			updateQuote: function(quoteData) {

				sharedService.showProgressBar();

				var quote = new quoteModel(quoteData.self);
				quote.update().then(
					function(response) {
						alert('Quote ' + response.data.quoteId + ' updated successfully.');
						$state.go('home.quote.viewAll').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Quote: ' + error.message);
					}
				);
			},

			deleteQuote: function(quoteId) {

				sharedService.showProgressBar();

				if (confirm('Are you sure you want to delete this quote?')) {
					var quote = new quoteModel();
					quote.remove(quoteId).then(
						function(response) {
							alert('Quote ' + quoteId + ' deleted successfully.');
							$state.go('home.quote.viewAll').then(function() {
								sharedService.hideProgressBar();
							});
						},
						function(error) {
							alert('Error While deleting Quote: ' + error.message);
						}
					);
				} else {
					console.log("Quote deletion cancelled by User");
				}
			},

			inflateUiGrid: function(vm) {

				quoteManager.getAllQuotes().then(
					function(response) {
						console.log("getAllQuotes SUCCESS");
						console.log("data received");
						console.log(response.data);

						vm.quotesList = response.data;
						// vm.gridOptions.data = response.data;
					},
					function(error) {
						console.log("getAllQuotes ERROR : " + error.message);
					});

				return vm;
			},

			openViewQuote: function(quoteId) {

				sharedService.showProgressBar();

				var quote = {
					self: {},
					leadDetails: {},
					opportunityDetails: {}
				};

				new quoteModel().get(quoteId).then(
					function(response) {
						console.log("getQuote SUCCESS");
						console.log(response.data);
						quote.self = response.data;

						sharedService.getOpportunity(quote.self.opportunityId).then(
							function(response) {
								quote.opportunityDetails = response.data;
								console.log("quote.opportunityDetails");
								console.log(quote.opportunityDetails);

								sharedService.getLead(quote.opportunityDetails.leadId).then(
									function(response) {
										quote.leadDetails = response.data;
										console.log("quote.leadDetails");
										console.log(quote.leadDetails);

										$state.go('home.quote.view', {
											'quote': quote
										}).then(function() {
											sharedService.hideProgressBar();
										});
									},
									function(error) {
										console.log("getQuote_Lead ERROR");
										console.log(error);
									}
								);
							},
							function(error) {
								console.log("getQuote_Opportunity ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getQuote ERROR");
						console.log(error);
					}
				);
			},

			openEditQuote: function(quoteId) {

				sharedService.showProgressBar();

				var quote = {
					self: {},
					leadDetails: {},
					opportunityDetails: {}
				};

				new quoteModel().get(quoteId).then(
					function(response) {
						console.log("getQuote SUCCESS");
						console.log(response.data);
						quote.self = response.data;

						sharedService.getOpportunity(quote.self.opportunityId).then(
							function(response) {
								quote.opportunityDetails = response.data;
								console.log("quote.opportunityDetails");
								console.log(quote.opportunityDetails);

								sharedService.getLead(quote.opportunityDetails.leadId).then(
									function(response) {
										quote.leadDetails = response.data;
										console.log("quote.leadDetails");
										console.log(quote.leadDetails);

										$state.go('home.quote.edit', {
											'quote': quote
										}).then(function() {
											sharedService.hideProgressBar();
										});
									},
									function(error) {
										console.log("getQuote_Lead ERROR");
										console.log(error);
									}
								);
							},
							function(error) {
								console.log("getQuote_Opportunity ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getQuote ERROR");
						console.log(error);
					}
				);
			},


			openDeleteQuote: function(quoteId) {

				sharedService.showProgressBar();

				var quote = {
					self: {},
					leadDetails: {},
					opportunityDetails: {}
				};

				new quoteModel().get(quoteId).then(
					function(response) {
						console.log("getQuote SUCCESS");
						console.log(response.data);
						quote.self = response.data;

						sharedService.getOpportunity(quote.self.opportunityId).then(
							function(response) {
								quote.opportunityDetails = response.data;
								console.log("quote.opportunityDetails");
								console.log(quote.opportunityDetails);

								sharedService.getLead(quote.opportunityDetails.leadId).then(
									function(response) {
										quote.leadDetails = response.data;
										console.log("quote.leadDetails");
										console.log(quote.leadDetails);

										$state.go('home.quote.delete', {
											'quote': quote
										}).then(function() {
											sharedService.hideProgressBar();
										});
									},
									function(error) {
										console.log("getQuote_Lead ERROR");
										console.log(error);
									}
								);
							},
							function(error) {
								console.log("getQuote_Opportunity ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getQuote ERROR");
						console.log(error);
					}
				);
			},

			openCreateQuote: function() {

				sharedService.showProgressBar();

				$state.go('home.quote.create').then(function() {
					sharedService.hideProgressBar();
				});
			}
		};
		return quoteManager;
	}
})();
