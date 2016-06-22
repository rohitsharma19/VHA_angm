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
					"label": "Lead Source",
					"key": "leadSource"
				},{
					"label": "Lead Type",
					"key": "leadType"
				}, {
					"label": "Organisation TIN",
					"key": "organizationTIN"
				},{
					"label": "Organisation Name",
					"key": "organizationName"
				}, {
					"label": "Organisation Group",
					"key": "organizationGroup"
				}, {
					"label": "Organisation Short Code",
					"key": "organisationShortCode"
				}, {
					"label": "Trading As",
					"key": "tradingAs"
				},{
					"label": "Email",
					"key": "eMail"
				},{
					"label": "Contact Number",
					"key": "contactNum"
				},{
					"label": "Territory Code",
					"key": "territoryCode"
				},
				// {
				// 	"label": "Expected Closure Date",
				// 	"key": "expectedClosureDate"
				// }, {
				// 	"label": "Title",
				// 	"key": "tempContact.title"
				// },{
				// 	"label": "First Name",
				// 	"key": "tempContact.firstName"
				// },{
				// 	"label": "Last Name",
				// 	"key": "tempContact.lastName"
				// },{
				// 	"label": "Trading As",
				// 	"key": "tradingAs"
				// },{
				// 	"label": "Date of Birth",
				// 	"key": "tempContact.dob"
				// },{
				// 	"label": "Email",
				// 	"key": "tempContact.eMail"
				// },{
				// 	"label": "Phone Number",
				// 	"key": "tempContact.contactNum"
				// },{
				// 	"label": "Gender",
				// 	"key": "tempContact.gender"
				// },{
				// 	"label": "Preferred Mode Of Communication",
				// 	"key": "tempContact.preferredModeOfCommunication"
				// }, {
				// 	"label": "Contact Role",
				// 	"key": "tempContact.contactRole"
				// },{
				// 	"label": "Address Line 1",
				// 	"key": "tempContact.addressLine1"
				// },{
				// 	"label": "Address Line 2",
				// 	"key": "tempContact.addressLine2"
				// },{
				// 	"label": "Town",
				// 	"key": "tempContact.town"
				// },{
				// 	"label": "PIN",
				// 	"key": "tempContact.pin"
				// },{
				// 	"label": "City",
				// 	"key": "tempContact.city"
				// },{
				// 	"label": "State",
				// 	"key": "tempContact.state"
				// },{
				// 	"label": "Country",
				// 	"key": "tempContact.country"
				// },
				{
					"label": "Number Of Employees",
					"key": "numberOfEmployees"
				},{
					"label": "Industry Type",
					"key": "industryType"
				},{
					"label": "Customer Segment",
					"key": "customerSegment"
				},{
					"label": "Customer Category",
					"key": "customerCategory"
				}, {
					"label": "Business Stage",
					"key": "businessStage"
				}, {
					"label": "Annual TurnOver",
					"key": "annualTurnOver"
				}, {
					"label": "Status",
					"key": "status"
				}, {
					"label": "Assign To Group",
					"key": "assignToGrp"
				}, {
					"label": "Assign To User",
					"key": "assignToUser"
				}, {
					"label": "Created By User",
					"key": "createdByUser"
				}, {
					"label": "Created By Group",
					"key": "createdByGroup"
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
