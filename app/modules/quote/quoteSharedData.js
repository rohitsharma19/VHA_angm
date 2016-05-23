(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:quoteService
	 * @description
	 * # quoteService
	 * Service of the app
	 */

	angular
		.module('quote')
		.factory('quoteSharedData', Quote);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Quote.$inject = ['$http'];

	function Quote($http) {

		//var quoteMode = null;
		var quoteSharedData = null;

		var quote_CRUD = [
			{
					type: 'card_progressTracker',
					templateOptions: {
						totalSteps: 5,
						steps: [{
							status: 'done',
							label: 'Capture Initial Details'
						}, {
							status: 'done',
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
						},
						style:"margin-top:5%;"
					}
				}, {
				"type": "topHeaderDetails",
				"templateOptions": {
					"objectType": "leadDetails",
					"style": "color:black; background-color: #80CBC4;",
					"class": "flex-33",
					"fields": [{
						"title": "Company Name",
						"key": "compName"
					}, {
						"title": "Created By User",
						"key": "createdByUser"
					}, {
						"title": "Lead status",
						// "type":"leadDetails",
						"key": "status"
					}]
				},
				// "hideExpression": "model.self.opportunityMode!=\"QuickCreate\"&& model.self.opportunityMode!=\"Update\""
			},
			{
  "wrapper": "card_noHeaderNoActions",
  "fieldGroup": [
    {
			"wrapper": "wrapper_tabset",
			"fieldGroup": [{
				"wrapper": "wrapper_tab",
				"templateOptions": {
					"title": "Offers",
					"active": true
				},
				"fieldGroup": [{
					"wrapper": "wrapper_div",
					"className": "layout-column layout-fill",
					"templateOptions": {
						"div_style": "height:700px;"
					},
					"fieldGroup": [{
						"className": "flex-100 layout-row",
						"elementAttributes": {
							"formlyFieldGroupClass": "flex-70 layout-row",
							"style": ""
						},
						"fieldGroup": [{
							"type": "itemsList",
							"elementAttributes": {
								"class": "layout-row flex-30"
							},
							"templateOptions": {
								"itemType": "Offer"
							}
						}, {
							"type": "itemDetail",
							"elementAttributes": {
								"class": "layout-row flex-40"
							},
							"templateOptions": {
								"itemType": "Offer_Device"
							}
						}, {
							"type": "itemsList",
							"elementAttributes": {
								"class": "layout-row flex-30"
							},
							"templateOptions": {
								"itemType": "Device"
							}
						}]
					}, {
						"className": "flex-100 layout-row",
						"elementAttributes": {
							"formlyFieldGroupClass": "flex-30 layout-row"
						},
						"fieldGroup": [{
							"type": "chips",
							"elementAttributes": {
								"class": "layout-row flex-100"
							},
							"templateOptions": {
								"itemType": "Offer_Device"
							}
						}]
					}]
				}]
			}, {
				"wrapper": "wrapper_tab",
				"templateOptions": {
					"title": "Discount",
					"active": true
				},
				"fieldGroup": [{
					"key": "list",
					"type": "ui-grid",
					"templateOptions": {
						"label": "Quote",
						"cardLabel": "View All Products",
						"columnDefs": [{
							"field": "name"
						}, {
							"field": "productCategory"
						}, {
							"field": "productType"
						}, {
							"field": "price"
						}, {
							"field": "quantity"
						}, {
							"name": "Discount",
							"field": "discount",
							"cellTemplate":'<input type="number" min=0 ng-change=grid.appScope.clicked("reCalculateTotal",row.entity) ng-model="MODEL_COL_FIELD"/>'
						}, {
							"name": "Total",
							"field": "total",
							"enableFiltering": false
						}],
						"onRegisterApi": ""
					}
				}]
			}, {
				"wrapper": "wrapper_tab",
				"templateOptions": {
					"title": "Summary",
					"active": true
				},
				"fieldGroup": [{
					"key": "list",
					"type": "ui-grid",
					"templateOptions": {
						"label": "Lead",
						"cardLabel": "View All Leads",
						"columnDefs": [{
							"field": "name"
						}, {
							"field": "productCategory"
						}, {
							"field": "productType"
						}, {
							"field": "price"
						}, {
							"field": "quantity"
						}, {
							"name": "Total",
							"field": "total",
							"enableFiltering": false
						}],
						"onRegisterApi": ""
					}
				}]
			}, {
				"wrapper": "wrapper_tab",
				"templateOptions": {
					"title": "Additional Details",
					"active": false
				},
				"fieldGroup": [{
					"type": "select",
					"key": "self.quoteCreatedBy",
					"templateOptions": {
						"label": "Assigned To Group",
						"theme": "",
						"styleElements": "display:block;",
						"multiple": false,
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
					"key": "self.assignedUser",
					"templateOptions": {
						"label": "Assigned To User",
						"theme": "",
						"styleElements": "display:block;",
						"multiple": false,
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
					"key": "self.assignedGroup",
					"templateOptions": {
						"label": "Created By Organization",
						"theme": "",
						"styleElements": "display:block;",
						"multiple": false,
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
				}]
			}]
		}
  ]
},
		{
	    "type": "button",
	    "templateOptions": {
	      "label": "Create Quote",
	      "class": "md-raised md-primary",
	      "method": "createQuote"
	    },
	    "hideExpression": "model.self.quoteMode!=\"QuickCreate\" && model.self.quoteMode!=\"Create\""
	  },
	  {
	    "type": "button",
	    "templateOptions": {
	      "label": "Update Quote",
	      "class": "md-raised md-primary",
	      "method": "updateQuote"
	    },
	    "hideExpression": "model.self.quoteMode!=\"Update\""
	  },
	  {
	    "type": "button",
	    "templateOptions": {
	      "label": "Delete Quote",
	      "class": "md-raised md-primary",
	      "method": "deleteQuote"
	    },
	    "hideExpression": "model.self.quoteMode!=\"Delete\""
	  }

	];
		var Offers = [{
			"name": "40Gb_Data",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Quota",
			"productSpecificationRefId": "PRD_13",
			"defaultState": "OptIn",
			"price": 51,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "Broadband_Core",
			"startDateTime": "2015-11-20T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Core",
			"productSpecificationRefId": "PRD_1",
			"defaultState": "OptIn",
			"price": 100,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "Installation",
			"startDateTime": "2016-02-09T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "VAS",
			"productSpecificationRefId": "PRD_113",
			"defaultState": "OptIn",
			"price": 201,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "50Mbps_QOS",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Product",
			"productSpecificationRefId": "PRD_15",
			"defaultState": "OptIn",
			"price": 400,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "1Month_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "60Gb_Data",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Quota",
			"productSpecificationRefId": "PRD_13",
			"defaultState": "OptIn",
			"price": 51,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "Broadband_Core",
			"startDateTime": "2015-11-20T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Core",
			"productSpecificationRefId": "PRD_1",
			"defaultState": "OptIn",
			"price": 100,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "Installation_1",
			"startDateTime": "2016-02-09T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "VAS",
			"productSpecificationRefId": "PRD_113",
			"defaultState": "OptIn",
			"price": 201,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "100Mbps_QOS",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Product",
			"productSpecificationRefId": "PRD_15",
			"defaultState": "OptIn",
			"price": 400,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "2Month_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": []
		}, {
			"name": "3Month_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_18",
			"defaultState": "OptIn",
			"price": 240,
			"usageGroup": [],
			"attributes": [],

		}];

		var Devices = [{
			"name": "D_40Gb_Data",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Quota",
			"productSpecificationRefId": "PRD_13",
			"defaultState": "OptIn",
			"price": 51,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_Broadband_Core",
			"startDateTime": "2015-11-20T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Core",
			"productSpecificationRefId": "PRD_1",
			"defaultState": "OptIn",
			"price": 100,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_Installation",
			"startDateTime": "2016-02-09T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "VAS",
			"productSpecificationRefId": "PRD_113",
			"defaultState": "OptIn",
			"price": 201,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_50Mbps_QOS",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Product",
			"productSpecificationRefId": "PRD_15",
			"defaultState": "OptIn",
			"price": 400,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_1Month_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_3Month_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_18",
			"defaultState": "OptIn",
			"price": 240,
			"usageGroup": [],
			"attributes": [],
		}, {
			"name": "D_1_Year_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_Zero Balance",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_1Month_TalkTime",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": [],

		}, {
			"name": "D_5Month_Validity",
			"startDateTime": "2015-11-23T00:00:00.000+05:30",
			"endDateTime": "2030-12-30T23:59:59.000+05:30",
			"productCategory": "Broadband",
			"productType": "Validity",
			"productSpecificationRefId": "PRD_16",
			"defaultState": "OptIn",
			"price": 120,
			"usageGroup": [],
			"attributes": [],
		}];

		var quote_viewAll = [{
			key: 'list',
			type: 'ui-grid',
			templateOptions: {
				label: 'Quote',
				cardLabel: 'View All Quotes',
				columnDefs: [{
					field: 'quoteId',
					//cellTemplate: '<md-button class="md-primary" aria-label="leadId" ng-click=grid.appScope.clicked("openViewLead",row) style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
				}, {
					field: 'discountedPrice'
				},{
					field: 'assignedGroup'
				}, {
					field: 'assignedUser'
				}, {
					field: 'discountedPrice'
				}, {
					name: 'Actions',
					//cellTemplate: '<div><md-button class="md-icon-button md-mini md-warning" ng-click=grid.appScope.clicked("openViewLead",row) style="min-width: 0px;"><md-icon style=" vertical-align: baseline;">remove_red_eye</md-icon></md-button><md-button class="md-icon-button md-primary md-raised md-mini" ng-click=grid.appScope.clicked("openEditLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary md-raised md-mini" ng-click=grid.appScope.clicked("openDeleteLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button></div>',
					cellTemplate: '<md-button class="md-icon-button" ng-click=grid.appScope.clicked("openViewQuote",row) style="min-width: 0px;"><md-icon style="color:rgb(68,138,255); vertical-align: baseline;">remove_red_eye</md-icon></md-button><md-button class="md-icon-button" ng-click=grid.appScope.clicked("openEditQuote",row) style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-accent" ng-click=grid.appScope.clicked("openDeleteQuote",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
					enableFiltering: false
				}],

				onRegisterApi: ''
			}
		}];

		return {
			/*setQuoteMode : function(mode){
				quoteMode = mode;
			},
			getQuoteMode : function(){
				return quoteMode;
			},
			resetQuoteMode : function(){
				quoteMode = null;
			},*/
			setQuote: function(quoteData) {
				quoteSharedData = quoteData;
			},
			getQuote: function() {
				return quoteSharedData;
			},
			resetQuote: function() {
				quoteSharedData = null;
			},
			getLayout: function(view) {
				if (view === 'quote_CRUD') {
					return JSON.stringify(quote_CRUD);
				} else if (view === 'Offers') {
					return JSON.stringify(Offers);
				} else if (view === 'Devices') {
					return JSON.stringify(Devices);
				} else if (view === 'quote_viewAll') {
					return JSON.stringify(quote_viewAll);
				}
			}
		}
	}
})();
