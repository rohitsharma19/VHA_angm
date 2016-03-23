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

		Lead.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Lead($state) {
			/*jshint validthis: true */
			var vm = this;

			if($state.current.name === 'home.lead.viewAll'){
				
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

                vm.myData = [{
				        "creationDate": "22-03-2016",
				        "compName": "TCS",
				        "abn": "123",
				        "firstName": "Rohit",
				        "lastName" : "Sharma",
				        "eMail" : "rohit@gmail.com",
				        "contactNum" : "999971618"
				    }
				];
			}

			/*vm.saveLead = function(lead){
				console.log("inside save lead method");
				$state.go("home.opportunityCreation");
			};*/
		}
})();
