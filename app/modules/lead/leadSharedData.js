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

		var lead_CRUD = [{
			"fieldGroup": [{
				"wrapper": "card_noHeaderNoActions",
				"type": "progressTracker",
				"templateOptions": {
					"totalSteps": 5,
					"steps": [{
						"status": "current",
						"label": "Capture Initial Details"
					}, {
						"status": "todo",
						"label": "Know your customer"
					}, {
						"status": "todo",
						"label": "Recommendations"
					}, {
						"status": "todo",
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
					"style": ""
				}
			}],
			"hideExpression": "model.leadMode!='QuickCreate'"
		}, {
			"wrapper": "card_noHeaderNoActions",
			"fieldGroup": [{
				"wrapper": [
					"wrapper_tabset"
				],
				"fieldGroup": [{
					"wrapper": "wrapper_tab",
					"templateOptions": {
						"title": "Basic Details",
						"active": true
					},
					"fieldGroup": [{
						"key": "abn",
						"type": "input",
						"templateOptions": {
							"label": "ABN Number",
							"type": "text",
							"styleElements": "display:block;",
							"required": "true",
							"pattern": "([0-9]{11})",
							"patternMessage": "11 Digit Number"
						}
					}, {
						"key": "accName",
						"type": "input",
						"templateOptions": {
							"label": "Account Name",
							"type": "text",
							"styleElements": "display:block;",
							"required": "true",
							"pattern": "([a-zA-Z ]{3,30})",
							"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters"
						}
					}, {
						"key": "acn",
						"type": "input",
						"templateOptions": {
							"label": "ACN",
							"type": "text",
							"styleElements": "display:block;",
							"required": "true",
							"pattern": "([0-9]{9})",
							"patternMessage": "9 Digit Number"
						}
					}, {
						"key": "compName",
						"type": "input",
						"templateOptions": {
							"label": "Company Name",
							"type": "text",
							"styleElements": "display:block;",
							"required": "true",
							"pattern": "",
							"patternMessage": ""
						}
					}, {
						"type": "select",
						"key": "custType",
						"templateOptions": {
							"label": "Customer Type",
							"theme": "",
							"multiple": false,
							"styleElements": "display:block;",
							"required": "true",
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
							"styleElements": "display:block;",
							"required": "true",
							"pattern": "([0-9]{6})",
							"patternMessage": "6 Digit Number"
						}
					}, {
						"key": "tradingAs",
						"type": "input",
						"templateOptions": {
							"label": "Trading As",
							"type": "text",
							"styleElements": "display:block;",
							"pattern": "([a-zA-Z ]{3,30})",
							"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30Characters."
						}
					}]
				}, {
					"wrapper": "wrapper_tab",
					"elementAttributes": {
						"layout": "row"
					},
					"templateOptions": {
						"title": "Contact",
						"active": false
					},
					"fieldGroup": [{
						"wrapper": "card_noHeaderNoActions",
						"elementAttributes": {
							"formlyFieldGroupClass": "flex-30"
						},
						"fieldGroup": [{
							"key": "pin",
							"type": "input",
							"templateOptions": {
								"label": "PIN",
								"type": "text",
								"styleElements": "display:block;"
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
							"key": "pin",
							"type": "input",
							"templateOptions": {
								"label": "PIN",
								"type": "text",
								"styleElements": "display:block;"
							}
						}]
					}, {
						"wrapper": "card_noHeaderNoActions",
						"elementAttributes": {
							"formlyFieldGroupClass": "flex-70"
						},
						"fieldGroup": [{
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
									"multiple": false,
									"styleElements": "display:block;",
									"required": "true",
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
									"styleElements": "display:block;",
									"required": "true",
									"pattern": "([a-zA-Z ]{3,30})",
									"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters."
								}
							}, {
								"key": "lastName",
								"className": "flex-40",
								"type": "input",
								"templateOptions": {
									"label": "Last Name",
									"styleElements": "display:block;",
									"required": "true",
									"pattern": "([a-zA-Z ]{3,30})",
									"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters."
								}
							}]
						}, {
							"key": "contactNum",
							"type": "input",
							"templateOptions": {
								"label": "Phone Number",
								"type": "number",
								"styleElements": "display:block;",
								"required": "true",
								"pattern": "([0-9]{10})",
								"patternMessage": "Only Numbers. 10 Digits"
							}
						}, {
							"type": "datepicker",
							"key": "dob",
							"templateOptions": {
								"theme": "custom",
								"placeholder": "Date of Birth",
								"styleElements": "display:block;",
								"label": "Date of Birth",
								"required": "true",
								"md-min-date": "1/1/2015",
								"md-max-date": "1/1/2016",
								"pattern": "(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}",
								"patternMessage": "yyyy-mm-dd ."
							}
						}, {
							"key": "eMail",
							"type": "input",
							"templateOptions": {
								"label": "E mail",
								"type": "email",
								"styleElements": "display:block;",
								"required": "true",
								"pattern": "([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4}))",
								"patternMessage": "For ex. example@domain.com ."
							}
						}, {
							"type": "select",
							"key": "contactRole",
							"templateOptions": {
								"label": "Contact Mode",
								"theme": "",
								"styleElements": "display:block;",
								"required": "true",
								"multiple": false,
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
								"required": "true",
								"multiple": false,
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
						}]
					}]
				}, {
					"wrapper": "wrapper_tab",
					"templateOptions": {
						"title": "Segementation",
						"active": false
					},
					"fieldGroup": [{
						"type": "select",
						"key": "industryType",
						"templateOptions": {
							"label": "Industry Type",
							"theme": "",
							"styleElements": "display:block;",
							"required": "true",
							"multiple": false,
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
						"key": "businessStage",
						"templateOptions": {
							"label": "Business Stage",
							"theme": "",
							"styleElements": "display:block;",
							"multiple": false,
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
					}]
				}, {
					"wrapper": "wrapper_tab",
					"templateOptions": {
						"title": "Additional Details",
						"active": false
					},
					"fieldGroup": [{
						"type": "select",
						"key": "assignToGrp",
						"templateOptions": {
							"label": "Assigned To Group",
							"theme": "",
							"styleElements": "display:block;",
							"required": "true",
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
						"key": "assignToUser",
						"templateOptions": {
							"label": "Assigned To User",
							"theme": "",
							"styleElements": "display:block;",
							"required": "true",
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
						"key": "createdByUser",
						"templateOptions": {
							"label": "Created By User",
							"theme": "",
							"styleElements": "display:block;",
							"disabled": true,
							"required": "true",
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
					}, {
						"type": "select",
						"key": "createdByGroup",
						"templateOptions": {
							"label": "Created By Group",
							"theme": "",
							"styleElements": "display:block;",
							"disabled": true,
							"required": "true",
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
					}, {
						"type": "select",
						"key": "status",
						"templateOptions": {
							"label": "Status",
							"theme": "",
							"styleElements": "display:block;",
							"required": "true",
							"multiple": false,
							"labelProp": "label",
							"valueProp": "value",
							"options": [{
								"label": "Qualified",
								"value": "Qualified"
							}, {
								"label": "New",
								"value": "New"
							}, {
								"label": "Old",
								"value": "Old"
							}],
							"flex": ""
						}
					}]
				}]
			}]
		}, {
			"type": "button",
			"templateOptions": {
				"label": "Create Lead",
				"class": "md-raised md-primary",
				"method": "confirmDetails"
			},
			"hideExpression": "model.leadMode!=\"QuickCreate\" && model.leadMode!=\"Create\""
		}, {
			"type": "button",
			"templateOptions": {
				"label": "Update Lead",
				"class": "md-raised md-primary",
				"method": "updateLead"
			},
			"hideExpression": "model.leadMode!=\"Update\""
		}, {
			"type": "button",
			"templateOptions": {
				"label": "Delete Lead",
				"class": "md-raised md-primary",
				"method": "deleteLead"
			},
			"hideExpression": "model.leadMode!=\"Delete\""
		}];

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

		var lead_viewAll = [{
			"key": "list",
			"type": "ui-grid",
			"wrapper": ["gridWrapper", "card_noHeaderNoActions"],
			"templateOptions": {
				"label": "Lead",
				"cardLabel": "View All Leads",
				"cardHeaderBackground": "rgb(33,150,243)",
				"cardLabelColor": "white",
				"columnDefs": [{
					"field": "leadId"
				}, {
					"field": "compName"
				}, {
					"field": "abn"
				}, {
					"field": "firstName"
				}, {
					"field": "lastName"
				}, {
					"field": "eMail"
				}, {
					"field": "contactNum"
				}, {
					"name": "Actions",
					"cellTemplate": "<md-button class='md-icon-button' ng-click=grid.appScope.clicked('openViewLead',row) style='min-width: 0px;'><md-icon style='color:rgb(68,138,255); vertical-align: baseline;'>remove_red_eye</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openEditLead',row) style='min-width: 0px;'><md-icon style='color:green; vertical-align: baseline;'>edit</md-icon></md-button><md-button class='md-icon-button md-accent' ng-click=grid.appScope.clicked('openDeleteLead',row) style='min-width: 0px;'><md-icon style='vertical-align: baseline;'>delete</md-icon></md-button>",
					"enableFiltering": false
				}],
				"onRegisterApi": ""
			}
		}];

		// var lead_CRUD = [{
		// 	"key": "eMail",
		// 	"type": "input",
		// 	"id": "eMail",
		// 	"templateOptions": {
		// 		"label": "E mail",
		// 		"type": "email",
		// 		"styleElements": "display:block;",
		//
		// 	}
		// }, {
		// 	"type": "select",
		// 	"key": "createdByGroup",
		// 	"id": "createdByGroup",
		// 	"templateOptions": {
		// 		"label": "Created By Organization",
		// 		"theme": "",
		// 		"styleElements": "display:block;",
		// 		"multiple": false,
		// 		"labelProp": "label",
		// 		"valueProp": "value",
		// 		"options": [{
		// 			"label": "Third Party",
		// 			"value": "Third Party"
		// 		}, {
		// 			"label": "XXX",
		// 			"value": "XXX"
		// 		}],
		// 		"flex": ""
		// 	}
		// }, {
		// 	"type": "test"
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
					return JSON.stringify(lead_CRUD);
				} else if (view === 'lead_viewAll') {
					return JSON.stringify(lead_viewAll);
				} else if (view === 'SummaryDialog') {
					return JSON.stringify(SummaryDialog);
				}
			}
		};
	}
})();
