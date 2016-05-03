(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:opportunityService
	 * @description
	 * # opportunityService
	 * Service of the app
	 */

	angular
		.module('opportunity')
		.factory('opportunitySharedData', Opportunity);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Opportunity.$inject = ['$http'];

	function Opportunity($http) {

		//var opportunityMode = null;
		var opportunitySharedData = null;

		var commPrefFields = [
		{
			"type": "select",
			"key": "serviceType",
			"templateOptions": {
				"label": "Service Type",
				"theme": "",
				"multiple": false,
				"styleElements": "display:block;",
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "Voice",
					"value": "Voice"
				}, {
					"label": "Data",
					"value": "Data"
				}]
			}
		},
		{
			"type": "select",
			"key": "planType",
			"templateOptions": {
				"label": "Plan Type",
				"theme": "",
				"multiple": false,
				"styleElements": "display:block;",
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "SIM Only",
					"value": "SIM Only"
				}, {
					"label": "Option 2",
					"value": "Option 2"
				}]
			}
		},
		{
			"type": "select",
			"key": "serviceType",
			"templateOptions": {
				"label": "Service Type",
				"theme": "",
				"multiple": false,
				"styleElements": "display:block;",
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "Voice",
					"value": "Voice"
				}, {
					"label": "Data",
					"value": "Data"
				}]
			}
		},
		{
			"type": "select",
			"key": "planType",
			"templateOptions": {
				"label": "Plan Type",
				"theme": "",
				"multiple": false,
				"styleElements": "display:block;",
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "SIM Only",
					"value": "SIM Only"
				}, {
					"label": "Option 2",
					"value": "Option 2"
				}]
			}
		}
	 ];


	 var contactFields = [{
		 "elementAttributes": {
			 "layout": "row",
			 "layout-sm": "column"
		 },
		 "fieldGroup": [{
			 "type": "select",
			 "key": "title",
			 "className": "flex-20",
			 "templateOptions": {
				 "label": "Title",
				 "theme": "",
				 "multiple": true,
				 "styleElements": "display:block;",
				 "labelProp": "label",
				 "valueProp": "value",
				 "options": [{
					 "label": "Mr.",
					 "value": "Mr."
				 }, {
					 "label": "Mrs.",
					 "value": "Mrs."
				 }, {
					 "label": "Ms.",
					 "value": "Ms."
				 }]
			 }
		 }, {
			 "key": "firstName",
			 "className": "flex-40",
			 "type": "input",
			 "templateOptions": {
				 "label": "First Name",
				 "styleElements": "display:block;"
			 }
		 }, {
			 "key": "lastName",
			 "className": "flex-40",
			 "type": "input",
			 "templateOptions": {
				 "label": "Last Name",
				 "styleElements": "display:block;"
			 }
		 }]
	 }, {
		 "type": "datepicker",
		 "key": "dtOfBirth",
		 "templateOptions": {
			 "theme": "custom",
			 "placeholder": "Date of Birth",
			 "styleElements": "display:block;",
			 "label": "Date of Birth"
		 }
	 }, {
		 "key": "email",
		 "type": "input",
		 "templateOptions": {
			 "label": "E mail",
			 "type": "email",
			 "styleElements": "display:block;"
		 }
	 }, {
		 "key": "contactNum",
		 "type": "input",
		 "templateOptions": {
			 "label": "Phone Number",
			 "type": "number",
			 "styleElements": "display:block;"
		 }
	 }, {
		 "type": "select",
		 "key": "contactRole",
		 "templateOptions": {
			 "label": "Contact Mode",
			 "theme": "",
			 "styleElements": "display:block;",
			 "multiple": true,
			 "labelProp": "label",
			 "valueProp": "value",
			 "options": [{
				 "label": "Billing",
				 "value": "Billing"
			 }, {
				 "label": "Non-Billing",
				 "value": "Non-Billing"
			 }],
			 "flex": ""
		 }
	 }, {
		 "type": "select",
		 "key": "prefModOfCom",
		 "templateOptions": {
			 "label": "Preferred Mode of Communication",
			 "theme": "",
			 "styleElements": "display:block;",
			 "multiple": true,
			 "labelProp": "label",
			 "valueProp": "value",
			 "options": [{
				 "label": "Phone",
				 "value": "Phone"
			 }, {
				 "label": "Email",
				 "value": "Email"
			 }],
			 "flex": ""
		 }
	 }];

	 var additionalDetailFields = [{
		 "type": "select",
		 "key": "assignToGrp",
		 "templateOptions": {
			 "label": "Assigned To Group",
			 "theme": "",
			 "styleElements": "display:block;",
			 "multiple": true,
			 "labelProp": "label",
			 "valueProp": "value",
			 "options": [{
				 "label": "Sales 1",
				 "value": "Sales 1"
			 }, {
				 "label": "Sales 2",
				 "value": "Sales 2"
			 }],
			 "flex": ""
		 }
	 }, {
		 "type": "select",
		 "key": "assignToUser",
		 "templateOptions": {
			 "label": "Assigned To User",
			 "theme": "",
			 "styleElements": "display:block;",
			 "multiple": true,
			 "labelProp": "label",
			 "valueProp": "value",
			 "options": [{
				 "label": "Exective 1",
				 "value": "Exective 1"
			 }, {
				 "label": "Exective 2",
				 "value": "Exective 2"
			 }],
			 "flex": ""
		 }
	 }, {
		 "type": "select",
		 "key": "createdByGroup",
		 "templateOptions": {
			 "label": "Created By Organization",
			 "theme": "",
			 "styleElements": "display:block;",
			 "multiple": true,
			 "labelProp": "label",
			 "valueProp": "value",
			 "options": [{
				 "label": "Third Party",
				 "value": "Third Party"
			 }, {
				 "label": "XXX",
				 "value": "XXX"
			 }],
			 "flex": ""
		 }
	 }];

	 var tabs = [{
		 title: 'Communication Preferences',
		 active: true,
		 form: {
			 options: {},
			 fields: commPrefFields
		 }
	 }, {
		 title: 'Contact',
		 form: {
			 options: {},
			 fields: contactFields
		 }
	 }, {
		 title: 'Additional Details',
		 form: {
			 options: {},
			 fields: additionalDetailFields
		 }
	 }];


	 var opportunity_CRUD = [{
			 type: 'card_progressTracker',
			 templateOptions: {
				 totalSteps: 5,
				 steps: [{
					 status: 'done',
					 label: 'Capture Initial Details'
				 }, {
					 status: 'todo',
					 label: 'Know your customer'
				 }, {
					 status: 'todo',
					 label: 'Recommendations'
				 }, {
					 status: 'todo',
					 label: 'Generate quote'
				 }, {
					 status: 'todo',
					 label: 'Generate agreement'
				 }],
				 card: {
					 imagePath: "",
					 headline: "",
					 actions: ''
				 }
			 },
			 hideExpression: 'model.opportunityMode!="QuickCreate"'
		 }, {
			 type: 'card_tabset',
			 templateOptions: {
				 tabs: tabs,
				 card: {
					 imagePath: "",
					 headline: "Opportunity",
					 actions: []
				 }
			 }
		 }, {
			 type: 'button',
			 templateOptions: {
				 label: 'Create Opportunity',
				 class: 'md-raised md-primary',
				 method: 'createOpportunity'
			 },
			 hideExpression: 'model.opportunityMode!="QuickCreate" && model.opportunityMode!="Create"'
		 }, {
			 type: 'button',
			 templateOptions: {
				 label: 'Update Opportunity',
				 class: 'md-raised md-primary',
				 method: 'updateOpportunity'
			 },
			 hideExpression: 'model.opportunityMode!="Update"'
		 }, {
			 type: 'button',
			 templateOptions: {
				 label: 'Delete Opportunity',
				 class: 'md-raised md-primary',
				 method: 'deleteOpportunity'
			 },
			 hideExpression: 'model.opportunityMode!="Delete"'
		 },
		 //  {
		 // 	type: 'test'
		 // }
	 ];


		return {
			/*setOpportunityMode : function(mode){
				opportunityMode = mode;
			},
			getOpportunityMode : function(){
				return opportunityMode;
			},
			resetOpportunityMode : function(){
				opportunityMode = null;
			},*/
			setOpportunity: function(opportunityData) {
				opportunitySharedData = opportunityData;
			},
			getOpportunity: function() {
				return opportunitySharedData;
			},
			resetOpportunity: function() {
				opportunitySharedData = null;
			},
			getLayout: function(view) {
				if (view === 'opportunity_CRUD') {
					return JSON.stringify(opportunity_CRUD);
				} else if (view === 'opportunity_viewAll') {
					return JSON.stringify(opportunity_viewAll);
				}
			}
		}
	}
})();
