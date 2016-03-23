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

			vm.saveLead = function(lead){
				console.log("inside save lead method");
				$state.go("home.opportunityCreation");
			};

			vm.myData = [
			    {
			        "firstName": "Cox",
			        "lastName": "Carney",
			        "company": "Enormo",
			        "employed": true
			    },
			    {
			        "firstName": "Lorraine",
			        "lastName": "Wise",
			        "company": "Comveyer",
			        "employed": false
			    },
			    {
			        "firstName": "Nancy",
			        "lastName": "Waters",
			        "company": "Fuelton",
			        "employed": false
			    }
			];

		}

		/*function setUpUiGrid() {
		
	    $scope.gridOptions = {};
		$scope.gridOptions.enableHorizontalScrollbar = 2;
		$scope.gridOptions.enableVerticalScrollbar = 2;
		$scope.gridOptions.enableFiltering=true;

		$scope.gridOptions.columnDefs = [
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
		}*/



})();
