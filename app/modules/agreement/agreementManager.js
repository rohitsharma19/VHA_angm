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

	Agreement.$inject = ['$state', 'agreementModel', 'agreementSharedData', 'sharedService'];

	function Agreement($state, agreementModel, agreementSharedData, sharedService) {


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

				sharedService.showProgressBar();

				if (agreementData == null) {
					console.log("agreementData is null.");
					alert('Please fill in the required details.');
				} else {
					agreementData.agreementId = "A" + Date.now();

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

					/*creating agreement effec date*/
					var today1 = new Date();
					var nextday = new Date(today1.getTime() + (24 * 60 * 60 * 1000))
					console.log(nextday);
					var dd1 = nextday.getDate();
					var mm1 = nextday.getMonth() + 1;
					var yyyy1 = nextday.getFullYear();
					if (dd1 < 10) {
						dd1 = '0' + dd1
					}
					if (mm1 < 10) {
						mm1 = '0' + mm1
					}
					var nextday = yyyy1 + "-" + mm1 + "-" + dd1;
					console.log(nextday);
					/*Agreement effec date ends here*/
					/*creating agreement end date*/
					yyyy1 = yyyy1 + 1;
					var endDay = yyyy1 + "-" + mm1 + "-" + dd1;
					console.log(endDay);
					/*agreement end date ends here*/

					agreementData.agremntStartDate = today;
					agreementData.agremntEffecDate = nextday;
					agreementData.agremntEndDate = endDay;
					agreementData.creationDate = today;
					agreementData.listPrice = 5000;

					var agreement = new agreementModel(agreementData);
					agreement.save().then(
						function(response) {
							alert('Agreement ' + agreement.agreementId + ' created successfully.');

							if ($state.current.name === 'home.agreement.QuickCreate') {
								$state.go('home.dashboard').then(function() {
									sharedService.hideProgressBar();
								});
							} else if ($state.current.name === 'home.agreement.create') {
								$state.go('home.agreement.viewAll').then(function() {
									sharedService.hideProgressBar();
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

				sharedService.showProgressBar();

				var agreement = new agreementModel(agreementData);
				agreement.update().then(
					function(response) {
						alert('Agreement ' + agreementData.agreementId + ' updated successfully.');
						$state.go('home.agreement.viewAll').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						alert('Error While deleting Agreement: ' + error.message);
					}
				);
			},
			deleteAgreement: function(agreementId) {

				sharedService.showProgressBar();

				if (confirm('Are you sure you want to delete this agreement?')) {
					var agreement = new agreementModel();
					agreement.remove(agreementId).then(
						function(response) {
							alert('Agreement ' + agreementId + ' deleted successfully.');
							$state.go('home.agreement.viewAll').then(function() {
								sharedService.hideProgressBar();
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
			// <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
			// 	updateAgreement: function(agreementData) {
			// 		var agreement = new agreementModel(agreementData);
			// 		agreement.update().then(
			//       	function (response) {
			//   				alert('Agreement '+ agreementData.agreementId + ' updated successfully.' );
			//   				$state.go('home.agreement.viewAll');
			//   			},
			// 	    function (error) {
			// 	    	alert('Error While deleting Agreement: '+ error.message );
			// 	    }
			//       );
			// 	},
			//
			// 	deleteAgreement: function(agreementId) {
			// 		if(confirm('Are you sure you want to delete this agreement?')){
			// 			var agreement = new agreementModel();
			// 			agreement.remove(agreementId).then(
			//         	function (response) {
			//     				alert('Agreement '+ agreementId + ' deleted successfully.' );
			//     				$state.go('home.agreement.viewAll');
			//     			},
			// 		    function (error) {
			// 		    	alert('Error While deleting Agreement: '+ error.message );
			// 		    }
			//         );
			// 		}
			// 		else{
			//       	console.log("Agreement deletion cancelled by User");
			//       }
			// 	},
			//
			// 	setUpUiGrid: function(vm) {
			//
			// 	vm.gridOptions = {};
			// 	vm.gridOptions.enableHorizontalScrollbar = 2;
			// 	vm.gridOptions.enableVerticalScrollbar = 2;
			// 	vm.gridOptions.enableFiltering=true;
			//
			// 	vm.gridOptions.columnDefs = [
			// 			{ field: 'agreementId',
			// 				cellTemplate:'<md-button class="md-primary" aria-label="agreementId" ng-click="grid.appScope.vm.openViewAgreement(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.agreementId}}</md-button>'
			// 			},
			// 			{ field: 'agremntStartDate' },
			// 			{ field: 'agremntEndDate' },
			// 			{ field: 'agremntEffecDate' },
			// 			/*{ field: 'currency' },
			// 			{ field: 'agremntVersion' },
			// 			{ field: 'contractTerm' },
			// 			{ field: 'agremntStatus' },
			// 			{ field: 'offerName' },*/
			// 			{ field: 'listPrice' },
			// 			/*{ field: 'salePrice' },
			// 			{ field: 'quantity' },
			// 			{ field: 'totalPrice' },
			// 			{ field: 'agremntTmplateType' },
			// 			{ field: 'renewalTerm' },
			// 			{ field: 'origAgremntId' },
			// 			{ field: 'expecRevenue' },
			// 			{ field: 'internalContact' },
			// 			{ field: 'internalContactRole' },
			// 			{ field: 'custContact' },
			// 			{ field: 'custContactRole' },
			// 			{ field: 'autoRenewFlag' },
			// 			{ field: 'agremntType' },
			// 			{ field: 'agremntDocId' },
			// 			{ field: 'agremntDocName' },*/
			// 			{ field: 'agremntDocVer' },
			// 			{ field: 'agremntDocType' },
			// 			{ field: 'serviceReqDate' },
			// 			{ name:  'Actions',
			// 				cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditAgreement(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteAgreement(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
			// 				enableFiltering:false
			// 			}
			//           ];
			//
			//           agreementManager.getAllAgreements().then(
			// 		function (response) {
			// 			console.log("getAllAgreements SUCCESS");
			// 			console.log("data received");
			// 			console.log(response.data);
			//
			// 			vm.gridOptions.data = response.data;
			// 		},
			// 	    function (error) {
			// 	        console.log("getAllAgreements ERROR : " + error.message);
			// 	});
			//
			// 	return vm;
			// },
			// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-->

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

				sharedService.showProgressBar();

				new agreementModel().get(agreementId).then(
					function(response) {
						console.log("getAgreement SUCCESS");
						console.log(response.data);

						agreementSharedData.setAgreement(response.data);

						$state.go('home.agreement.view').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						console.log("getAgreement ERROR");
						console.log(error);
					}
				);
			},
			// <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
			// 					openEditAgreement: function(agreementId) {
			// 						new agreementModel().get(agreementId).then(
			// 				    		function (response) {
			// 				    			console.log("getAgreement SUCCESS");
			// 				    			console.log(response.data);
			//
			// 				    			agreementSharedData.setAgreement(response.data);
			//
			// 				    			$state.go('home.agreement.edit');
			// 		        			},
			// 						    function (error) {
			// 						    	console.log("getAgreement ERROR");
			// 						    	console.log(error);
			// 						    }
			// 				    	);
			// 					},
			//
			// 					openDeleteAgreement: function(agreementId) {
			// 						new agreementModel().get(agreementId).then(
			// 				    		function (response) {
			// 				    			console.log("getAgreement SUCCESS");
			// 				    			console.log(response.data);
			//
			// 				    			agreementSharedData.setAgreement(response.data);
			//
			// 				    			$state.go('home.agreement.delete');
			// 		        			},
			// 						    function (error) {
			// 						    	console.log("getAgreement ERROR");
			// 						    	console.log(error);
			// 						    }
			// 				    	);
			// 					},
			// 					@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-->
			openEditAgreement: function(agreementId) {

				sharedService.showProgressBar();

				new agreementModel().get(agreementId).then(
					function(response) {
						console.log("getAgreement SUCCESS");
						console.log(response.data);

						agreementSharedData.setAgreement(response.data);

						$state.go('home.agreement.edit').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						console.log("getAgreement ERROR");
						console.log(error);
					}
				);
			},

			openDeleteAgreement: function(agreementId) {

				sharedService.showProgressBar();

				new agreementModel().get(agreementId).then(
					function(response) {
						console.log("getAgreement SUCCESS");
						console.log(response.data);

						agreementSharedData.setAgreement(response.data);

						$state.go('home.agreement.delete').then(function() {
							sharedService.hideProgressBar();
						});
					},
					function(error) {
						console.log("getAgreement ERROR");
						console.log(error);
					}
				);
			},
			openCreateAgreement: function() {

				sharedService.showProgressBar();

				$state.go('home.agreement.create').then(function() {
					sharedService.hideProgressBar();
				});
			}
		};
		return agreementManager;
	}
})();
