(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:agreementService
	 * @description
	 * # agreementService
	 * Service of the app
	 */

	angular
		.module('agreement')
		.factory('agreementManager', Agreement);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Agreement.$inject = ['$state', 'agreementModel', 'agreementSharedData', 'parentModel', 'progressBarFactory', 'toastFactory'];

	function Agreement($state, agreementModel, agreementSharedData, parentModel, progressBarFactory, toastFactory) {

		var agreementManager = {

			getAgreement: function(agreementId) {
				//return new agreementModel().get(agreementId);
				var agreement = new agreementModel();
				return agreement.get(agreementId);
			},

			getAllAgreement: function() {
				var agreement = new agreementModel();
				return agreement.getAll();
			},

			createAgreement: function(agreementData) {

				progressBarFactory.showProgressBar();

				if (agreementData.self == null) {
					console.log("agreementData is null.");
					alert('Please fill in the required details.');
				} else {

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

					/*creating agreement effect date*/
					var today1 = new Date();
					var nextday = new Date(today1.getTime() + (24 * 60 * 60 * 1000));
					console.log(nextday);
					var dd1 = nextday.getDate();
					var mm1 = nextday.getMonth() + 1;
					var yyyy1 = nextday.getFullYear();
					if (dd1 < 10) {
						dd1 = '0' + dd1;
					}
					if (mm1 < 10) {
						mm1 = '0' + mm1;
					}
					var nextday = yyyy1 + "-" + mm1 + "-" + dd1;
					console.log(nextday);
					/*Agreement effect date ends here*/

					/*creating agreement end date*/
					yyyy1 = yyyy1 + 1;
					var endDay = yyyy1 + "-" + mm1 + "-" + dd1;
					console.log(endDay);
					/*agreement end date ends here*/

					agreementData.self.agremntStartDate = today;
					agreementData.self.agremntEffecDate = nextday;
					agreementData.self.agremntEndDate = endDay;
					agreementData.self.creationDate = today;
					agreementData.self.listPrice = 5000;

					var agreement = new agreementModel(agreementData.self);
					agreement.save().then(
						function(response) {
							toastFactory.openSuccessToast('Agreement ' + response.data.agreementId + ' created successfully.');
							if ($state.current.name === 'home.agreement.QuickCreate') {
								$state.go('home.dashboard').then(function() {
									progressBarFactory.hideProgressBar();
								});
							} else if ($state.current.name === 'home.agreement.create') {
								$state.go('home.agreement.viewAll').then(function() {
									progressBarFactory.hideProgressBar();
								});
							}
						},
						function(error) {
							alert('Error While creating Agreement ');
							console.log("Error While creating Agreement");
							console.log(error.data);
						}
					);
				}
			},
			updateAgreement: function(agreementData) {

				progressBarFactory.showProgressBar();

				var agreement = new agreementModel(agreementData.self);
				agreement.update().then(
					function(response) {
						toastFactory.openSuccessToast('Agreement ' + response.data.agreementId + ' updated successfully.');
						$state.go('home.agreement.viewAll').then(function() {
							progressBarFactory.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Agreement: ' + error.message);
					}
				);
			},
			deleteAgreement: function(agreementId) {

				progressBarFactory.showProgressBar();

				if (confirm('Are you sure you want to delete this agreement?')) {
					var agreement = new agreementModel();
					agreement.remove(agreementId).then(
						function(response) {
							toastFactory.openSuccessToast('Agreement ' + agreementId + ' deleted successfully.');
							$state.go('home.agreement.viewAll').then(function() {
								progressBarFactory.hideProgressBar();
							});
						},
						function(error) {
							alert('Error While deleting Agreement: ' + error.message);
						}
					);
				} else {
					console.log("Agreement deletion cancelled by User");
				}
			},

			inflateUiGrid: function(vm) {
				agreementManager.getAllAgreement().then(
					function(response) {
						console.log("getAllAgreement SUCCESS");
						console.log("data received");
						console.log(response.data);

						vm.agreementList = response.data;
						// vm.gridOptions.data = response.data;
					},
					function(error) {
						console.log("getAllAgreement ERROR : " + error.message);
					});

				return vm;
			},

			openViewAgreement: function(agreementId) {

				progressBarFactory.showProgressBar();

				var agreement = {
					self: {}
				};

				new agreementModel().get(agreementId).then(
					function(response) {
						console.log("getAgreement SUCCESS");
						console.log(response.data);
						agreement.self = response.data;

						parentModel.getQuote(agreement.self.quoteId).then(
							function(response) {
								agreement.quoteDetails = response.data;
								console.log("agreement.quoteDetails");
								console.log(agreement.quoteDetails);

								parentModel.getOpportunity(agreement.quoteDetails.opportunityId).then(
									function(response) {
										agreement.opportunityDetails = response.data;
										console.log("agreement.opportunityDetails");
										console.log(agreement.opportunityDetails);

										parentModel.getLead(agreement.opportunityDetails.leadId).then(
											function(response) {
												agreement.leadDetails = response.data;
												console.log("agreement.leadDetails");
												console.log(agreement.leadDetails);

												$state.go('home.agreement.view', {
													'agreement': agreement
												}).then(function() {
													progressBarFactory.hideProgressBar();
												});
											},
											function(error) {
												console.log("getAgreement_Lead ERROR");
												console.log(error);
											}
										);
									},
									function(error) {
										console.log("getAgreement_Opportunity ERROR");
										console.log(error);
									}
								);
							},
							function(error) {
								console.log("getAgreement_Quote ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getAgreement ERROR");
						console.log(error);
					}
				);
			},

			openEditAgreement: function(agreementId) {

				progressBarFactory.showProgressBar();

				var agreement = {
					self: {}
				};

				new agreementModel().get(agreementId).then(
					function(response) {
						console.log("getAgreement SUCCESS");
						console.log(response.data);
						agreement.self = response.data;

						parentModel.getQuote(agreement.self.quoteId).then(
							function(response) {
								agreement.quoteDetails = response.data;
								console.log("agreement.quoteDetails");
								console.log(agreement.quoteDetails);

								parentModel.getOpportunity(agreement.quoteDetails.opportunityId).then(
									function(response) {
										agreement.opportunityDetails = response.data;
										console.log("agreement.opportunityDetails");
										console.log(agreement.opportunityDetails);

										parentModel.getLead(agreement.opportunityDetails.leadId).then(
											function(response) {
												agreement.leadDetails = response.data;
												console.log("agreement.leadDetails");
												console.log(agreement.leadDetails);

												$state.go('home.agreement.edit', {
													'agreement': agreement
												}).then(function() {
													progressBarFactory.hideProgressBar();
												});
											},
											function(error) {
												console.log("getAgreement_Lead ERROR");
												console.log(error);
											}
										);
									},
									function(error) {
										console.log("getAgreement_Opportunity ERROR");
										console.log(error);
									}
								);
							},
							function(error) {
								console.log("getAgreement_Quote ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getAgreement ERROR");
						console.log(error);
					}
				);
			},

			openDeleteAgreement: function(agreementId) {

				progressBarFactory.showProgressBar();

				var agreement = {
					self: {}
				};

				new agreementModel().get(agreementId).then(
					function(response) {
						console.log("getAgreement SUCCESS");
						console.log(response.data);
						agreement.self = response.data;

						parentModel.getQuote(agreement.self.quoteId).then(
							function(response) {
								agreement.quoteDetails = response.data;
								console.log("agreement.quoteDetails");
								console.log(agreement.quoteDetails);

								parentModel.getOpportunity(agreement.quoteDetails.opportunityId).then(
									function(response) {
										agreement.opportunityDetails = response.data;
										console.log("agreement.opportunityDetails");
										console.log(agreement.opportunityDetails);

										parentModel.getLead(agreement.opportunityDetails.leadId).then(
											function(response) {
												agreement.leadDetails = response.data;
												console.log("agreement.leadDetails");
												console.log(agreement.leadDetails);

												$state.go('home.agreement.delete', {
													'agreement': agreement
												}).then(function() {
													progressBarFactory.hideProgressBar();
												});
											},
											function(error) {
												console.log("getAgreement_Lead ERROR");
												console.log(error);
											}
										);
									},
									function(error) {
										console.log("getAgreement_Opportunity ERROR");
										console.log(error);
									}
								);
							},
							function(error) {
								console.log("getAgreement_Quote ERROR");
								console.log(error);
							}
						);
					},
					function(error) {
						console.log("getAgreement ERROR");
						console.log(error);
					}
				);
			},
			openCreateAgreement: function() {

				progressBarFactory.showProgressBar();

				$state.go('home.agreement.create').then(function() {
					progressBarFactory.hideProgressBar();
				});
			}

			// captureSignature: function(agreement) {
			// 	var canvas = angular.element(document.getElementById('canvas'))[0];
			// 	console.log("Canvas Element");
			// 	console.log(canvas);
			// 	agreement.self.signature = canvas.toDataURL();
			// 	console.log("Signature Data");
			// 	console.log(agreement.self.signature);
			// },
      //
			// resetSignature: function() {
			// 	var canvas = angular.element(document.getElementById('canvas'))[0];
			// 	var context = canvas.getContext('2d');
			// 	context.clearRect(0, 0, canvas.width, canvas.height);
			// },
      //
			// displaySignatureForView: function(agreement) {
			// 	angular.element(document).ready(function() {
			// 		var canvas = angular.element(document.getElementById('canvas'))[0];
			// 		var context = canvas.getContext('2d');
			// 		var img = new Image();
			// 		img.src = agreement.self.signature;
			// 		context.drawImage(img, 0, 0);
			// 		var canvas = angular.element(document.getElementById('canvas'));
			// 		canvas.unbind();
			// 	});
			// },
      //
			// displaySignatureForUpdate: function(agreement) {
			// 	angular.element(document).ready(function() {
			// 		var canvas = angular.element(document.getElementById('canvas'))[0];
			// 		var context = canvas.getContext('2d');
			// 		var img = new Image();
			// 		img.src = agreement.self.signature;
			// 		context.drawImage(img, 0, 0);
			// 	});
			// }

		};
		return agreementManager;
	}
})();
