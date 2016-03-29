(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:leadCtrl
	* @description
	* # leadCtrl
	* Controller of the app
	*/

  	angular
		.module('lead')
		.controller('LeadCtrl', Lead);

		Lead.$inject = ['$state','leadManager','leadSharedData'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Lead($state,leadManager,leadSharedData) {
			/*jshint validthis: true */
			var vm = this;

			function setUpUiGrid() {

				vm.gridOptions = {};
				vm.gridOptions.enableHorizontalScrollbar = 2;
				vm.gridOptions.enableVerticalScrollbar = 2;
				vm.gridOptions.enableFiltering=true;

				vm.gridOptions.columnDefs = [
                       { field: 'leadId',
                         /*cellTemplate: '<div>' +
                           '<a ng-click="grid.appScope.vm.viewLead(row)" >{{row.entity.leadId}}</a>' +
                           '</div>'*/
                           cellTemplate:'<md-button class="md-primary" aria-label="leadId" ng-click="grid.appScope.vm.viewLead(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
                       },
                       { field: 'creationDate' },
                       { field: 'compName' },
                       { field: 'abn' },
                       { field: 'firstName' },
                       { field: 'lastName' },
                       { field: 'eMail' },
                       { field: 'contactNum' },
                       { name:  'Actions',
                         /*cellTemplate: '<div><md-button id="editLead" ng-click="grid.appScope.vm.editLead(row)">E</md-button><md-button id="deleteLead" ng-click="grid.appScope.vm.deleteLead(row)">D</md-button></div>',*/
                         cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.editLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.deleteLead(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
						 /*cellTemplate: '<md-button class="md-icon-button md-primary" aria-label="Edit"><md-icon md-font-library="material-icons">face</md-icon></md-button>',*/
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
			}

			if($state.current.name === 'home.lead.viewAll'){
				
				console.log("VIEW ALL LEADS");
				
				setUpUiGrid();

				vm.viewLead = function(row) {
			    	console.log("Inside viewLead");
			    	leadManager.getLead(row.entity.leadId)
			    	.then(
			    		function (response) {
			    			console.log("getLead SUCCESS");
			    			console.log(response.data);

			    			leadSharedData.set(response.data);

			    			$state.go('home.lead.view');
	        			},
					    function (error) {
					    	console.log("getLead ERROR");
					    	console.log(error);
					    }
			    	);
			    };
			    
			    vm.editLead = function(row) {

			    	console.log("inside editLead");
			    	leadManager.getLead(row.entity.leadId)
			    	.then(
			    		function (response) {
			    			console.log("getLead SUCCESS");
			    			console.log(response.data);

			    			leadSharedData.set(response.data);

			    			$state.go('home.lead.edit');
	        			},
					    function (error) {
					    	console.log("getLead ERROR");
					    	console.log(error);
					    }
			    	);
			    };

			    vm.deleteLead = function(row) {

			    	var index = vm.gridOptions.data.indexOf(row.entity);

			    	if(confirm('Are you sure you want to delete?')){

			        	leadManager.deleteLead(row.entity.leadId)
			        	.then(
				        	function (response) {
		        				vm.gridOptions.data.splice(index, 1);
				        	},
						    function (error) {
						    	alert('Error While deleting Lead: '+ error.message );
						    }
				        )
			        }
			        else {
			        	console.log("Lead deletion cancelled by User");
			        }
			    };

			    vm.createLead = function() {
			    	$state.go('home.lead.create');
			    };
			}

			if($state.current.name === 'home.lead.create'){

				console.log("CREATE LEAD");

				vm.saveLead = function(lead){
					console.log("Inside saveLead()");
					console.log("lead : ");
					console.log(lead);

					leadManager.saveLead(lead);
				};
			}
			if($state.current.name === 'home.lead.edit'){
				console.log("EDIT LEAD");
				vm.lead = leadSharedData.get();
				leadSharedData.reset();

				vm.updateLead = function(lead){
					console.log("Inside updateLead()");
					console.log("lead : ");
					console.log(lead);

					leadManager.updateLead(lead);
				};

			}
			if($state.current.name === 'home.lead.view'){
				console.log("VIEW LEAD");
				vm.lead = leadSharedData.get();
				leadSharedData.reset();
			}
			if($state.current.name === 'home.lead.delete'){
				console.log("DELETE LEAD");
			}
		}
})();
