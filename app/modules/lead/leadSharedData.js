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
								key: 'first_name',
								type: 'input',
								templateOptions: {
										type: 'text',
										label: '',
										placeholder: 'Enter your first name',
										required: true
								}
						},
						{
								key: 'last_name',
								type: 'input',
								templateOptions: {
										type: 'text',
										label: 'Last Name',
										placeholder: 'Enter your last name',
										required: true
								}
						},
						{
								key: 'email',
								type: 'input',
								templateOptions: {
										type: 'email',
										label: 'Email address',
										placeholder: 'Enter email',
										required: true
								}
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
