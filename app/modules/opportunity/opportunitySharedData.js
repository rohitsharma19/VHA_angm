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

		var opportunitySharedData = null;

		var opportunity_CRUD = [
  {
    "type": "progressTracker",
    "wrapper": "card_noHeaderNoActions",
    "templateOptions": {
      "totalSteps": 5,
      "steps": [
        {
          "status": "done",
          "label": "Capture Initial Details"
        },
        {
          "status": "current",
          "label": "Know your customer"
        },
        {
          "status": "todo",
          "label": "Recommendations"
        },
        {
          "status": "todo",
          "label": "Generate quote"
        },
        {
          "status": "todo",
          "label": "Generate agreement"
        }
      ],
      "card": {
        "imagePath": "",
        "headline": "",
        "actions": ""
      },
      "style": ""
    }
  },
  {
    "type": "topHeaderDetails",
    "templateOptions": {
      "objectType": "leadDetails",
      "style": "color:white; background-color: rgb(33,150,243);",
      "class": "flex-33",
      "fields": [
        {
          "title": "Company Name",
          "key": "compName"
        },
        {
          "title": "Created By User",
          "key": "createdByUser"
        },
        {
          "title": "Lead status",
          "key": "status"
        }
      ]
    }
  },
  {
    "wrapper": "card_noHeaderNoActions",
    "fieldGroup": [
      {
        "wrapper": "wrapper_tabset",
        "fieldGroup": [
          {
            "wrapper": "wrapper_tab",
            "templateOptions": {
              "title": "Preferences",
              "active": true
            },
            "fieldGroup": [
              {
                "key": "self.opportunityName",
                "type": "input",
                "templateOptions": {
                  "label": "Opportunity Name",
                  "type": "text",
                  "styleElements": "display:block;",
                  "required": "true",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alpha Numeric and Special Characters allowed."
                }
              },
              {
                "key": "self.opportunitySource",
                "type": "input",
                "templateOptions": {
                  "label": "Opportunity Source",
                  "type": "text",
                  "styleElements": "display:block;",
                  "required": "true",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alpha Numeric and Special Characters allowed."
                }
              },
              {
                "type": "select",
                "key": "self.opportunityType",
                "templateOptions": {
                  "label": "Opportunity Type",
                  "theme": "",
                  "multiple": false,
                  "styleElements": "display:block;",
                  "labelProp": "label",
                  "valueProp": "value",
                  "options": [
                    {
                      "label": "New",
                      "value": "New"
                    },
                    {
                      "label": "Existing",
                      "value": "Existing"
                    }
                  ]
                }
              },
              {
                "key": "self.opportunitySize",
                "type": "input",
                "templateOptions": {
                  "label": "Opportunity Size",
                  "type": "text",
                  "styleElements": "display:block;",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alphabets and Numbers Only. No Special Character. 3-30 Characters"
                }
              },
              {
                "key": "self.purchaseTimeFrame",
                "type": "input",
                "templateOptions": {
                  "label": "Purchase Time Frame",
                  "type": "text",
                  "styleElements": "display:block;",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alphabets and Numbers Only. No Special Character. 3-30 Characters"
                }
              },
              {
                "key": "self.probability",
                "type": "input",
                "templateOptions": {
                  "label": "Probability",
                  "type": "text",
                  "styleElements": "display:block;",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alphabets and Numbers Only. No Special Character. 3-30 Characters"
                }
              },
              {
                "key": "self.competitor",
                "type": "input",
                "templateOptions": {
                  "label": "Competitor",
                  "type": "text",
                  "styleElements": "display:block;",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alphabets and Numbers Only. No Special Character. 3-30 Characters"
                }
              },
              {
                "elementAttributes": {
                  "layout": "row",
                  "layout-sm": "column"
                },
                "fieldGroup": [
                  {
                    "type": "datepicker",
                    "key": "self.requestedDate",
                    "className": "flex-50",
                    "templateOptions": {
                      "theme": "custom",
                      "placeholder": "Request Date",
                      "styleElements": "display:block;",
                      "label": "Requested Date",
                      "required": "true",
                      "md-min-date": "1/1/2015",
                      "md-max-date": "1/1/2016",
											"pattern": "(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}",
                      "patternMessage": "yyyy-mm-dd ."
                    }
                  },
                  {
                    "type": "datepicker",
                    "key": "self.closedDate",
                    "className": "flex-50",
                    "templateOptions": {
                      "theme": "custom",
                      "placeholder": "Closure Date",
                      "styleElements": "display:block;",
                      "label": "Closure Date",
                      "md-min-date": "1/1/2015",
                      "md-max-date": "1/1/2016",
											"pattern": "(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}",
                      "patternMessage": "yyyy-mm-dd ."
                    }
                  }
                ]
              },
              {
                "key": "self.closureReason",
                "type": "input",
                "templateOptions": {
                  "label": "Closure Reason",
                  "type": "text",
                  "styleElements": "display:block;",
                  "pattern": "([a-zA-Z0-9]{3,30})",
                  "patternMessage": "Alphabets and Numbers Only. No Special Character. 3-30 Characters"
                }
              },
              {
                "type": "select",
                "key": "self.territoryCodeOrRegion",
                "templateOptions": {
                  "label": "Territory Code/Region",
                  "theme": "",
                  "styleElements": "display:block;",
                  "multiple": false,
                  "labelProp": "label",
                  "valueProp": "value",
                  "options": [
                    {
                      "label": "Billing",
                      "value": "Billing"
                    },
                    {
                      "label": "Non-Billing",
                      "value": "Non-Billing"
                    }
                  ],
                  "flex": ""
                }
              },
              {
                "type": "input",
                "key": "self.stage",
                "templateOptions": {
                  "label": "Stage",
                  "theme": "",
                  "styleElements": "display:block;",
                  "required": "true",
                  "flex": ""
                }
              },
              {
                "key": "self.opportunityId",
                "type": "input",
                "templateOptions": {
                  "label": "Opportunity Id",
                  "type": "text",
                  "styleElements": "display:block;",
                  "disabled": true,
                  "required": "true"
                }
              },
              {
                "elementAttributes": {
                  "layout": "row",
                  "layout-sm": "column"
                },
                "fieldGroup": [
                  {
                    "key": "self.autoAssignFlag",
                    "type": "checkbox",
                    "className": "flex-25",
                    "templateOptions": {
                      "label": "Auto Assign",
                      "styleElements": "display:block;"
                    }
                  },
                  {
                    "key": "self.opportunityRisksFlag",
                    "type": "checkbox",
                    "className": "flex-25",
                    "templateOptions": {
                      "label": "Opportunity Risk",
                      "styleElements": "display:block;"
                    }
                  },
                  {
                    "key": "opportunityPotentialFlag",
                    "type": "checkbox",
                    "className": "flex-25",
                    "templateOptions": {
                      "label": "Opportunity Potential",
                      "styleElements": "display:block;"
                    }
                  },
                  {
                    "key": "self.solutionOptionsFlag",
                    "type": "checkbox",
                    "className": "flex-25",
                    "templateOptions": {
                      "label": "Solution Options",
                      "styleElements": "display:block;"
                    }
                  }
                ]
              }
            ]
          },
          {
            "wrapper": "wrapper_tab",
            "templateOptions": {
              "title": "Contact Details",
              "active": false
            },
            "fieldGroup": [
              {
                "elementAttributes": {
                  "layout": "row",
                  "layout-sm": "column"
                },
                "fieldGroup": [
                  {
                    "type": "select",
                    "key": "self.title",
                    "className": "flex-20",
                    "templateOptions": {
                      "label": "Title",
                      "theme": "",
                      "multiple": false,
                      "styleElements": "display:block;",
                      "required": "true",
                      "labelProp": "label",
                      "valueProp": "value",
                      "options": [
                        {
                          "label": "Mr.",
                          "value": "Mr."
                        },
                        {
                          "label": "Mrs.",
                          "value": "Mrs."
                        },
                        {
                          "label": "Ms.",
                          "value": "Ms."
                        }
                      ]
                    }
                  },
                  {
                    "key": "self.firstName",
                    "className": "flex-40",
                    "type": "input",
                    "templateOptions": {
                      "label": "First Name",
                      "styleElements": "display:block;",
                      "required": "true",
                      "pattern": "([a-zA-Z ]{3,30})",
                      "patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters."
                    }
                  },
                  {
                    "key": "self.lastName",
                    "className": "flex-40",
                    "type": "input",
                    "templateOptions": {
                      "label": "Last Name",
                      "styleElements": "display:block;",
                      "required": "true",
                      "pattern": "([a-zA-Z ]{3,30})",
                      "patternMessage": "Alphabets Only. No Special Character and Numbers. 3-30 Characters."
                    }
                  }
                ]
              },
              {
                "key": "self.contactNum",
                "type": "input",
                "templateOptions": {
                  "label": "Phone Number",
                  "type": "number",
                  "styleElements": "display:block;",
                  "required": "true",
                  "pattern": "([0-9]{10})",
                  "patternMessage": "Only Numbers. 10 Digits"
                }
              },
              {
                "type": "datepicker",
                "key": "self.dob",
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
              },
              {
                "key": "self.eMail",
                "type": "input",
                "templateOptions": {
                  "label": "E mail",
                  "type": "email",
                  "styleElements": "display:block;",
                  "required": "true",
									"pattern": '([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4}))',
                  "patternMessage": "For ex. example@domain.com ."
                }
              },
              {
                "type": "select",
                "key": "self.contactRole",
                "templateOptions": {
                  "label": "Contact Mode",
                  "theme": "",
                  "styleElements": "display:block;",
                  "required": "true",
                  "multiple": false,
                  "labelProp": "label",
                  "valueProp": "value",
                  "options": [
                    {
                      "label": "Billing",
                      "value": "Billing"
                    },
                    {
                      "label": "Non-Billing",
                      "value": "Non-Billing"
                    }
                  ],
                  "flex": ""
                }
              },
              {
                "type": "select",
                "key": "self.prefModOfCom",
                "templateOptions": {
                  "label": "Preferred Mode of Communication",
                  "theme": "",
                  "styleElements": "display:block;",
                  "required": "true",
                  "multiple": false,
                  "labelProp": "label",
                  "valueProp": "value",
                  "options": [
                    {
                      "label": "Phone",
                      "value": "Phone"
                    },
                    {
                      "label": "Email",
                      "value": "Email"
                    }
                  ],
                  "flex": ""
                }
              }
            ]
          },
          {
            "wrapper": "wrapper_tab",
            "templateOptions": {
              "title": "Additional Details",
              "active": false
            },
            "fieldGroup": [
              {
                "type": "select",
                "key": "self.assignedToGroup",
                "templateOptions": {
                  "label": "Assigned To Group",
                  "theme": "",
                  "styleElements": "display:block;",
                  "multiple": false,
                  "labelProp": "label",
                  "valueProp": "value",
                  "options": [
                    {
                      "label": "Sales 1",
                      "value": "Sales 1"
                    },
                    {
                      "label": "Sales 2",
                      "value": "Sales 2"
                    }
                  ],
                  "flex": ""
                }
              },
              {
                "type": "select",
                "key": "self.assignedToUser",
                "templateOptions": {
                  "label": "Assigned To User",
                  "theme": "",
                  "styleElements": "display:block;",
                  "required": "true",
                  "multiple": false,
                  "labelProp": "label",
                  "valueProp": "value",
                  "options": [
                    {
                      "label": "Exective 1",
                      "value": "Exective 1"
                    },
                    {
                      "label": "Exective 2",
                      "value": "Exective 2"
                    }
                  ],
                  "flex": ""
                }
              },
              {
                "type": "input",
                "key": "self.createdByUser",
                "templateOptions": {
                  "label": "Created By User",
                  "theme": "",
                  "styleElements": "display:block;",
                  "disabled": true,
                  "flex": ""
                }
              },
              {
                "type": "input",
                "key": "self.createdByGroup",
                "templateOptions": {
                  "label": "Created By Group",
                  "theme": "",
                  "styleElements": "display:block;",
                  "disabled": true,
                  "flex": ""
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "button",
    "templateOptions": {
      "label": "Create Opportunity",
      "class": "md-raised md-primary",
      "method": "confirmDetails"
    },
    "hideExpression": "model.self.opportunityMode!=\"QuickCreate\" && model.self.opportunityMode!=\"Create\""
  },
  {
    "type": "button",
    "templateOptions": {
      "label": "Update Opportunity",
      "class": "md-raised md-primary",
      "method": "updateOpportunity"
    },
    "hideExpression": "model.self.opportunityMode!=\"Update\""
  },
  {
    "type": "button",
    "templateOptions": {
      "label": "Delete Opportunity",
      "class": "md-raised md-primary",
      "method": "deleteOpportunity"
    },
    "hideExpression": "model.self.opportunityMode!=\"Delete\""
  }
];

		var opportunity_viewAll = [{
			"key": "list",
			"type": "ui-grid",
			"wrapper":["gridWrapper","card_noHeaderNoActions"],
			"templateOptions": {
				"label": "Opportunity",
				"cardLabel": "View All Opportunities",
				"cardHeaderBackground": "rgb(33,150,243)",
				"cardLabelColor": "white",
				"columnDefs": [{
						"field": "opportunityId"
					},
					{
						"field": "firstName"
					}, {
						"field": "lastName"
					}, {
						"field": "contactNumber"
					},
					{
						"field": "emailAddress"
					}, {
						"field": "contactRole"
					}, {
						"field": "preferredModeOfCommmunication"
					},
					{
						"name": "Actions",
						"cellTemplate": "<md-button class='md-icon-button' ng-click=grid.appScope.clicked('openViewOpportunity',row) style='min-width: 0px;'><md-icon style='color:rgb(68,138,255); vertical-align: baseline;'>remove_red_eye</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openEditOpportunity',row) style='min-width: 0px;'><md-icon style='color:green; vertical-align: baseline;'>edit</md-icon></md-button><md-button class='md-icon-button md-accent' ng-click=grid.appScope.clicked('openDeleteOpportunity',row) style='min-width: 0px;'><md-icon style='vertical-align: baseline;'>delete</md-icon></md-button>",
						"enableFiltering": false
					}
				],
				"onRegisterApi": ""
			}
		}];

		var SummaryDialog=[
			{
				"type":"SummaryDialogBox",
				"templateOptions":{
						"heading":"Opportunity Summary",
						"style":"min-width:680px; min-height:310px;",
						"setOfFields":[
							{
								"label":"Opportunity Name",
								"key":"opportunityName"
							},
							{
								"label":"Opportunity Source",
								"key":"opportunitySource"
							},
							{
								"label":"Opportunity Type",
								"key":"opportunityType"
							},
							{
								"label":"Opportunity Size",
								"key":"opportunitySize"
							},
							{
								"label":"Purchase Time Frame",
								"key":"purchaseTimeFrame"
							},
							{
								"label":"Probability",
								"key":"probability"
							},
							{
								"label":"Competitor",
								"key":"competitor"
							},
							{
								"label":"Requested Date",
								"key":"requestedDate"
							},
							{
								"label":"Closed Date",
								"key":"closedDate"
							},
							{
								"label":"Closure Reason",
								"key":"closureReason"
							},
							{
								"label":"Territory Code Or Region",
								"key":"territoryCodeOrRegion"
							},
							{
								"label":"Stage",
								"key":"stage"
							}
						]
					}
				}];



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
				} else if (view === 'SummaryDialog') {
					return JSON.stringify(SummaryDialog);
				}
			}
		};
	}
})();
