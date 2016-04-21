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

		function Lead ($http) {

			//var leadMode = null;
			var leadSharedData = null;
			var lead_CRUD = [
						{
								type: 'input',
								key: 'lead.abn',
								templateOptions: {
									type: 'text',
									label:'ABN Number'
								}
						},
						{
								type: 'input',
								key: 'lead.acn',
								templateOptions: {
									type: 'text',
									label:'ACN'
								}
						},
						{
								type: 'input',
								key: 'lead.compName',
								templateOptions: {
									type: 'text',
									label:'Company Name'
								}
						},
						{
								type: 'select',
								key: 'lead.custType',
								templateOptions: {
									label:'Customer Type',
									labelProp: "custType",
							    valueProp: "id",
							    options: [
							        {custType: "New", id: 1},
							        {custType: "Existing", id: 2}
							    ]
								}
						},
						{
								type: 'input',
								key: 'lead.pin',
								templateOptions: {
									type: 'text',
									label:'PIN'
								}
						},
						{
								type: 'input',
								key: 'lead.tradingAs',
								templateOptions: {
									type: 'text',
									label:'Trading As'
								}
						},
						{
								type: 'test',
								key: 'test',
						},
						{
								type: 'test1',
								key: 'test1',
						},

				];

			return{

				setLead : function(leadData){
					leadSharedData = leadData;
				},
				getLead : function(){
					return leadSharedData;
				},
				resetLead : function(){
					leadSharedData = null;
				},
				getLayout : function(view){
					if(view === 'lead_CRUD'){
						return lead_CRUD;
					}
				}
			}
		}
})();
