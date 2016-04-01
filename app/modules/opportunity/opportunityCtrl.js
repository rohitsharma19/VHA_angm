(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:opportunityCtrl
	* @description
	* # opportunityCtrl
	* Controller of the app
	*/

  	angular
		.module('opportunity')
		.controller('OpportunityCtrl', Opportunity);

		Opportunity.$inject = ['$state','opportunityManager','opportunitySharedData'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Opportunity($state,opportunityManager,opportunitySharedData) {
			/*jshint validthis: true */
			var vm = this;

			if($state.current.name === 'home.opportunity.viewAll'){
				
				console.log("VIEW ALL OPPORTUNITIES");
				
				vm = opportunityManager.setUpUiGrid(vm);

				vm.openViewOpportunity = function(row) {
			    	console.log("Inside openViewOpportunity");
			    	opportunityManager.openViewOpportunity(row.entity.opportunityId);
			    };
			    
			    vm.openEditOpportunity = function(row) {
			    	console.log("inside openEditOpportunity");
			    	opportunityManager.openEditOpportunity(row.entity.opportunityId);
			    };

			    vm.openDeleteOpportunity = function(row) {
			    	console.log("inside openDeleteOpportunity");
			    	opportunityManager.openDeleteOpportunity(row.entity.opportunityId);
			    };

			    vm.openCreateOpportunity = function() {
			    	console.log("inside openCreateOpportunity");
			    	opportunityManager.openCreateOpportunity();
			    };
			}

			if($state.current.name === 'home.opportunity.create'){
				console.log("CREATE OPPORTUNITY");
				vm.opportunityMode = "Create";

				vm.createOpportunity = function(opportunity){
					console.log("Inside createOpportunity().");
					console.log(opportunity);
					opportunityManager.createOpportunity(opportunity);
				};
			}

			if($state.current.name === 'home.opportunity.edit'){
				console.log("EDIT OPPORTUNITY");
				vm.opportunityMode = "Update";

				vm.opportunity = opportunitySharedData.getOpportunity();
				opportunitySharedData.resetOpportunity();

				vm.updateOpportunity = function(opportunity){
					console.log("Inside updateOpportunity()");
					console.log(opportunity);
					opportunityManager.updateOpportunity(opportunity);
				};
			}

			if($state.current.name === 'home.opportunity.view'){
				console.log("VIEW OPPORTUNITY");
				vm.opportunityMode = "View";

				vm.opportunity = opportunitySharedData.getOpportunity();
				opportunitySharedData.resetOpportunity();
			}
			
			if($state.current.name === 'home.opportunity.delete'){
				console.log("DELETE OPPORTUNITY");
				vm.opportunityMode = "Delete";

				vm.opportunity = opportunitySharedData.getOpportunity();
				opportunitySharedData.resetOpportunity();

				vm.deleteOpportunity = function(opportunity) {
					console.log("Inside deleteOpportunity()");
					console.log(opportunity);
		    		opportunityManager.deleteOpportunity(opportunity.opportunityId);
		        };
			}
		}
})();