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
		// var lead_CRUD = [
		// 			{
		// 					type: 'input',
		// 					key: 'lead.abn',
		// 					templateOptions: {
		// 						type: 'text',
		// 						label:'ABN Number'
		// 					}
		// 			},
		// 			{
		// 					type: 'input',
		// 					key: 'lead.acn',
		// 					templateOptions: {
		// 						type: 'text',
		// 						label:'ACN'
		// 					}
		// 			},
		// 			{
		// 					type: 'input',
		// 					key: 'lead.compName',
		// 					templateOptions: {
		// 						type: 'text',
		// 						label:'Company Name'
		// 					}
		// 			},
		// 			{
		// 					type: 'select',
		// 					key: 'lead.custType',
		// 					templateOptions: {
		// 						label:'Customer Type',
		// 						labelProp: "custType",
		// 				    valueProp: "id",
		// 				    options: [
		// 				        {custType: "New", id: 1},
		// 				        {custType: "Existing", id: 2}
		// 				    ]
		// 					}
		// 			},
		// 			{
		// 					type: 'input',
		// 					key: 'lead.pin',
		// 					templateOptions: {
		// 						type: 'text',
		// 						label:'PIN'
		// 					}
		// 			},
		// 			{
		// 					type: 'input',
		// 					key: 'lead.tradingAs',
		// 					templateOptions: {
		// 						type: 'text',
		// 						label:'Trading As'
		// 					}
		// 			},
		// 			{
		// 					type: 'test',
		// 					key: 'test',
		// 			},
		// 			{
		// 					type: 'test1',
		// 					key: 'test1',
		// 			},
		//
		// 	];

		var basicDetailFields = [{
			"key": "abn",
			"type": "input",
			"templateOptions": {
				"label": "ABN Number",
				"type": "text"
			}
		}, {
			"key": "accName",
			"type": "input",
			"templateOptions": {
				"label": "Account Name",
				"type": "text"
			}
		}, {
			"key": "acn",
			"type": "input",
			"templateOptions": {
				"label": "ACN",
				"type": "text"
			}
		}, {
			"key": "compName",
			"type": "input",
			"templateOptions": {
				"label": "Company Name",
				"type": "text"
			}
		}, {
			"type": "select",
			"key": "custType",
			"templateOptions": {
				"label": "Customer Type",
				"theme": "",
				"multiple": true,
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
				"type": "text"
			}
		}, {
			"key": "tradingAs",
			"type": "input",
			"templateOptions": {
				"label": "Trading As",
				"type": "text"
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
				"templateOptions": {
					"label": "Title",
					"theme": "",
					"multiple": true,
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
					}],
					"flex":"20"
				}
			}, {
				"key": "firstName",
				"className": "flex",
				"type": "input",
				"templateOptions": {
					"label": "First Name",
					"flex":"40"
				}
			}, {
				"key": "lastName",
				"className": "flex",
				"type": "input",
				"templateOptions": {
					"label": "Last Name",
					"flex":"40"
				}
			}]
		}];

		var segementationFields = [
			// 	{
			// 	"key": "lead.businessStage",
			// 	"templateOptions": {
			// 		"width": "12",
			// 		"label": "Choose Service Type",
			// 		"placeholder": "placeholder",
			// 		"valueProp": "value",
			// 		"keyProp": "name",
			// 		"options": [{
			// 			"name": "Sim Only",
			// 			"value": "Sim Only"
			// 		}, {
			// 			"name": "Device Only",
			// 			"value": "Device Only"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "radio",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"noFormControl": false,
			// 	"id": "formly_2_radio_lead.businessStage_0"
			// }, {
			// 	"key": "planType.value",
			// 	"templateOptions": {
			// 		"width": "12",
			// 		"label": "Choose Service Type",
			// 		"placeholder": "placeholder",
			// 		"valueProp": "value",
			// 		"keyProp": "name",
			// 		"options": [{
			// 			"name": "Voice",
			// 			"value": "Voice"
			// 		}, {
			// 			"name": "Mobile Broadband",
			// 			"value": "Mobile Broadband"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "radio",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"noFormControl": false,
			// 	"id": "formly_2_radio_planType.value_1"
			// }
		];

		var additionalDetailFields = [
			// 	{
			// 	"key": "lead.assignToGrp",
			// 	"templateOptions": {
			// 		"width": "6",
			// 		"required": true,
			// 		"label": "Assigned To Group",
			// 		"placeholder": "placeholder",
			// 		"options": [{
			// 			"name": "Sales 1",
			// 			"value": "Sales 1"
			// 		}, {
			// 			"name": "Sales 2",
			// 			"value": "Sales 2"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "select",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"ngModelAttrs": {
			// 		"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options": {
			// 			"value": "ng-options"
			// 		}
			// 	},
			// 	"id": "formly_2_select_lead.assignToGrp_0"
			// }, {
			// 	"key": "lead.assignToUser",
			// 	"templateOptions": {
			// 		"width": "6",
			// 		"required": true,
			// 		"label": "Assigned To User",
			// 		"placeholder": "placeholder",
			// 		"options": [{
			// 			"name": "Executive 1",
			// 			"value": "Executive 1"
			// 		}, {
			// 			"name": "Executive 2",
			// 			"value": "Executive 2"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "select",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"ngModelAttrs": {
			// 		"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options": {
			// 			"value": "ng-options"
			// 		}
			// 	},
			// 	"id": "formly_2_select_lead.assignToUser_1"
			// }, {
			// 	"key": "lead.createdByGroup",
			// 	"templateOptions": {
			// 		"width": "6",
			// 		"required": true,
			// 		"label": "Lead Created By Organisation",
			// 		"placeholder": "placeholder",
			// 		"options": [{
			// 			"name": "Third Party",
			// 			"value": "Third Party"
			// 		}, {
			// 			"name": "Demo Party",
			// 			"value": "Demo Party"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "select",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"ngModelAttrs": {
			// 		"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options": {
			// 			"value": "ng-options"
			// 		}
			// 	},
			// 	"id": "formly_2_select_lead.createdByGroup_2"
			// }, {
			// 	"key": "lead.createdByUser",
			// 	"templateOptions": {
			// 		"width": "6",
			// 		"required": true,
			// 		"label": "Created By User",
			// 		"placeholder": "placeholder",
			// 		"options": [{
			// 			"name": "Tom",
			// 			"value": "Tom"
			// 		}, {
			// 			"name": "Leo",
			// 			"value": "Leo"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "select",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"ngModelAttrs": {
			// 		"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options": {
			// 			"value": "ng-options"
			// 		}
			// 	},
			// 	"id": "formly_2_select_lead.createdByUser_3"
			// }, {
			// 	"key": "lead.status",
			// 	"templateOptions": {
			// 		"width": "6",
			// 		"required": true,
			// 		"label": "Status",
			// 		"placeholder": "placeholder",
			// 		"options": [{
			// 			"name": "New",
			// 			"value": "New"
			// 		}, {
			// 			"name": "Existing",
			// 			"value": "Existing"
			// 		}]
			// 	},
			// 	"className": "",
			// 	"type": "select",
			// 	"data": {},
			// 	"validation": {
			// 		"messages": {}
			// 	},
			// 	"ngModelAttrs": {
			// 		"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options": {
			// 			"value": "ng-options"
			// 		}
			// 	},
			// 	"id": "formly_2_select_lead.status_4"
			// }
		];

		var tabs = [{
			title: 'Basic Details',
			active: true,
			form: {
				options: {},
				model: 'vm.lead',
				fields: basicDetailFields
			}
		}, {
			title: 'Contact',
			form: {
				options: {},
				model: 'vm.lead',
				fields: contactFields
			}
		}, {
			title: 'Segementation',
			form: {
				options: {},
				model: 'vm.lead',
				fields: segementationFields
			}
		}, {
			title: 'Additional Details',
			form: {
				options: {},
				model: 'vm.lead',
				fields: additionalDetailFields
			}
		}];



		var lead_CRUD = [{
			type: 'tabs',
			templateOptions: {
				tabs: tabs
					// 	[
					// 		{
					// 		title: 'Basic Details',
					// 		active: true,
					// 		form: {
					// 			options: {},
					// 			model: vm.lead,
					// 			fields: vm.basicDetailFields
					// 		}
					// 	},
					// 	{
					// 		title: 'Contact',
					// 		form: {
					// 			options: {},
					// 			model: vm.lead,
					// 			fields: vm.contactFields
					// 		}
					// 	},
					// 	{
					// 		title: 'Segementation',
					// 		form: {
					// 			options: {},
					// 			model: vm.lead,
					// 			fields: vm.segementationFields
					// 		}
					// 	},
					// 	{
					// 		title: 'Additional Details',
					// 		form: {
					// 			options: {},
					// 			model: vm.lead,
					// 			fields: vm.additionalDetailFields
					// 		}
					// 	}
					// ]
			}
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
					return lead_CRUD;
				}
			}
		}
	}
})();
