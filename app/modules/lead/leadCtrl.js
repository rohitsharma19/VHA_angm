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

	Lead.$inject = ['$state', 'leadManager', 'leadSharedData','$mdDialog','$mdMedia','$scope','sharedService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Lead($state, leadManager, leadSharedData, $mdDialog, $mdMedia, $scope, sharedService) {
		/*jshint validthis: true */
		var vm = this;

		vm.lead = {};

		if ($state.current.name === 'home.lead.viewAll') {

			console.log("VIEW ALL LEADS");
			vm.leadsList=[];

			vm.fields = JSON.parse(leadSharedData.getLayout('lead_viewAll'));
			leadManager.inflateUiGrid(vm);

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

		if (($state.current.name === 'home.lead.create') || ($state.current.name === 'home.lead.QuickCreate')) {

			if ($state.current.name === 'home.lead.QuickCreate') {
				console.log("CREATE QUICK LEAD");

				vm.lead = {};
				vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
				vm.lead.leadMode = "QuickCreate";
			} else if ($state.current.name === 'home.lead.create') {
				console.log("CREATE LEAD");

				vm.lead = {};
				//vm.leadFields = leadSharedData.getLayout('lead_CRUD');
				vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
				vm.lead.leadMode = "Create";
			}

			vm.createLead = function(lead) {
				console.log("Inside createLead().");
				console.log(lead);
				leadManager.createLead(lead);
			};

			vm.addContact = function(lead){
				console.log("Inside addContact().");
				console.log(lead);
				console.log(vm.leadFields);
			};
		}

		vm.confirmDetails = function(lead) {
    // var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'confirmationDialogueBox.html',
			targetEvent: '',
      parent: angular.element(document.body),
      clickOutsideToClose:true
      // fullscreen: useFullScreen
    })
    .then(function(answer)
		{
      // vm.status = 'You said the information was "' + answer + '".';
    }, function() {
      // vm.status = 'You cancelled the dialog.';
    }
	);
		console.log(vm.status);
		vm.fields = JSON.parse(leadSharedData.getLayout('SummaryDialog'));
    // $scope.$watch(function() {
    //   return $mdMedia('xs') || $mdMedia('sm');
    // },
		// function(wantsFullScreen) {
    //   vm.customFullscreen = (wantsFullScreen === true);
    // });
  };

	function DialogController($scope, $mdDialog) {
		$scope.model =vm.lead;
		$scope.fields=vm.fields;
   $scope.hide = function() {
     $mdDialog.hide();
   };
   $scope.cancel = function() {
     $mdDialog.cancel();
   };
	 $scope.save = function(answer) {
		 vm.createLead(vm.lead);
		 $mdDialog.hide(answer);
	 };
   $scope.answer = function(answer) {
     $mdDialog.hide(answer);
   };
}



		if ($state.current.name === 'home.lead.edit') {
			console.log("EDIT LEAD");
			//vm.lead = {};
			//vm.leadFields = leadSharedData.getLayout('lead_CRUD');
			vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
			vm.lead = leadSharedData.getLead();
			vm.lead.leadMode = "Update";
			leadSharedData.resetLead();

			vm.updateLead = function(lead) {
				console.log("Inside updateLead()");
				console.log(lead);
				leadManager.updateLead(lead);
			};
		}

		if ($state.current.name === 'home.lead.view') {
			console.log("VIEW LEAD");
			//vm.leadMode = "View";
			//vm.lead = {};
			//vm.leadFields = leadSharedData.getLayout('lead_CRUD');
			vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
			vm.lead = leadSharedData.getLead();
			vm.lead.leadMode = "View";

			leadSharedData.resetLead();
		}

		if ($state.current.name === 'home.lead.delete') {
			console.log("DELETE LEAD");
			//vm.leadMode = "Delete";
			//vm.lead = {};
			//vm.leadFields = leadSharedData.getLayout('lead_CRUD');
			vm.leadFields = JSON.parse(leadSharedData.getLayout('lead_CRUD'));
			vm.lead = leadSharedData.getLead();
			vm.lead.leadMode = "Delete";
			leadSharedData.resetLead();

			vm.deleteLead = function(lead) {
				console.log("Inside deleteLead()");
				console.log(lead);
				leadManager.deleteLead(lead.leadId);
			};
		}
	}
})();
