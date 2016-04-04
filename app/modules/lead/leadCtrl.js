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
			    	console.log("Inside openViewLead");
			    	leadManager.openViewLead(row.entity.leadId);
			    };
			    
			    vm.openEditLead = function(row) {
			    	console.log("inside openEditLead");
			    	leadManager.openEditLead(row.entity.leadId);
			    };

			    vm.openDeleteLead = function(row) {
			    	console.log("inside openDeleteLead");
			    	leadManager.openDeleteLead(row.entity.leadId);
			    };

			    vm.openCreateLead = function() {
			    	console.log("inside openCreateLead");
			    	leadManager.openCreateLead();
			    };
			}

			if(($state.current.name === 'home.lead.create')||($state.current.name === 'home.lead.QuickCreate')){
				
				if($state.current.name === 'home.lead.QuickCreate'){
					console.log("CREATE QUICK LEAD");
					vm.leadMode = "QuickCreate";
				}
				else if($state.current.name === 'home.lead.create'){
					console.log("CREATE LEAD");
					vm.leadMode = "Create";	
				}
				

				vm.createLead = function(lead){
					console.log("Inside createLead().");
					console.log(lead);
					leadManager.createLead(lead);
				};
			}

			

			if($state.current.name === 'home.lead.edit'){
				console.log("EDIT LEAD");
				vm.leadMode = "Update";

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

				vm.deleteLead = function(lead) {
					console.log("Inside deleteLead()");
					console.log(lead);
		    		leadManager.deleteLead(lead.leadId);
		        };
			}
		}
})();