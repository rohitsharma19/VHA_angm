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

	Quote.$inject = ['$state', 'quoteModel', 'quoteSharedData', 'parentModel', 'progressBarFactory', 'toastFactory'];

	function Quote($state, quoteModel, quoteSharedData, parentModel, progressBarFactory, toastFactory) {


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
				progressBarFactory.showProgressBar();

				if (quoteData.self == null) {
					console.log("quoteData is null.");
					alert('Please fill in the required details.');
				} else {

					var quote = new quoteModel(quoteData.self);
					quote.save().then(
						function(response) {
							toastFactory.openSuccessToast('Quote ' + response.data.quoteId + ' created successfully.');

							if ($state.current.name === 'home.quote.QuickCreate') {
								$state.go('home.agreement.QuickCreate', {
									finalSelection: quoteData.finalSelection,
									quoteDetails: response.data,
									opportunityDetails: quoteData.opportunityDetails,
									leadDetails: quoteData.leadDetails
								}).then(function() {
									progressBarFactory.hideProgressBar();
								});
							} else if ($state.current.name === 'home.quote.create') {
								$state.go('home.quote.viewAll').then(function() {
									progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				var quote = new quoteModel(quoteData.self);
				quote.update().then(
					function(response) {
						toastFactory.openSuccessToast('Quote ' + response.data.quoteId + ' updated successfully.');
						$state.go('home.quote.viewAll').then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Quote: ' + error.message);
					}
				);
			},

			deleteQuote: function(quoteId) {

				progressBarFactory.showProgressBar();

				if (confirm('Are you sure you want to delete this quote?')) {
					var quote = new quoteModel();
					quote.remove(quoteId).then(
						function(response) {
							toastFactory.openSuccessToast('Quote ' + quoteId + ' deleted successfully.');
							$state.go('home.quote.viewAll').then(function() {
								progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				var quote = {
					self: {}
				};

				new quoteModel().get(quoteId).then(
					function(response) {
						console.log("getQuote SUCCESS");
						console.log(response.data);
						quote.self = response.data;

						parentModel.getOpportunity(quote.self.opportunityId).then(
							function(response) {
								quote.opportunityDetails = response.data;
								console.log("quote.opportunityDetails");
								console.log(quote.opportunityDetails);

								parentModel.getLead(quote.opportunityDetails.leadId).then(
									function(response) {
										quote.leadDetails = response.data;
										console.log("quote.leadDetails");
										console.log(quote.leadDetails);

										$state.go('home.quote.view', {
											'quote': quote
										}).then(function() {
											progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				var quote = {
					self: {}
				};

				new quoteModel().get(quoteId).then(
					function(response) {
						console.log("getQuote SUCCESS");
						console.log(response.data);
						quote.self = response.data;

						parentModel.getOpportunity(quote.self.opportunityId).then(
							function(response) {
								quote.opportunityDetails = response.data;
								console.log("quote.opportunityDetails");
								console.log(quote.opportunityDetails);

								parentModel.getLead(quote.opportunityDetails.leadId).then(
									function(response) {
										quote.leadDetails = response.data;
										console.log("quote.leadDetails");
										console.log(quote.leadDetails);

										$state.go('home.quote.edit', {
											'quote': quote
										}).then(function() {
											progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				var quote = {
					self: {}
				};

				new quoteModel().get(quoteId).then(
					function(response) {
						console.log("getQuote SUCCESS");
						console.log(response.data);
						quote.self = response.data;

						parentModel.getOpportunity(quote.self.opportunityId).then(
							function(response) {
								quote.opportunityDetails = response.data;
								console.log("quote.opportunityDetails");
								console.log(quote.opportunityDetails);

								parentModel.getLead(quote.opportunityDetails.leadId).then(
									function(response) {
										quote.leadDetails = response.data;
										console.log("quote.leadDetails");
										console.log(quote.leadDetails);

										$state.go('home.quote.delete', {
											'quote': quote
										}).then(function() {
											progressBarFactory.hideProgressBar();
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

				progressBarFactory.showProgressBar();

				$state.go('home.quote.create').then(function() {
					progressBarFactory.hideProgressBar();
				});
			}
		};
		return quoteManager;
	}
})();
