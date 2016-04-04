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

		Agreement.$inject = ['$state','agreementModel','agreementSharedData'];

		function Agreement ($state,agreementModel,agreementSharedData) {


			var agreementManager = {

		    		getAgreement: function(agreementId) {
		    			//return new agreementModel().get(agreementId);
		    			var agreement = new agreementModel();
		    			return agreement.get(agreementId);
		    		},
		    		
				    getAllAgreements: function() {
				    		//return $http.get("http://203.200.67.15/VHAMW/webapi/Agreement");
				    		var agreement = new agreementModel();
				    		return agreement.getAll();
				    },
				    
					createAgreement: function(agreementData) {
						
						if( agreementData==null  ){
							console.log("agreementData is null.");
							alert('Please fill in the required details.');	
						}
						else{
									agreementData.agreementId = "L" + Date.now();
									
									/* Creating formatted date */
								    var today = new Date();
								    var dd = today.getDate();
								    var mm = today.getMonth()+1; //January is 0!

								    var yyyy = today.getFullYear();
								    if(dd<10){
								        dd='0'+dd
								    } 
								    if(mm<10){
								        mm='0'+mm
								    } 
								    var today = yyyy+"-"+mm+"-"+dd;
								    /* Date formation ends here */
									
									//agreementData.creationDate = today;
									
									var agreement = new agreementModel(agreementData);
									agreement.save().then(
							        	function (response) {
					        				alert('Agreement '+ agreement.agreementId + ' created successfully.' );
					        				
					        				if($state.current.name === 'home.agreement.QuickCreate'){
												$state.go('home.dashboard');
											}
											else if($state.current.name === 'home.agreement.create'){
												$state.go('home.agreement.viewAll');
											}
					        			},
									    function (error) {
									    	alert('Error While creating Agreement ');
									    	console.log("Error While creating Agreement");
									    	console.log(error.data);
									    }
							        );
						}
					},
		    		
		    		updateAgreement: function(agreementData) {
		    			var agreement = new agreementModel(agreementData);
		    			agreement.update().then(
				        	function (response) {
		        				alert('Agreement '+ agreementData.agreementId + ' updated successfully.' );
		        				$state.go('home.agreement.viewAll');
		        			},
						    function (error) {
						    	alert('Error While deleting Agreement: '+ error.message );
						    }
				        );
		    		},
		    		
		    		deleteAgreement: function(agreementId) {
		    			if(confirm('Are you sure you want to delete this agreement?')){
		    				var agreement = new agreementModel();
		    				agreement.remove(agreementId).then(
					        	function (response) {
			        				alert('Agreement '+ agreementId + ' deleted successfully.' );
			        				$state.go('home.agreement.viewAll');
			        			},
							    function (error) {
							    	alert('Error While deleting Agreement: '+ error.message );
							    }
					        );
		    			}
		    			else{
				        	console.log("Agreement deletion cancelled by User");
				        }
		    		},

		    		setUpUiGrid: function(vm) {

						vm.gridOptions = {};
						vm.gridOptions.enableHorizontalScrollbar = 2;
						vm.gridOptions.enableVerticalScrollbar = 2;
						vm.gridOptions.enableFiltering=true;

						vm.gridOptions.columnDefs = [
								{ field: 'agreementId',
									cellTemplate:'<md-button class="md-primary" aria-label="agreementId" ng-click="grid.appScope.vm.openViewAgreement(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.agreementId}}</md-button>'
								},
								{ field: 'agremntStartDate' },
								{ field: 'agremntEndDate' },
								{ field: 'agremntEffecDate' },
								/*{ field: 'currency' },
								{ field: 'agremntVersion' },
								{ field: 'contractTerm' },
								{ field: 'agremntStatus' },
								{ field: 'offerName' },*/
								{ field: 'listPrice' },
								/*{ field: 'salePrice' },
								{ field: 'quantity' },
								{ field: 'totalPrice' },
								{ field: 'agremntTmplateType' },
								{ field: 'renewalTerm' },
								{ field: 'origAgremntId' },
								{ field: 'expecRevenue' },
								{ field: 'internalContact' },
								{ field: 'internalContactRole' },
								{ field: 'custContact' },
								{ field: 'custContactRole' },
								{ field: 'autoRenewFlag' },
								{ field: 'agremntType' },
								{ field: 'agremntDocId' },
								{ field: 'agremntDocName' },*/
								{ field: 'agremntDocVer' },
								{ field: 'agremntDocType' },
								{ field: 'serviceReqDate' },
								{ name:  'Actions',
									cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditAgreement(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteAgreement(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
									enableFiltering:false
								}
		                ];

		                agreementManager.getAllAgreements().then(
							function (response) {
								console.log("getAllAgreements SUCCESS");
								console.log("data received");
								console.log(response.data);
								
								vm.gridOptions.data = response.data;
							},
						    function (error) {
						        console.log("getAllAgreements ERROR : " + error.message);
						});

						return vm;
					},

					openViewAgreement: function(agreementId) {
						new agreementModel().get(agreementId).then(	
				    		function (response) {
				    			console.log("getAgreement SUCCESS");
				    			console.log(response.data);

				    			agreementSharedData.setAgreement(response.data);

				    			$state.go('home.agreement.view');
		        			},
						    function (error) {
						    	console.log("getAgreement ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openEditAgreement: function(agreementId) {
						new agreementModel().get(agreementId).then(	
				    		function (response) {
				    			console.log("getAgreement SUCCESS");
				    			console.log(response.data);

				    			agreementSharedData.setAgreement(response.data);

				    			$state.go('home.agreement.edit');
		        			},
						    function (error) {
						    	console.log("getAgreement ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openDeleteAgreement: function(agreementId) {
						new agreementModel().get(agreementId).then(	
				    		function (response) {
				    			console.log("getAgreement SUCCESS");
				    			console.log(response.data);

				    			agreementSharedData.setAgreement(response.data);

				    			$state.go('home.agreement.delete');
		        			},
						    function (error) {
						    	console.log("getAgreement ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openCreateAgreement: function() {
						$state.go('home.agreement.create');
					}
		    };
		    return agreementManager;
		}
})();
