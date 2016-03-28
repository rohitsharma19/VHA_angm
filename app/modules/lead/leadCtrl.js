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
                         cellTemplate: '<div>' +
                             '<img ng-click="grid.appScope.actionLead(row,\'edit\')" src="http://icons.iconarchive.com/icons/custom-icon-design/office/16/edit-icon.png" alt="edit">' +
                             ' ' +
                             '<img ng-click="grid.appScope.deleteLead(row)" src="http://icons.iconarchive.com/icons/custom-icon-design/office/16/delete-icon.png" alt="delete">'+
                             '</div>',
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
			}

			if($state.current.name === 'home.lead.create'){

				console.log("CREATE LEAD");

				/*vm.lead = {
						"abn": null,
						"accName": null,
						"acn": null,
						"compName": null,
						"custType": null,
						"pin": null,
						"tradingAs": null,
						"title": null,
						"firstName": null,
						"lastName": null,
						"dob": null,
						"eMail": null,
						"contactNum": null,
						"contactRole": null,
						"prefModOfCom": null,
						"businessStage": null,
						"assignToGrp": null,
						"assignToUser": null,
						"createdByGroup": null,
						"createdByUser": null,
						"status": null
				};*/
				
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
