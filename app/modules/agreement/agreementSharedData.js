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

		function Agreement ($http) {

			//var agreementMode = null;
			var agreementSharedData = null;
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
			}
]
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
			}
]

			var agreement_CRUD=[{
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
						status: 'done',
						label: 'Recommendations'
					}, {
						status: 'done',
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
				}
			//	hideExpression: 'model.agreementMode="QuickCreate"'
		},{
			"fieldGroup": [
				{
								"type":"topHeaderDetails",
								"templateOptions":{
									"objectType":"leadDetails",
									"style":"color:black; margin:5 auto; text-align:left; font-size:16px; padding:15px; margin:.2em 0; background-color: #80CBC4;",
									"class": "flex-33",
									"fields":[
										{
											"title":"Company Name",
											"key":"compName"
										},
										{
											"title":"Created By User",
											// "type":"leadDetails",
											"key":"createdByUser"
										},
										{
											"title":"Lead status",
											// "type":"leadDetails",
											"key":"status"
										}
									]
								},
								// "hideExpression": "model.self.opportunityMode!=\"QuickCreate\"&& model.self.opportunityMode!=\"Update\""
							}]
			},
		{ "elementAttributes": {
												"layout": "row",
												// "layout-sm": "column"
										},
										"fieldGroup": [
												{
														"className":"flex-60",
														type:'list_of_cndn',
														templateOptions:{
														  // width:'740px',
														  brief:"This page contains the terms and conditions concerning your use of the Vodafone services. By accessing this site, you agree to be bound by the following terms and conditions.",
														  list1:[
														    "Vodafone India Limited, Vodafone Mobile Services Limited, Vodafone South Limited, Vodafone East Limited, Vodafone West Limited, Vodafone Digilink Limited, Vodafone Cellular Limited, Vodafone Spacetel Limited (jointly hereinafter to as \"Vodafone\") shall use reasonable endeavours to check the accuracy of the information published on its site.",
														    "Content (information, communications, images and sounds contained on or available through vodafone.in) is provided by Vodafone, its affiliates, independent content providers and third parties. The contents of vodafone.in are copyrightÂ© Vodafone its affiliates, independent content providers or third parties. All rights reserved.",
														    "Vodafone will use its reasonable endeavours to maintain vodafone.in in a fully operating condition. It is not responsible for the results of any defects that exist in vodafone.in. You should not assume that vodafone.in or its content is error free or that it will be suitable for the particular purposes that you have in mind when using it.",
														    "It is a condition of us allowing you access to the information on vodafone.in that you accept we will not be liable for any action you take relying on the information on vodafone.in. Vodafone will not be liable if your use of materials or information from vodafone.in results in the need for servicing, repair or correction of equipment or data, you assume any costs relating to the above.",
														    "If your PC does not support relevant technology including but not limited to encryption you may not be able to use certain services or access certain information on vodafone.in.",
														    "You may not mirror any material contained on vodafone.in on any other server without the prior written consent of Vodafone India Limited. Any unauthorised use of the contents of vodafone.in either under this clause or clause 4 above may be in breach of copyright laws or trademark laws.",
														    "You acknowledge that Vodafone has no control over and excludes all liability for any material on the Internet which can be accessed by using vodafone.in. Neither can we be deemed to have endorsed the content."
														  ],
														  headline: "Terms and Conditions",
														  label:"I agree to the above terms and Conditions.",
														  card: {
														    imagePath: "",
														    headlineBackgroundColor:"#e4e4e4",
														    actions: []
														  }
														}

												},
												{
														"elementAttributes": {

																"layout-wrap": "column",
																"className":"flex-40 "
														},
														"fieldGroup": [
																{
																		"className":"flex-100 ",
																		type:'product_details',
																		templateOptions:{
																		  // width:'340px',
																		  productSummary:productSummary,
																		  card: {
																		    imagePath: "",
																		    headline: "Product Summary",
																		    headlineBackgroundColor:"#e4e4e4",
																		    actions: []
																		  }
																		}
																},
																{
																		"className":"flex-100",
																		type:'signature',
																		key:'signature',
																		templateOptions:{
																		  card: {

																		    imagePath: "",
																		    headline: "Signature",
																		    headlineBackgroundColor:"#e4e4e4",
																		    actions: []
																		  }
																		}
																}
															]
												}]


		},
		{
			type: 'button',
			templateOptions: {
				label: 'Submit',
				class: 'md-raised md-primary',
				method: 'createAgreement'
			},
		//	hideExpression: 'model.agreemantMode!="QuickCreate" && model.leadMode!="Create"'
		},


	];

			var agreement_viewAll = [{
				key: 'list',
				type: 'ui-grid',
				templateOptions: {
					label: 'Agreement',
					columnDefs: [{

						field: 'agreementId',
						//cellTemplate: '<md-button class="md-primary" aria-label="leadId" ng-click=grid.appScope.clicked("openViewLead",row) style="margin: 0px 0px; font-size: 12px;">{{row.entity.leadId}}</md-button>'
					}
					,{
						field: 'agremntStartDate'
					}, {
						field: 'agremntEndDate'
					}, {
						field: 'agremntEffecDate'
					}, {
						field: 'listPrice'
					}, {
						field: 'agremntDocVer'
					}, {
						field: 'agremntDocType'
					}, {
						field: 'serviceReqDate'
					}, {
						name: 'Actions',
						//cellTemplate: '<div><md-button class="md-icon-button md-mini md-warning" ng-click=grid.appScope.clicked("openViewLead",row) style="min-width: 0px;"><md-icon style=" vertical-align: baseline;">remove_red_eye</md-icon></md-button><md-button class="md-icon-button md-primary md-raised md-mini" ng-click=grid.appScope.clicked("openEditLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary md-raised md-mini" ng-click=grid.appScope.clicked("openDeleteLead",row) style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button></div>',
						cellTemplate: '<md-button class="md-icon-button" ng-click=grid.appScope.clicked("openViewAgreement",row) style="min-width: 0px;"><md-icon style="color:rgb(68,138,255); vertical-align: baseline;">remove_red_eye</md-icon></md-button>',
						enableFiltering: false
					}
				],

					onRegisterApi: ''
				}
			}];
			return{

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
