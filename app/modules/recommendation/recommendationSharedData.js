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
		.module('recommendation')
		.factory('recommendationSharedData', Recommendation);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Recommendation.$inject = ['$http'];

	function Recommendation($http) {

		var recommendationSharedData = null;

// 		var recommendation_CRUD = [
//   {
//     "type": "progressTracker",
//     "wrapper": "card_noHeaderNoActions",
//     "templateOptions": {
//       "totalSteps": 5,
//       "steps": [
//         {
//           "status": "done",
//           "label": "Capture Initial Details"
//         },
//         {
//           "status": "done",
//           "label": "Know your customer"
//         },
//         {
//           "status": "current",
//           "label": "Recommendations"
//         },
//         {
//           "status": "todo",
//           "label": "Generate quote"
//         },
//         {
//           "status": "todo",
//           "label": "Generate agreement"
//         }
//       ],
//       "card": {
//         "imagePath": "",
//         "headline": "",
//         "actions": ""
//       },
//       "style": "",
// 			"cardContentStyle":"padding:0px 16px 0px 16px !important"
//     }
//   },
//   {
//     "type": "SummaryBlock",
//     "templateOptions": {
//       "style": "color:white; background-color: rgb(33, 150, 243);",
//       "class": "flex-33",
//       "fields": [
// 				{
// 					"title": "Opportunity ID",
// 					"type":"opportunityDetails",
// 					"key": "opportunityId"
// 				},
//         {
//           "title": "Company Name",
// 					"type":"leadDetails",
//           "key": "compName"
// 				},
// 				{
// 					"title": "Opportunity status",
// 					"type":"opportunityDetails",
// 					"key": "status"
// 				},
// 				{
// 					"title": "Assigned to User",
// 					"type":"opportunityDetails",
// 					"key": "assignedToUser"
// 				},
// 				{
//           "title": "Created By User",
// 					"type":"opportunityDetails",
//           "key": "createdByUser"
//         }
//       ]
//     }
//   },
//   {
//     "wrapper": "card_noHeaderNoActions",
//     "fieldGroup": [
//       {
//         "wrapper": "wrapper_tabset",
//         "fieldGroup": [
//           {
//             "wrapper": "wrapper_tab",
//             "elementAttributes": {
//               "layout": "row",
//               "style": "height:700px;"
//             },
//             "templateOptions": {
//               "title": "Offers",
//               "active": true
//             },
//             "fieldGroup": [
//               {
//                 "elementAttributes": {
//                   "formlyFieldGroupClass": "flex-30 layout-fill layout-column"
//                 },
//                 "fieldGroup": [
//                   {
//                     "type": "itemsList",
//                     "elementAttributes": {
//                       "class": "layout-row flex-100"
//                     },
//                     "templateOptions": {
//                       "itemType": "Offer",
//                       "items": "model"
//                     }
//                   }
//                 ]
//               },
//               {
//                 "elementAttributes": {
//                   "formlyFieldGroupClass": "flex-50 layout-fill layout-column"
//                 },
//                 "fieldGroup": [
//                   {
//                     "elementAttributes": {
//                       "class": "layout-row flex-100"
//                     },
//                     "type": "itemDetail",
//                     "templateOptions": {
//                       "itemType": "Offer"
//                     }
//                   }
//                 ]
//               },
//               {
//                 "elementAttributes": {
//                   "formlyFieldGroupClass": "flex-20 layout-fill layout-column"
//                 },
//                 "fieldGroup": [
//                   {
//                     "elementAttributes": {
//                       "class": "layout-row flex-100"
//                     },
//                     "type": "itemChips",
//                     "templateOptions": {
//                       "itemType": "Offer"
//                     }
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "wrapper": "wrapper_tab",
//             "elementAttributes": {
//               "layout": "row",
//               "style": "height:700px;"
//             },
//             "templateOptions": {
//               "title": "Devices",
//               "active": true
//             },
//             "fieldGroup": [
//               {
//                 "elementAttributes": {
//                   "formlyFieldGroupClass": "flex-30 layout-fill layout-column"
//                 },
//                 "fieldGroup": [
//                   {
//                     "type": "itemsList",
//                     "elementAttributes": {
//                       "class": "layout-row flex-100"
//                     },
//                     "templateOptions": {
//                       "itemType": "Device",
//                       "items": []
//                     }
//                   }
//                 ]
//               },
//               {
//                 "elementAttributes": {
//                   "formlyFieldGroupClass": "flex-50 layout-fill layout-column"
//                 },
//                 "fieldGroup": [
//                   {
//                     "elementAttributes": {
//                       "class": "layout-row flex-100"
//                     },
//                     "type": "itemDetail",
//                     "templateOptions": {
//                       "itemType": "Device"
//                     }
//                   }
//                 ]
//               },
//               {
//                 "elementAttributes": {
//                   "formlyFieldGroupClass": "flex-20 layout-fill layout-column"
//                 },
//                 "fieldGroup": [
//                   {
//                     "elementAttributes": {
//                       "class": "layout-row flex-100"
//                     },
//                     "type": "itemChips",
//                     "templateOptions": {
//                       "itemType": "Device"
//                     }
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "type": "button",
//         "templateOptions": {
//           "label": "Save Recommendation",
//           "class": "md-raised md-primary",
//           "method": "saveRecommendation"
//         }
//       }
//     ]
//   }
// ];

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

		return {

			setLead: function(recommendationData) {
				recommendationSharedData = recommendationData;
			},
			getLead: function() {
				return recommendationSharedData;
			},
			resetLead: function() {
				recommendationSharedData = null;
			},
			getLayout: function(view) {
				if (view === 'recommendation_CRUD') {
					return $http.get('app/modules/shared/pageStructureJSON/recommendation.json');
				} else if (view === 'Offers') {
					return JSON.stringify(Offers);
				} else if (view === 'Devices') {
					return JSON.stringify(Devices);
				}
			}
		}
	}
})();
