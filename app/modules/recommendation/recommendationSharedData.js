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

		var recommendation_CRUD = [{
			"wrapper": "wrapper_tabset",
			"fieldGroup": [{
				"wrapper": "wrapper_tab",
				"elementAttributes": {
					"layout": "row",
					"style": "height:700px;"
				},
				"templateOptions": {
					"title": "Offers",
					"active": true
				},
				"fieldGroup": [{
					"elementAttributes": {
						"formlyFieldGroupClass": "flex-30 layout-fill layout-column"
					},
					"fieldGroup": [{
						"type": "itemsList",
						"elementAttributes": {
							"class": "layout-row flex-100"
						},
						"templateOptions": {
							"itemType": "Offer",
							"items": "model"
						}
					}]
				}, {
					"elementAttributes": {
						"formlyFieldGroupClass": "flex-50 layout-fill layout-column"
					},
					"fieldGroup": [{
						"elementAttributes": {
							"class": "layout-row flex-100"
						},
						"type": "itemDetail",
						"templateOptions": {
							"itemType": "Offer"
						}
					}]
				}, {
					"elementAttributes": {
						"formlyFieldGroupClass": "flex-20 layout-fill layout-column"
					},
					"fieldGroup": [{
						"elementAttributes": {
							"class": "layout-row flex-100"
						},
						"type": "chips",
						"templateOptions": {
							"itemType": "Offer"
						}
					}]
				}]
			}, {
				"wrapper": "wrapper_tab",
				"elementAttributes": {
					"layout": "row",
					"style": "height:700px;"
				},
				"templateOptions": {
					"title": "Devices",
					"active": true
				},
				"fieldGroup": [{
					"elementAttributes": {
						"formlyFieldGroupClass": "flex-30 layout-fill layout-column"
					},
					"fieldGroup": [{
						"type": "itemsList",
						"elementAttributes": {
							"class": "layout-row flex-100"
						},
						"templateOptions": {
							"itemType": "Device",
							"items": []
						}
					}]
				}, {
					"elementAttributes": {
						"formlyFieldGroupClass": "flex-50 layout-fill layout-column"
					},
					"fieldGroup": [{
						"elementAttributes": {
							"class": "layout-row flex-100"
						},
						"type": "itemDetail",
						"templateOptions": {
							"itemType": "Device"
						}
					}]
				}, {
					"elementAttributes": {
						"formlyFieldGroupClass": "flex-20 layout-fill layout-column"
					},
					"fieldGroup": [{
						"elementAttributes": {
							"class": "layout-row flex-100"
						},
						"type": "chips",
						"templateOptions": {
							"itemType": "Device"
						}
					}]
				}]
			}]
		}, {
			"type": "button",
			"templateOptions": {
				"label": "Save Recommendation",
				"class": "md-raised md-primary",
				"method": "saveRecommendation"
			}
		}];

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
		}, {
			"name": "1_Year_Validity",
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
			"name": "Zero Balance",
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
			"name": "1Month_TalkTime",
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
			"name": "5Month_Validity",
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
					return JSON.stringify(recommendation_CRUD);
				} else if (view === 'Offers') {
					return JSON.stringify(Offers);
				} else if (view === 'Devices') {
					return JSON.stringify(Devices);
				}
			}
		}
	}
})();
