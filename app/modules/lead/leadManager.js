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

		Lead.$inject = ['$state','leadModel','leadSharedData'];

		function Lead ($state,leadModel,leadSharedData) {


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

						if( leadData===null  ){
							console.log("leadData is null.");
							alert('Please fill in the required details.');
						}
						else{
									var lead = new leadModel(leadData);
									lead.save().then(
							        	function (response) {
					        				alert('Lead '+ response.data.leadId + ' created successfully.' );
														console.log(response.data);
					        				if($state.current.name === 'home.lead.QuickCreate'){
					        					$state.go('home.opportunity.QuickCreate', {leadDetails: response.data});
					        				}
					        				else if($state.current.name === 'home.lead.create'){
					        					$state.go('home.lead.viewAll');
					        				}
					        			},
									    function (error) {
									    	alert('Error While creating Lead: '+ error.message );
									    	console.log("ERROR lead.save()");
									    	console.log(error.data);
									    }
							        );
						}
					},

		    		updateLead: function(leadData) {
		    			var lead = new leadModel(leadData);
		    			lead.update().then(
				        	function (response) {
		        				alert('Lead '+ leadData.leadId + ' updated successfully.' );
		        				$state.go('home.lead.viewAll');
		        			},
						    function (error) {
						    	alert('Error While deleting Lead: '+ error.message );
						    }
				        );
		    		},

		    		deleteLead: function(leadId) {
		    			if(confirm('Are you sure you want to delete this lead?')){
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

		    		inflateUiGrid: function(vm) {

						// vm.gridOptions = {};
						// vm.gridOptions.enableHorizontalScrollbar = 2;
						// vm.gridOptions.enableVerticalScrollbar = 2;
						// vm.gridOptions.enableFiltering=true;
						//
						// vm.gridOptions.columnDefs = [
		        //                { field: 'leadId',
		        //                  cellTemplate:'<md-button class="md-primary" aria-label="leadId" ng-click="grid.appScope.vm.openViewLead(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
		        //                },
		        //                { field: 'creationDate' },
		        //                { field: 'compName' },
		        //                { field: 'abn' },
		        //                { field: 'firstName' },
		        //                { field: 'lastName' },
		        //                { field: 'eMail' },
		        //                { field: 'contactNum' },
		        //                { name:  'Actions',
		        //                  cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteLead(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
						// 		 enableFiltering:false
		        //             	   }
		        //         ];

            leadManager.getAllLeads().then(
							function (response) {
								console.log("getAllLeads SUCCESS");
								console.log("data received");
								console.log(response.data);

								vm.leadsList = response.data;
								// vm.gridOptions.data = response.data;
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
