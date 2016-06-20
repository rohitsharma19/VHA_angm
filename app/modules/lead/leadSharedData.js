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
		.factory('leadSharedData', Lead);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Lead.$inject = ['$http'];

	function Lead($http) {

		//var leadMode = null;
		var leadSharedData = null;

		var SummaryDialog = [{
			"type": "SummaryDialogBox",
			"templateOptions": {
				"heading": "Lead Summary",
				"style": "min-width:680px; min-height:310px;",
				"setOfFields": [{
					"label": "ABN Number",
					"key": "abn"
				}, {
					"label": "Account Name",
					"key": "accName"
				}, {
					"label": "ACN Number",
					"key": "acn"
				}, {
					"label": "Company Name",
					"key": "compName"
				}, {
					"label": "Customer Type",
					"key": "custType"
				}, {
					"label": "PIN",
					"key": "pin"
				}, {
					"label": "Trading As",
					"key": "tradingAs"
				}, {
					"label": "Title",
					"key": "title"
				}, {
					"label": "First Name",
					"key": "firstName"
				}, {
					"label": "Last Name",
					"key": "lastName"
				}, {
					"label": "Phone Number",
					"key": "contactNum"
				}, {
					"label": "Date Of Birth",
					"key": "dateOfBirth"
				}, {
					"label": "Email",
					"key": "eMail"
				}, {
					"label": "Contact Mode",
					"key": "contactRole"
				}, {
					"label": "Prefered Mode of Communication",
					"key": "prefModOfCom"
				}, {
					"label": "Industry Type",
					"key": "industryType"
				}, {
					"label": "Business Stage",
					"key": "businessStage"
				}, {
					"label": "Assigned To Group",
					"key": "assignToGrp"
				}, {
					"label": "Assigned To User",
					"key": "assignToUser"
				}, {
					"label": "Status",
					"key": "status"
				}]
			}
		}];


		// var lead_viewAll = [{
		// 	"key": "list",
		// 	"type": "uiGrid",
		// 	"wrapper": ["gridWrapper", "card_noHeaderNoActions"],
		// 	"templateOptions": {
		// 		"label": "Lead",
		// 		"cardLabel": "Leads",
		// 		"cardHeaderBackground": "rgb(33,150,243)",
		// 		"cardLabelColor": "white",
		// 		"columnDefs": [{
		// 			"field": "leadId"
		// 		}, {
		// 			"field": "compName"
		// 		}, {
		// 			"field": "abn"
		// 		}, {
		// 			"field": "firstName"
		// 		}, {
		// 			"field": "lastName"
		// 		}, {
		// 			"field": "eMail"
		// 		}, {
		// 			"field": "contactNum"
		// 		}, {
		// 			"name": "Actions",
		// 			"cellTemplate": "<md-button class='md-icon-button' ng-click=grid.appScope.clicked('openViewLead',row) style='min-width: 0px;'><md-icon style='color:rgb(68,138,255); vertical-align: baseline;'>remove_red_eye</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openEditLead',row) style='min-width: 0px;'><md-icon style='color:green; vertical-align: baseline;'>edit</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openDeleteLead',row) style='min-width: 0px;'><md-icon style='vertical-align: baseline; color:red;'>delete</md-icon></md-button>",
		// 			"enableFiltering": false
		// 		}],
		// 		"onRegisterApi": ""
		// 	}
		// }];


		return {

			setLead: function(leadData) {
				leadSharedData = leadData;
			},
			getLead: function() {
				return leadSharedData;
			},
			resetLead: function() {
				leadSharedData = null;
			},
			getLayout: function(view) {
				if (view === 'lead_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/leadCRUD.json');
				} else if (view === 'lead_viewAll') {
					return $http.get('app/modules/shared/pageStructureJSON/leadViewAll.json');
				} else if (view === 'SummaryDialog') {
					return JSON.stringify(SummaryDialog);
				}
			}
		};
	}
})();
