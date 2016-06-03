(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:agreementService
	 * @description
	 * # agreementService
	 * Service of the app
	 */

	angular
		.module('agreement')
		.factory('agreementSharedData', Agreement);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Agreement.$inject = ['$http'];

	function Agreement($http) {

		//var agreementMode = null;
		var agreementSharedData = null;
		var resetButton = [{
			type: 'reset',
			templateOptions: {
				label: 'Reset',
				class: 'md-raised md-primary',
				method: 'rersetSign'
			},
			hideExpression: 'model.self.agreementMode!="Create" && model.self.agreementMode!="QuickCreate" && model.self.agreementMode!="Update"'

		}]
		var agreementDetails = [{
			"key": "agremntStartDate",
			"type": "input",
			"templateOptions": {
				"label": "Agreeent Start Date",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "agreementId",
			"type": "input",
			"templateOptions": {
				"label": "Agreeent Id",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "agreementEndDate",
			"type": "input",
			"templateOptions": {
				"label": "Agreeent End Date",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "agremntStatus",
			"type": "input",
			"templateOptions": {
				"label": "Agreeent Status",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "agremntEffecDate",
			"type": "input",
			"templateOptions": {
				"label": "Agreeent Effective Date",
				"type": "text",
				"styleElements": "display:block;"
			}
		}]
		var productSummary = [{
			"key": "offerName",
			"type": "input",
			"templateOptions": {
				"label": "Offer Name",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "listPrice",
			"type": "input",
			"templateOptions": {
				"label": "List Price",
				"type": "text",
				"styleElements": "display:block;"
			}
		}, {
			"key": "salePrice",
			"type": "input",
			"templateOptions": {
				"label": "Offer Price",
				"type": "text",
				"styleElements": "display:block;"
			}
		}]


		var agreement_CRUD = [
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
          "status": "done",
          "label": "Know your customer"
        },
        {
          "status": "done",
          "label": "Recommendations"
        },
        {
          "status": "done",
          "label": "Generate quote"
        },
        {
          "status": "current",
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
      "style": "color:white; background-color: rgb(33, 150, 243);",
      "class": "flex-33",
			"mdColorBackground":"primary-400",
      "fields": [
        {
          "title": "Quote ID",
          "type": "quoteDetails",
          "key": "quoteId"
        },
        {
          "title": "Company Name",
          "type": "leadDetails",
          "key": "compName"
        },
        {
          "title": "Opportunity status",
          "type": "opportunityDetails",
          "key": "status"
        },
        {
          "title": "Assigned to User",
          "type": "opportunityDetails",
          "key": "assignedToUser"
        },
        {
          "title": "Created By User",
          "type": "opportunityDetails",
          "key": "createdByUser"
        }
      ]
    }
  },
  {
    "className":"layout-row",
    "fieldGroup": [
      {
        "elementAttributes": {
          "formlyFieldGroupClass":"flex-50"
        },
        "wrapper": "card_noHeaderNoActions",
        "fieldGroup": [
          {
            "type": "list",
            "templateOptions": {
              "brief": "This page contains the terms and conditions concerning your use of the Vodafone services. By accessing this site, you agree to be bound by the following terms and conditions.",
              "list": [
                "Vodafone India Limited, Vodafone Mobile Services Limited, Vodafone South Limited, Vodafone East Limited, Vodafone West Limited, Vodafone Digilink Limited, Vodafone Cellular Limited, Vodafone Spacetel Limited (jointly hereinafter to as \"Vodafone\") shall use reasonable endeavours to check the accuracy of the information published on its site.",
                "Content (information, communications, images and sounds contained on or available through vodafone.in) is provided by Vodafone, its affiliates, independent content providers and third parties.",
                "Vodafone will use its reasonable endeavours to maintain vodafone.in in a fully operating condition. It is not responsible for the results of any defects that exist in vodafone.in.",
                "It is a condition of us allowing you access to the information on vodafone.in that you accept we will not be liable for any action you take relying on the information on vodafone.in.",
                "If your PC does not support relevant technology including but not limited to encryption you may not be able to use certain services or access certain information on vodafone.in.",
                "You may not mirror any material contained on vodafone.in on any other server without the prior written consent of Vodafone India Limited.",
                "You acknowledge that Vodafone has no control over and excludes all liability for any material on the Internet which can be accessed by using vodafone.in. Neither can we be deemed to have endorsed the content."
              ],
              "headline": "Terms and Conditions",
              "card": {
                "imagePath": "",
                "headlineBackgroundColor": "#e4e4e4",
                "actions": []
              }
            }
          },
          {
            "type": "checkbox",
            "templateOptions": {
              "label": "I agree to the above terms and Conditions."
            },
            "hideExpression": "model.self.agreementMode!='Create' && model.self.agreementMode!='QuickCreate'"
          }
        ]
      },
      {
        "elementAttributes": {
          "formlyFieldGroupClass": "flex-50 layout-row"
        },
        "className":"layout-column layout-fill",
        "fieldGroup": [
          {
            "className": "flex-60 layout-row",
            // "wrapper": "card_noHeaderNoActions",
            "type": "topHeaderDetails",
						"templateOptions": {
							"style": "color:white;",
							"class": "flex-100",
							"mdColorBackground":"white",
							"fields": [
								{
									"title": "Quote ID",
									"type": "quoteDetails",
									"key": "quoteId"
								},
								{
									"title": "Company Name",
									"type": "leadDetails",
									"key": "compName"
								},
								{
									"title": "Opportunity status",
									"type": "opportunityDetails",
									"key": "status"
								},
								{
									"title": "Assigned to User",
									"type": "opportunityDetails",
									"key": "assignedToUser"
								},
								{
									"title": "Created By User",
									"type": "opportunityDetails",
									"key": "createdByUser"
								},
								{
									"title": "Agreement Id",
									"type": "self",
									"key": "agreementId"
								}
							]
						}
          },
          {
            "elementAttributes": {
              "formlyFieldGroupClass":"flex-40 layout-row"
            },
            "wrapper": "card_noHeaderNoActions",
            "templateOptions": {
              "class":"flex-100"
            },
            "fieldGroup": [
              {
                "type": "signature",
                "key": "signature",
                "templateOptions": {
                  "card": {
                    "imagePath": "",
                    "headline": "Signature",
                    "headlineBackgroundColor": "#e4e4e4",
                    "actions": []
                  }
                }
              },
              {
                "type": "button",
                "templateOptions": {
                  "label": "Reset",
                  "class": "md-raised md-primary",
                  "method": "resetSign"
                },
                "hideExpression": "model.self.agreementMode!='Create' && model.self.agreementMode!='QuickCreate' && model.self.agreementMode!='Update'"
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
      "label": "Create Agreement",
      "class": "md-raised md-primary",
      "method": "createAgreement"
    },
    "hideExpression": "model.self.agreementMode!='QuickCreate' && model.self.agreementMode!='Create'"
  },
  {
    "type": "button",
    "templateOptions": {
      "label": "Update Agreement",
      "class": "md-raised md-primary",
      "method": "updateAgreement"
    },
    "hideExpression": "model.self.agreementMode!='Update'"
  },
  {
    "type": "button",
    "templateOptions": {
      "label": "Delete Agreement",
      "class": "md-raised md-primary",
      "method": "deleteAgreement"
    },
    "hideExpression": "model.self.agreementMode!='Delete'"
  }
];

		var agreement_viewAll = [{
			key: "list",
			type: "ui-grid",
			"wrapper": ["gridWrapper", "card_noHeaderNoActions"],
			templateOptions: {
				"label": "Agreement",
				"cardLabel": "View All Agreements",
				"cardHeaderBackground": "rgb(33,150,243)",
				"cardLabelColor": "white",
				columnDefs: [{
						field: "agreementId"
					}, {
						field: "agremntStartDate"
					}, {
						field: "agremntEndDate"
					}, {
						field: "agremntEffecDate"
					}, {
						field: "listPrice"
					},
					//  {
					// 	field: "agremntDocVer"
					// },
					//  {
					// 	field: "agremntDocType"
					// },
					//  {
					// 	field: "serviceReqDate"
					// },
					{
						name: "Actions",
						cellTemplate: "<md-button class='md-icon-button' ng-click=grid.appScope.clicked('openViewAgreement',row) style='min-width: 0px;'><md-icon style='color:rgb(68,138,255); vertical-align: baseline;'>remove_red_eye</md-icon></md-button><md-button class='md-icon-button' ng-click=grid.appScope.clicked('openEditAgreement',row) style='min-width: 0px;'><md-icon style='color:green; vertical-align: baseline;'>edit</md-icon></md-button><md-button class='md-icon-button md-accent' ng-click=grid.appScope.clicked('openDeleteAgreement',row) style='min-width: 0px;'><md-icon style='vertical-align: baseline;'>delete</md-icon></md-button>",
						enableFiltering: false
					}
				],

				onRegisterApi: ""
			}
		}];
		return {

			setAgreement: function(agreementData) {
				agreementSharedData = agreementData;

				console.log(agreementSharedData);
			},
			getAgreement: function() {
				return agreementSharedData;
			},
			resetAgreement: function() {
				agreementSharedData = null;
			},
			getLayout: function(view) {
				if (view === 'agreement_CRUD') {
					return JSON.stringify(agreement_CRUD);
				} else if (view === 'agreement_viewAll') {
					return JSON.stringify(agreement_viewAll);
				}
			}
		}
	}
})();
