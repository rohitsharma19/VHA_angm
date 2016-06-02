(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:agreementCtrl
	 * @description
	 * # agreementCtrl
	 * Controller of the app
	 */

	angular
		.module('agreement')
		.controller('AgreementCtrl', Agreement);


	Agreement.$inject = ['$state', '$stateParams', 'agreementManager', 'agreementSharedData'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Agreement($state, $stateParams, agreementManager, agreementSharedData) {
		/*jshint validthis: true */
		var vm = this;
		vm.agreement = {};


		if ($state.current.name === 'home.agreement.viewAll') {

			console.log("VIEW ALL Agreement");
			vm.agreementList = [];

			vm.fields = JSON.parse(agreementSharedData.getLayout('agreement_viewAll'));
			agreementManager.inflateUiGrid(vm);


			vm.openViewAgreement = function(row) {

				console.log("Inside openViewAgreement");
				agreementManager.openViewAgreement(row.entity.agreementId);
			};
			vm.openEditAgreement = function(row) {
				console.log("inside openEditAgreement");
				agreementManager.openEditAgreement(row.entity.agreementId);
			};

			vm.openDeleteAgreement = function(row) {
				console.log("inside openDeleteAgreement");
				agreementManager.openDeleteAgreement(row.entity.agreementId);
			};

			vm.openCreateAgreement = function() {
				console.log("inside openCreateAgreement");
				agreementManager.openCreateAgreement();
			};
		}
		if (($state.current.name === 'home.agreement.create') || ($state.current.name === 'home.agreement.QuickCreate')) {

			if ($state.current.name === 'home.agreement.QuickCreate') {
				console.log("CREATE QUICK AGREEMENT");

				vm.agreement = {
					self: {}
				};
				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				vm.agreement.self.agreementMode = "QuickCreate";

				if ($stateParams.leadDetails != null)
					vm.agreement.leadDetails = $stateParams.leadDetails;

				if ($stateParams.opportunityDetails != null)
					vm.agreement.opportunityDetails = $stateParams.opportunityDetails;

				if ($stateParams.quoteDetails != null) {
					vm.agreement.quoteDetails = $stateParams.quoteDetails;
					vm.agreement.self.quoteId = $stateParams.quoteDetails.quoteId;
				}

			} else if ($state.current.name === 'home.agreement.create') {
				console.log("CREATE AGREEMENT");

				vm.agreement = {
					self:{}
				};
				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				vm.agreement.self.agreementMode = "Create";
			}

			vm.createAgreement = function(agreement) {
				console.log("Inside createAgreement().");
				console.log(agreement);
				agreementManager.captureSignature(agreement);
				agreementManager.createAgreement(agreement);
			};

		}
		if ($state.current.name === 'home.agreement.view') {
			console.log("VIEW AGREEMENT");
			vm.agreement = {};
			vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));

			if ($stateParams.agreement != null) {
				vm.agreement = $stateParams.agreement;
				vm.agreement.self.agreementMode = "View";
				agreementManager.displaySignatureForView(vm.agreement);
			}
		}

		if ($state.current.name === 'home.agreement.edit') {
			console.log("EDIT Agreement");

			vm.agreement = {};
			vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));

			if ($stateParams.agreement != null) {
				vm.agreement = $stateParams.agreement;
				vm.agreement.self.agreementMode = "Update";
				agreementManager.displaySignatureForUpdate(vm.agreement);
			}

			vm.updateAgreement = function(agreement) {
				console.log("Inside updateAgreement()");
				console.log(agreement);
				agreementManager.captureSignature(agreement);
				agreementManager.updateAgreement(agreement);
			};
		}

		if ($state.current.name === 'home.agreement.delete') {
			console.log("DELETE Agreement");

			vm.agreement = {};
			vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));

			if ($stateParams.agreement != null) {
				vm.agreement = $stateParams.agreement;
				vm.agreement.self.agreementMode = "Delete";
				agreementManager.displaySignatureForView(vm.agreement);
			}

			vm.deleteAgreement = function(agreement) {
				console.log("Inside deleteAgreement()");
				console.log(agreement);
				agreementManager.deleteAgreement(agreement.agreementId);
			};
		}

		vm.resetSign = function() {
			agreementManager.resetSignature();
		}
	}
})();
