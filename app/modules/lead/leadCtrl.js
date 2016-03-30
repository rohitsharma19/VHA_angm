(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:leadCtrl
	* @description
	* # leadCtrl
	* Controller of the app
	*/

  	angular
		.module('lead')
		.controller('LeadCtrl', Lead);

		Lead.$inject = ['$state','leadManager','leadSharedData'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Lead($state,leadManager,leadSharedData) {
			/*jshint validthis: true */
			var vm = this;

			if($state.current.name === 'home.lead.viewAll'){
				
				console.log("VIEW ALL LEADS");
				
				vm = leadManager.setUpUiGrid(vm);

				vm.openViewLead = function(row) {
			    	console.log("Inside viewLead");
			    	leadManager.openViewLead(row.entity.leadId);
			    };
			    
			    vm.openEditLead = function(row) {
			    	console.log("inside openEditLead");
			    	leadManager.openEditLead(row.entity.leadId);
			    };

			    vm.openDeleteLead = function(row) {
			    	console.log("inside deleteLead");
			    	leadManager.openDeleteLead(row.entity.leadId);
			    };

			    vm.openCreateLead = function() {
			    	console.log("inside deleteLead");
			    	leadManager.openCreateLead();
			    };
			}

			if($state.current.name === 'home.lead.create'){
				console.log("CREATE LEAD");
				vm.leadMode = "Create";

				vm.saveLead = function(lead){
					console.log("Inside saveLead().");
					console.log(lead);
					leadManager.saveLead(lead);
				};
			}

			if($state.current.name === 'home.lead.edit'){
				console.log("EDIT LEAD");
				vm.leadMode = "Edit";

				vm.lead = leadSharedData.getLead();
				leadSharedData.resetLead();

				vm.updateLead = function(lead){
					console.log("Inside updateLead()");
					console.log(lead);
					leadManager.updateLead(lead);
				};
			}
			if($state.current.name === 'home.lead.view'){
				console.log("VIEW LEAD");
				vm.leadMode = "View";

				vm.lead = leadSharedData.getLead();
				leadSharedData.resetLead();
			}
			if($state.current.name === 'home.lead.delete'){
				console.log("DELETE LEAD");
				vm.leadMode = "Delete";

				vm.lead = leadSharedData.getLead();
				leadSharedData.resetLead();

				vm.deleteLead = function() {
		    		leadManager.deleteLead(vm.lead.leadId);
		        };
			}
		}
})();
