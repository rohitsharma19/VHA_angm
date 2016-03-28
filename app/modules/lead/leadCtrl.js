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

		Lead.$inject = ['$state','leadManager'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Lead($state,leadManager) {
			/*jshint validthis: true */
			var vm = this;

			function setUpUiGrid() {

				vm.gridOptions = {};
				vm.gridOptions.enableHorizontalScrollbar = 2;
				vm.gridOptions.enableVerticalScrollbar = 2;
				vm.gridOptions.enableFiltering=true;

				vm.gridOptions.columnDefs = [
                       { field: 'leadId',
                         cellTemplate: '<div>' +
                           '<a ng-click="grid.appScope.actionLead(row,\'view\')" >{{row.entity.leadId}}</a>' +
                           '</div>'
                       },
                       { field: 'creationDate' },
                       { field: 'compName' },
                       { field: 'abn' },
                       { field: 'firstName' },
                       { field: 'lastName' },
                       { field: 'eMail' },
                       { field: 'contactNum' },
                       { name:  'Actions',
                         cellTemplate: '<div><md-button ng-click="grid.appScope.actionLead(row,\'edit\')">E</md-button></div>',
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

			vm.actionLead = function(row,mode) {

		    	console.log("inside actionLead");
		    	shared.set(row.entity);
		    	shared.setPreviewMode(mode);
				$location.path("vha_editLead");
		    };

			if($state.current.name === 'home.lead.viewAll'){
				
				console.log("VIEW ALL LEADS");
				
				setUpUiGrid();

				vm.actionLead = function(row,mode) {

			    	console.log("inside actionLead");
			    	shared.set(row.entity);
			    	shared.setPreviewMode(mode);
    				$location.path("vha_editLead");
			    };
			    
			    vm.deleteLead = function(row) {

			    	var index = $scope.gridOptions.data.indexOf(row.entity);

			    	if(confirm('Are you sure you want to delete?')){

			        	leadManager.deleteLead(row.entity.leadId)
			        	.then(
				        	function (response) {
		        				$scope.gridOptions.data.splice(index, 1);
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
				
			}
			if($state.current.name === 'home.lead.view'){
				console.log("VIEW LEAD");
				
			}
			if($state.current.name === 'home.lead.delete'){
				console.log("DELETE LEAD");
			}

			
		}
})();
