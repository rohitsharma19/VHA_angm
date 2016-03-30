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

		Lead.$inject = ['$state','$http','$q','leadModel','leadSharedData'];

		function Lead ($state,$http,$q,leadModel,leadSharedData) {


			var leadManager = {

		    		getLead: function(leadId) {
		    			return new leadModel().get(leadId);
		    		},
		    		
				    getAllLeads: function() {
				    		return $http.get("http://203.200.67.15/VHAMW/webapi/Lead");
				    },
				    
					saveLead: function(leadData) {
						
						//var deferred = $q.defer();
						if( leadData==null  ){
							console.log("leadData is null.");
							alert('Please fill in the required details.');	
							//deferred.reject("leadData is null.");
						}
						else{
									leadData.leadId = "L" + Date.now();
									
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
									
									leadData.creationDate = today;
									
									var lead = new leadModel(leadData);
									lead.save().then(
							        	function (response) {
					        				alert('Lead '+ lead.leadId + ' created successfully.' );
					        				$state.go('home.lead.viewAll');
					        				//deferred.resolve();
					        			},
									    function (error) {
									    	alert('Error While creating Lead: '+ error.message );
									    	//deferred.reject("Error adding new Lead");
									    }
							        );
						}
						//return deferred.promise;
		    		},
		    		
		    		updateLead: function(leadData) {
		    			return new leadModel(leadData).update();
		    		},
		    		
		    		deleteLead: function(leadId) {
		    			if(confirm('Are you sure you want to delete this lead?')){
		    				//return new leadModel().remove(leadId);
		    				var lead = new leadModel();
		    				lead.remove(leadId).then(
					        	function (response) {
			        				alert('Lead '+ leadId + ' deleted successfully.' );
			        				$state.go('home.lead.viewAll');
			        			},
							    function (error) {
							    	alert('Error While deleting Lead: '+ error.message );
							    }
					        );
		    			}
		    			else{
				        	console.log("Lead deletion cancelled by User");
				        }
		    		},

		    		setUpUiGrid: function(vm) {

						vm.gridOptions = {};
						vm.gridOptions.enableHorizontalScrollbar = 2;
						vm.gridOptions.enableVerticalScrollbar = 2;
						vm.gridOptions.enableFiltering=true;

						vm.gridOptions.columnDefs = [
		                       { field: 'leadId',
		                         cellTemplate:'<md-button class="md-primary" aria-label="leadId" ng-click="grid.appScope.vm.openViewLead(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
		                       },
		                       { field: 'creationDate' },
		                       { field: 'compName' },
		                       { field: 'abn' },
		                       { field: 'firstName' },
		                       { field: 'lastName' },
		                       { field: 'eMail' },
		                       { field: 'contactNum' },
		                       { name:  'Actions',
		                         cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteLead(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
								 enableFiltering:false
		                    	   }
		                ];

		                leadManager.getAllLeads().then(
							function (response) {
								console.log("getAllLeads SUCCESS");
								console.log("data received");
								console.log(response.data);
								
								vm.gridOptions.data = response.data;
							},
						    function (error) {
						        console.log("getAllLeads ERROR : " + error.message);
						});

						return vm;
					},

					openViewLead: function(leadId) {
						new leadModel().get(leadId).then(	
				    		function (response) {
				    			console.log("getLead SUCCESS");
				    			console.log(response.data);

				    			leadSharedData.setLead(response.data);

				    			$state.go('home.lead.view');
		        			},
						    function (error) {
						    	console.log("getLead ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openEditLead: function(leadId) {
						new leadModel().get(leadId).then(	
				    		function (response) {
				    			console.log("getLead SUCCESS");
				    			console.log(response.data);

				    			leadSharedData.setLead(response.data);

				    			$state.go('home.lead.edit');
		        			},
						    function (error) {
						    	console.log("getLead ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openDeleteLead: function(leadId) {
						new leadModel().get(leadId).then(	
				    		function (response) {
				    			console.log("getLead SUCCESS");
				    			console.log(response.data);

				    			leadSharedData.setLead(response.data);

				    			$state.go('home.lead.delete');
		        			},
						    function (error) {
						    	console.log("getLead ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openCreateLead: function() {
						$state.go('home.lead.create');
					}
		    };
		    return leadManager;
		}
})();