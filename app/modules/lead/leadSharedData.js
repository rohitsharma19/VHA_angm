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
				"styleElements": "display:block;",
				"required": "true",
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
				"multiple": false,
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
			"type": "contact_Card",
			"key": "contact_Card",
			"templateOptions": {
				"form": {
					"fields": [{
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
						"key": "dob",
						"templateOptions": {
							"theme": "custom",
							"placeholder": "Date of Birth",
							"styleElements": "display:block;",
							"label": "Date of Birth"
						}
					}, {
						"key": "eMail",
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
					}, {
						"elementAttributes": {
							"layout": "row",
						},
						"fieldGroup": [{
							type: 'button',
							templateOptions: {
								label: 'Add Contact',
								class: 'md-raised md-primary',
								method: 'addContact'
							}
						}, {
							type: 'button',
							templateOptions: {
								label: 'Edit Contact',
								class: 'md-raised md-primary',
								method: 'editContact'
							}
						}, {
							type: 'button',
							templateOptions: {
								label: 'Delete Contact',
								class: 'md-raised md-primary',
								method: 'deleteContact'
							}
						}]
					}]
				},
				contacts: [{
					name: 'Rohit',
					email: 'rht@gmail.com'
				}, {
					name: 'Sukhi',
					email: 'sukhi@gmail.com'
				}, {
					name: 'Arpan',
					email: 'arpan@gmail.com'
				}]
			}
		}];

		// var contactFields = [{
		// 	"elementAttributes": {
		// 		"layout": "row",
		// 		"layout-sm": "column"
		// 	},
		// 	"fieldGroup": [{
		// 		"type": "select",
		// 		"key": "title",
		// 		"className": "flex-20",
		// 		"templateOptions": {
		// 			"label": "Title",
		// 			"theme": "",
		// 			"multiple": false,
		// 			"styleElements": "display:block;",
		// 			"labelProp": "label",
		// 			"valueProp": "value",
		// 			"options": [{
		// 				"label": "Mr.",
		// 				"value": "Mr."
		// 			}, {
		// 				"label": "Mrs.",
		// 				"value": "Mrs."
		// 			}, {
		// 				"label": "Ms.",
		// 				"value": "Ms."
		// 			}]
		// 		}
		// 	}, {
		// 		"key": "firstName",
		// 		"className": "flex-40",
		// 		"type": "input",
		// 		"templateOptions": {
		// 			"label": "First Name",
		// 			"styleElements": "display:block;"
		// 		}
		// 	}, {
		// 		"key": "lastName",
		// 		"className": "flex-40",
		// 		"type": "input",
		// 		"templateOptions": {
		// 			"label": "Last Name",
		// 			"styleElements": "display:block;"
		// 		}
		// 	}]
		// }, {
		// 	"type": "datepicker",
		// 	"key": "dob",
		// 	"templateOptions": {
		// 		"theme": "custom",
		// 		"placeholder": "Date of Birth",
		// 		"styleElements": "display:block;",
		// 		"label": "Date of Birth"
		// 	}
		// }, {
		// 	"key": "eMail",
		// 	"type": "input",
		// 	"templateOptions": {
		// 		"label": "E mail",
		// 		"type": "email",
		// 		"styleElements": "display:block;"
		// 	}
		// }, {
		// 	"key": "contactNum",
		// 	"type": "input",
		// 	"templateOptions": {
		// 		"label": "Phone Number",
		// 		"type": "number",
		// 		"styleElements": "display:block;"
		// 	}
		// }, {
		// 	"type": "select",
		// 	"key": "contactRole",
		// 	"templateOptions": {
		// 		"label": "Contact Mode",
		// 		"theme": "",
		// 		"styleElements": "display:block;",
		// 		"multiple": false,
		// 		"labelProp": "label",
		// 		"valueProp": "value",
		// 		"options": [{
		// 			"label": "Billing",
		// 			"value": "Billing"
		// 		}, {
		// 			"label": "Non-Billing",
		// 			"value": "Non-Billing"
		// 		}],
		// 		"flex": ""
		// 	}
		// }, {
		// 	"type": "select",
		// 	"key": "prefModOfCom",
		// 	"templateOptions": {
		// 		"label": "Preferred Mode of Communication",
		// 		"theme": "",
		// 		"styleElements": "display:block;",
		// 		"multiple": false,
		// 		"labelProp": "label",
		// 		"valueProp": "value",
		// 		"options": [{
		// 			"label": "Phone",
		// 			"value": "Phone"
		// 		}, {
		// 			"label": "Email",
		// 			"value": "Email"
		// 		}],
		// 		"flex": ""
		// 	}
		// }];

		var segementationFields = [{
			"type": "select",
			"key": "serviceType",
			"templateOptions": {
				"label": "Choose Service Type",
				"theme": "",
				"styleElements": "display:block;",
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
			"key": "planType",
			"templateOptions": {
				"label": "Choose Plan Type",
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
		}];

		var additionalDetailFields = [{
			"type": "select",
			"key": "assignToGrp",
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
			"key": "assignToUser",
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
			"key": "createdByGroup",
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

		// var lead_CRUD_bak = [{
		// 	type: 'card_progressTracker',
		// 	templateOptions: {
		// 		totalSteps: 5,
		// 		steps: [{
		// 			status: 'todo',
		// 			label: 'Capture Initial Details'
		// 		}, {
		// 			status: 'todo',
		// 			label: 'Know your customer'
		// 		}, {
		// 			status: 'todo',
		// 			label: 'Recommendations'
		// 		}, {
		// 			status: 'todo',
		// 			label: 'Generate quote'
		// 		}, {
		// 			status: 'todo',
		// 			label: 'Generate agreement'
		// 		}],
		// 		card: {
		// 			imagePath: "",
		// 			headline: "",
		// 			actions: ''
		// 		}
		// 	},
		// 	hideExpression: 'model.leadMode!="QuickCreate"'
		// }, {
		// 	type: 'card_tabset',
		// 	templateOptions: {
		// 		tabs: tabs,
		// 		card: {
		// 			imagePath: "",
		// 			headline: "Lead",
		// 			headlineBackgroundColor: "#e4e4e4",
		// 			actions: [
		// 				// 	{
		// 				// 	class: 'md-raised md-primary',
		// 				// 	methodName: {
		// 				// 		name: "createLead",
		// 				// 		input: "lead"
		// 				// 	},
		// 				// 	label: 'Create Lead',
		// 				// 	hideExpression: 'model.leadMode!="QuickCreate" && model.leadMode!="Create"'
		// 				// },
		// 				// {
		// 				// 	class: 'md-raised md-primary',
		// 				// 	methodName: {
		// 				// 		name: "updateLead",
		// 				// 		input: "lead"
		// 				// 	},
		// 				// 	label: 'Update Lead',
		// 				// 	hideExpression: 'model.leadMode!="Update"'
		// 				// },
		// 				// {
		// 				// 	class: 'md-raised md-primary',
		// 				// 	methodName: {
		// 				// 		name: "deleteLead",
		// 				// 		input: "lead"
		// 				// 	},
		// 				// 	label: 'Delete Lead',
		// 				// 	hideExpression: 'model.leadMode!="Delete"'
		// 				// }
		// 			]
		// 		}
		// 	}
		// }, {
		// 	type: 'button',
		// 	templateOptions: {
		// 		label: 'Create Lead',
		// 		class: 'md-raised md-primary',
		// 		method: 'createLead'
		// 	},
		// 	hideExpression: 'model.leadMode!="QuickCreate" && model.leadMode!="Create"'
		// 		// expressionProperties: {
		// 		// 	'templateOptions.method': 'vm.createLead(vm.lead)'
		// 		// }
		// }, {
		// 	type: 'button',
		// 	templateOptions: {
		// 		label: 'Update Lead',
		// 		class: 'md-raised md-primary',
		// 		method: 'updateLead'
		// 	},
		// 	hideExpression: 'model.leadMode!="Update"'
		// }, {
		// 	type: 'button',
		// 	templateOptions: {
		// 		label: 'Delete Lead',
		// 		class: 'md-raised md-primary',
		// 		method: 'deleteLead'
		// 	},
		// 	hideExpression: 'model.leadMode!="Delete"'
		// }, {
		// 	type: 'test'
		// }];

		var lead_CRUD = [

			//form starts here
			{
				"wrapper": "wrapper_tabset",
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
							"pattern": '([0-9]{11})',
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
							"pattern": '([a-zA-Z ]{3,30})',
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
							"pattern": '([0-9]{9})',
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
							"pattern": '([0-9]{6})',
							"patternMessage": "6 Digit Number"
						}
					}, {
						"key": "tradingAs",
						"type": "input",
						"templateOptions": {
							"label": "Trading As",
							"type": "text",
							"styleElements": "display:block;",
							"pattern": '([a-zA-Z ]{3,30})',
							"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters.",
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
						"wrapper": "card",
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
						"wrapper": "card",
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
									"pattern": '([a-zA-Z ]{3,30})',
									"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters.",
								}
							}, {
								"key": "lastName",
								"className": "flex-40",
								"type": "input",
								"templateOptions": {
									"label": "Last Name",
									"styleElements": "display:block;",
									"required": "true",
									"pattern": '([a-zA-Z ]{3,30})',
									"patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters.",
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
								"pattern": '([0-9]{10})',
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
								// "pattern": "([0-9]{11})",
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
								"pattern": '([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4}))',
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
							"label": "status",
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
			}, {
				"type": "button",
				"templateOptions": {
					"label": "Create Lead",
					"class": "md-raised md-primary",
					"method": "createLead"
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
			}
		];


		// var columnDefs;
		//
		// columnDefs = [{
		// 	field: 'leadId',
		// 	//cellTemplate: '<md-button class="md-primary" aria-label="leadId" ng-click=grid.appScope.clicked("openViewLead",row) style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
		// }, {
		// 	field: 'creationDate'
		// }, {
		// 	field: 'compName'
		// }, {
		// 	field: 'abn'
		// }, {
		// 	field: 'firstName'
		// }, {
		// 	field: 'lastName'
		// }, {
		// 	field: 'eMail'
		// }, {
		// 	field: 'contactNum'
		// }, {
		// 	name: 'Actions',
		// 	//cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openViewLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">mode_edit</md-icon></md-button><md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteLead(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',																																																																																												cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteLead(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
		// 	cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openViewLead(row)" style="min-width: 0px;"><md-icon style="color:rgb(68,138,255); vertical-align: baseline;">remove_red_eye</md-icon></md-button><md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditLead(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteLead(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
		// 	enableFiltering: false
		// }];

		var lead_viewAll = [{
			key: 'list',
			type: 'ui-grid',
			templateOptions: {
				label: 'Lead',
				cardLabel: 'View All Leads',
				cardHeaderBackground: '#2C3E50',
				cardLabelColor: 'white',
				columnDefs: [{
						field: 'leadId',
						//cellTemplate: '<md-button class="md-primary" aria-label="leadId" ng-click=grid.appScope.clicked("openViewLead",row) style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
					},
					// {
					// 	field: 'creationDate'
					// },
					{
						field: 'compName'
					}, {
						field: 'abn'
					}, {
						field: 'firstName'
					}, {
						field: 'lastName'
					}, {
						field: 'eMail'
					}, {
						field: 'contactNum'
					}, {
						name: 'Actions',
						//cellTemplate: '<div><md-button class="md-icon-button md-mini md-warning" ng-click=grid.appScope.clicked("openViewLead",row) style="min-width: 0px;"><md-icon style=" vertical-align: baseline;">remove_red_eye</md-icon></md-button><md-button class="md-icon-button md-primary md-raised md-mini" ng-click=grid.appScope.clicked("openEditLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary md-raised md-mini" ng-click=grid.appScope.clicked("openDeleteLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button></div>',
						cellTemplate: '<md-button class="md-icon-button" ng-click=grid.appScope.clicked("openViewLead",row) style="min-width: 0px;"><md-icon style="color:rgb(68,138,255); vertical-align: baseline;">remove_red_eye</md-icon></md-button><md-button class="md-icon-button" ng-click=grid.appScope.clicked("openEditLead",row) style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-accent" ng-click=grid.appScope.clicked("openDeleteLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
						enableFiltering: false
					}
				],

				onRegisterApi: ''
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
				}
			}
		};
	}
})();
