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

		Opportunity.$inject = ['$state','$stateParams', 'opportunityManager','opportunitySharedData', 'sharedService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Opportunity($state, $stateParams, opportunityManager,opportunitySharedData, sharedService) {
			/*jshint validthis: true */

			var vm = this;


			if($state.current.name === 'home.opportunity.viewAll'){

				console.log("VIEW ALL OPPORTUNITIES");

				vm.opportunitiesList=[];

				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_viewAll'));
				opportunityManager.inflateUiGrid(vm);

				// vm = opportunityManager.setUpUiGrid(vm);

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

			if(($state.current.name === 'home.opportunity.create')||($state.current.name === 'home.opportunity.QuickCreate')){

				if($state.current.name === 'home.opportunity.QuickCreate'){
					console.log("CREATE QUICK OPPORTUNITY");

					vm.opportunity = {self:{}};
					vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
					vm.opportunity.self.opportunityMode = "QuickCreate";
					vm.opportunity.self.leadId = $stateParams.leadDetails.leadId;
					console.log("opportunity.self");
					// console.log(opportunity.self	);
					vm.opportunity.leadDetails = $stateParams.leadDetails;
					console.log("vm.opportunity.leadDetails");
					console.log(vm.opportunity.leadDetails);
					// console.log("$stateParams.leadId")
					// console.log($stateParams.leadId);
					// vm.opportunity.leadDetails=sharedService.getLead($stateParams.leadId);
					// console.log("sharedService.getLead($stateParams.leadId)");
					// console.log(sharedService.getLead($stateParams.leadId));
					console.log(vm.opportunity);
				}
				else if($state.current.name === 'home.opportunity.create'){
					console.log("CREATE OPPORTUNITY");

					vm.opportunity = {self:{}};
					vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
					vm.opportunity.self.opportunityMode = "Create";
					// vm.opportunity.self.leadId=model.opportunity.leadId;
					vm.opportunity.leadDetails=sharedService.getLead($stateParams.leadId);
				}

				vm.createOpportunity = function(opportunity){
					console.log("Inside createOpportunity().");
					console.log(opportunity);
					opportunityManager.createOpportunity(opportunity.self);
				};
			}

			if($state.current.name === 'home.opportunity.edit'){
				console.log("EDIT OPPORTUNITY");
				// vm.opportunityMode = "Update";

				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity={};
				vm.opportunity = opportunitySharedData.getOpportunity();
				vm.opportunity.self.opportunityMode = "Update";
				// vm.opportunity.leadDetails = sharedService.getLead(vm.opportunity.self.leadId);
				opportunitySharedData.resetOpportunity();

				vm.updateOpportunity = function(opportunity){
					console.log("Inside updateOpportunity()");
					console.log(opportunity);
					opportunityManager.updateOpportunity(opportunity.self);
				};
			}

			if($state.current.name === 'home.opportunity.view'){
				console.log("VIEW OPPORTUNITY");
				vm.opportunity = {};
				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity = opportunitySharedData.getOpportunity();
				vm.opportunity.self.opportunityMode = "View";
				// vm.opportunity.leadDetails = sharedService.getLead(vm.opportunity.self.leadId);

				opportunitySharedData.resetOpportunity();
			}

			if($state.current.name === 'home.opportunity.delete'){
				console.log("DELETE OPPORTUNITY");

				vm.opportunityFields = JSON.parse(opportunitySharedData.getLayout('opportunity_CRUD'));
				vm.opportunity.self = opportunitySharedData.getOpportunity();
				vm.opportunity.self.opportunityMode = "Delete";
				// vm.opportunity.leadDetails = sharedService.getLead(vm.opportunity.self.leadId);

				opportunitySharedData.resetOpportunity();

				vm.deleteOpportunity = function(opportunity) {
					console.log("Inside deleteOpportunity()");
					console.log(opportunity);
		    		opportunityManager.deleteOpportunity(opportunity.self.opportunityId);
		        };
			}
		}
})();
