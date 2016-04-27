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

		var basicDetailFields = [{
			"key": "abn",
			"type": "input",
			"templateOptions": {
				"label": "ABN Number",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "accName",
			"type": "input",
			"templateOptions": {
				"label": "Account Name",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "acn",
			"type": "input",
			"templateOptions": {
				"label": "ACN",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "compName",
			"type": "input",
			"templateOptions": {
				"label": "Company Name",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"type": "select",
			"key": "custType",
			"templateOptions": {
				"label": "Customer Type",
				"theme": "",
				"multiple": true,
				"styleElements": "display:block;",
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "New",
					"value": "New"
				}, {
					"label": "Existing",
					"value": "Existing"
				}]
			}
		}, {
			"key": "pin",
			"type": "input",
			"templateOptions": {
				"label": "PIN",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "tradingAs",
			"type": "input",
			"templateOptions": {
				"label": "Trading As",
				"type": "text",
				"styleElements": "display:block;"
			}
		}];

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

		var segementationFields = [{
			"type": "select",
			"key": "serviceType",
			"templateOptions": {
				"label": "Choose Service Type",
				"theme": "",
				"styleElements": "display:block;",
				"multiple": true,
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "Sim Only",
					"value": "Sim Only"
				}, {
					"label": "With Device Only",
					"value": "With Device Only"
				}],
				"flex": ""
			}
		}, {
			"type": "select",
			"key": "planType",
			"templateOptions": {
				"label": "Choose Plan Type",
				"theme": "",
				"styleElements": "display:block;",
				"multiple": true,
				"labelProp": "label",
				"valueProp": "value",
				"options": [{
					"label": "Voice",
					"value": "Voice"
				}, {
					"label": "Mobile Broadband",
					"value": "Mobile Broadband"
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
			title: 'Basic Details',
			active: true,
			form: {
				options: {},
				fields: basicDetailFields
			}
		}, {
			title: 'Contact',
			form: {
				options: {},
				fields: contactFields
			}
		}, {
			title: 'Segementation',
			form: {
				options: {},
				fields: segementationFields
			}
		}, {
			title: 'Additional Details',
			form: {
				options: {},
				fields: additionalDetailFields
			}
		}];

		var lead_CRUD = [{
			type: 'card_progressTracker',
			templateOptions: {
				totalSteps: 5,
				steps: [{
					status: 'todo',
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
			hideExpression: 'model.leadMode!="QuickCreate"'
		}, {
			type: 'card_tabset',
			templateOptions: {
				tabs: tabs,
				card: {
					imagePath: "",
					headline: "Lead",
					actions: [
						// 	{
						// 	class: 'md-raised md-primary',
						// 	methodName: {
						// 		name: "createLead",
						// 		input: "lead"
						// 	},
						// 	label: 'Create Lead',
						// 	hideExpression: 'true'
						// }
					]
				}
			}
		}, {
			type: 'button',
			templateOptions: {
				label: 'Create Lead',
				class: 'md-raised md-primary',
				method: 'abc',
			},
			//hideExpression: 'model.leadMode!="QuickCreate"'
			// expressionProperties: {
			// 	'templateOptions.method': 'vm.createLead(vm.lead)'
			// }
		}, {
			type: 'test'
		}];



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
					return JSON.stringify(lead_CRUD);
				}
			}
		}
	}
})();
