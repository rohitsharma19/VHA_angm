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

			var quote_CRUD = [{
				"type": "progressTracker",
				"wrapper": "card_noHeaderNoActions",
				"templateOptions": {
					"totalSteps": 5,
					"steps": [{
						"status": "done",
						"label": "Capture Initial Details"
					}, {
						"status": "done",
						"label": "Know your customer"
					}, {
						"status": "done",
						"label": "Recommendations"
					}, {
						"status": "current",
						"label": "Generate quote"
					}, {
						"status": "todo",
						"label": "Generate agreement"
					}],
					"card": {
						"imagePath": "",
						"headline": "",
						"actions": ""
					},
					"style": "",
					"cardContentStyle":"padding:0px 16px 0px 16px !important"
				}
			}, {
				"fieldGroup": [{
						"elementAttributes": {
							"layout": "row",
							"layout-sm": "column"
						},
						"fieldGroup": [
							{
							"className": "flex-100",
							"type": "SummaryBlock",
							"templateOptions": {
								"style": "color:white; background-color: rgb(33, 150, 243);",
								"class": "flex-33",
								"fields": [{
									"title": "Opportunity ID",
									"type": "opportunityDetails",
									"key": "opportunityId"
								}, {
									"title": "Company Name",
									"type": "leadDetails",
									"key": "compName"
								}, {
									"title": "Opportunity status",
									"type": "opportunityDetails",
									"key": "status"
								}, {
									"title": "Assigned to User",
									"type": "opportunityDetails",
									"key": "assignedToUser"
								}, {
									"title": "Created By User",
									"type": "opportunityDetails",
									"key": "createdByUser"
								}]
							},
							"hideExpression": 'model.self.quoteMode!="QuickCreate" && !model.opportunityDetails'
						},
						{
							// "wrapper":"card_noHeaderNoActions",
							"type": "button",
							"className": "flex-05 layout-row",
							"templateOptions": {
								"label": "",
								"class": "md-raised md-primary md-fab layout-row",
								"method": "selectOpportunityDialog",
								"icon": "search"
							},
							"hideExpression": 'model.self.quoteMode!="Create" || !model.opportunityDetails'
						}]
					},
						{
							"wrapper": "card_noHeaderNoActions",
							"fieldGroup": [{
								"elementAttributes": {
									"layout": "row",
									"layout-sm": "column"
								},
								"fieldGroup": [{
										"key": "self.opportunityId",
										"type": "input",
										"className": "flex-95",
										"templateOptions": {
											"label": "Opportunity ID",
											"type": "text",
											"styleElements": "display:block;",
											"required": "true"
										},
										"hideExpression": "model.self.quoteMode!=\"Create\""
									}, {
										"type": "button",
										"className": "flex-5",
										"templateOptions": {
											"label": "",
											"class": "md-raised md-primary md-fab md-mini",
											"method": "selectOpportunityDialog",
											"icon": "search"
										},
										"hideExpression": "model.self.quoteMode!=\"Create\""
									}

								],
							}],
							"hideExpression": 'model.self.quoteMode!=\"Create\" || model.opportunityDetails'
						}]
				},
						{
							"wrapper": "card_noHeaderNoActions",
							"fieldGroup": [{
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
												"formlyFieldGroupClass": "flex-80 layout-row",
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
												"formlyFieldGroupClass": "flex-20 layout-row"
											},
											"fieldGroup": [{
												"type": "itemChips",
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
										// "model":"model.finalSelection",
										"wrapper": "gridWrapperNoAction",
										"type": "productUiGrid",
										"templateOptions": {
											"label": "Quote",
											"cardLabel": "",
											"cardHeaderBackground": 'rgb(33, 150, 243)',
											"cardLabelColor": 'white',
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
												"cellTemplate": "<input type='number' min=0 ng-change=grid.appScope.clicked('reCalculateTotal',row.entity) ng-model='MODEL_COL_FIELD'/>"
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
										// "model":"model.finalSelection",
										"wrapper": "gridWrapperNoAction",
										"type": "productUiGrid",
										"templateOptions": {
											"label": "",
											"cardHeaderBackground": 'rgb(33, 150, 243)',
											"cardLabelColor": 'white',
											"cardLabel": "",
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
							}]
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
						"name": "Red Business Grow Plan",
						"startDateTime": "2015-11-23T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Quota",
						"productSpecificationRefId": "PRD_13",
						"defaultState": "OptIn",
						"price": 51,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/voda5.jpg"
					}, {
						"name": "Red Business Grow Plan",
						"startDateTime": "2015-11-20T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Core",
						"productSpecificationRefId": "PRD_1",
						"defaultState": "OptIn",
						"price": 100,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/voda2.jpg"

					}, {
						"name": "Red Business Grow Plan",
						"startDateTime": "2016-02-09T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "VAS",
						"productSpecificationRefId": "PRD_113",
						"defaultState": "OptIn",
						"price": 201,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/voda3.jpg"

					}, {
						"name": "Red Business Grow Plan",
						"startDateTime": "2015-11-23T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Product",
						"productSpecificationRefId": "PRD_15",
						"defaultState": "OptIn",
						"price": 400,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/voda4.jpg"

					}, {
						"name": "Red Business Grow Plan",
						"startDateTime": "2015-11-23T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Validity",
						"productSpecificationRefId": "PRD_16",
						"defaultState": "OptIn",
						"price": 120,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/voda5.jpg"

					}, {
						"name": "Red Business Grow Plan",
						"startDateTime": "2015-11-23T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Validity",
						"productSpecificationRefId": "PRD_17",
						"defaultState": "OptIn",
						"price": 210,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/voda5.jpg"
					}];

					var Devices = [{
						"name": "Iphone 6/6 Plus",
						"startDateTime": "2015-11-23T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Quota",
						"productSpecificationRefId": "PRD_13",
						"defaultState": "OptIn",
						"price": 51,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/device_1.png"

					}, {
						"name": "BlackBerry BX01",
						"startDateTime": "2015-11-20T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "Core",
						"productSpecificationRefId": "PRD_1",
						"defaultState": "OptIn",
						"price": 100,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/device_2.jpg"

					}, {
						"name": "Samsung Galaxy 7",
						"startDateTime": "2016-02-09T00:00:00.000+05:30",
						"endDateTime": "2030-12-30T23:59:59.000+05:30",
						"productCategory": "Broadband",
						"productType": "VAS",
						"productSpecificationRefId": "PRD_113",
						"defaultState": "OptIn",
						"price": 201,
						"usageGroup": [],
						"attributes": [],
						"imagePath": "app/assets/images/device_3.jpg"
					}];

					var opportunity_viewAll = [{
						"key": "list",
						"type": "uiGrid",
						"wrapper": ["card_noHeaderNoActions"],
						"templateOptions": {
							"label": "Opportunity",
							"cardLabel": "Opportunities",
							"cardHeaderBackground": "rgb(33,150,243)",
							"cardLabelColor": "white",
							"columnDefs": [{
								"name": "Select",
								"cellTemplate": "<md-button class='md-icon-button' ng-click=grid.appScope.clicked('selectOpportunity',row) style='min-width: 0px;'><md-icon style='color:rgb(68,138,255); vertical-align: baseline;'>add</md-icon></md-button>",
								width: "07%"
							},{
								"field": "opportunityId"
							}, {
								"field": "firstName"
							}, {
								"field": "lastName"
							}, {
								"field": "contactNumber"
							}, {
								"field": "emailAddress"
							}, {
								"field": "contactRole"
							}, {
								"field": "preferredModeOfCommmunication"
							}],
							"onRegisterApi": ""
						}
					}];


					var quote_viewAll = [{
						"key": "list",
						"type": "uiGrid",
						"wrapper": ["gridWrapper", "card_noHeaderNoActions"],
						"templateOptions": {
							"label": "Quote",
							"cardLabel": "Quotes",
							"cardHeaderBackground": "rgb(33,150,243)",
							"cardLabelColor": "white",
							"columnDefs": [{
								"field": "quoteId"
							}, {
								"field": "discountedPrice"
							}, {
								"field": "assignedGroup"
							}, {
								"field": "assignedUser"
							}, {
								"field": "discountedPrice"
							}, {
								"name": "Actions",
								"cellTemplate": "<md-button class='md-icon-button' ng-click=grid.appScope.clicked('openViewQuote',row) style='min-width: 0px;'><md-icon style='color:rgb(68,138,255); vertical-align: baseline;'>remove_red_eye</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openEditQuote',row) style='min-width: 0px;'><md-icon style='color:green; vertical-align: baseline;'>edit</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openDeleteQuote',row) style='min-width: 0px;'><md-icon style='vertical-align: baseline; color:red;'>delete</md-icon></md-button>",
								"enableFiltering": false
							}],

							"onRegisterApi": ""
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
							}	else if (view === 'opportunity_viewAll') {
									return JSON.stringify(opportunity_viewAll);
							} else if (view === 'quote_viewAll') {
								return JSON.stringify(quote_viewAll);
							}
						}
					}
				}
			})();
