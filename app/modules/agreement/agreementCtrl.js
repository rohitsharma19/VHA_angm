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


	Agreement.$inject = ['$state', '$stateParams', '$mdDialog', '$mdMedia', 'agreementManager', 'agreementSharedData','$scope', 'parentModel'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Agreement($state, $stateParams, $mdDialog, $mdMedia, agreementManager, agreementSharedData, $scope, parentModel) {
		/*jshint validthis: true */
		var vm = this;
		vm.agreement = {
			self:{}
		};

    function quoteSelectionDialogController($scope, $mdDialog, parentModel, agreementManager) {

			$scope.fields = vm.fields;
			$scope.quoteList = [];

			$scope.checkVariable = "Here in Agreement";
			parentModel.inflateQuoteUiGrid($scope);
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.selectQuote = function(row) {
				var quote = row.entity;
				parentModel.getOpportunity(quote.opportunityId).then(
					function(response) {
						quote.opportunityDetails = response.data;
								// var opportunity = quote.opportunityDetails;
								parentModel.getLead(quote.opportunityDetails.leadId).then(
								function(response){
								quote.leadDetails=response.data;
								console.log(quote);
								vm.selectQuote(quote);
								$mdDialog.hide();
							}
						)
					},
					function(error) {
						console.log("parentModel.getLead ERROR");
						console.log(error.data);
					}
				);
			}
			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
			$scope.vm = $scope;
		};

		vm.openSignatureDialog = function(ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'signatureDialogBox.html',
				parent: angular.element(document.body),
				clickOutsideToClose: false
			});
		};

		function DialogController($scope, $mdDialog) {

			$scope.cancel = function() {
				$mdDialog.hide();
			}

			$scope.done = function() {
				var signature = $scope.accept();

				if (signature.isEmpty) {
					alert("Please Sign");
				} else {
					vm.agreement.self.signature = signature.dataUrl;
					$mdDialog.hide();
				}
			};

		};

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
					self: {}
				};
				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				vm.agreement.self.agreementMode = "Create";

        vm.selectQuote = function(quote) {
          vm.agreement.self.quoteId = quote.quoteId;
          vm.agreement.quoteDetails = quote;
          vm.agreement.opportunityDetails = quote.opportunityDetails;
					vm.agreement.leadDetails=quote.leadDetails;
        }

        vm.selectQuoteDialog = function(ev) {
          $mdDialog.show({
            controller: quoteSelectionDialogController,
            templateUrl: 'quoteSelectDialogBox.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
          })
          vm.fields = JSON.parse(agreementSharedData.getLayout('quote_viewAll'));
        };
			}

			vm.createAgreement = function(agreement) {
				console.log("Inside createAgreement().");
				console.log(agreement);
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
			}
		}

		if ($state.current.name === 'home.agreement.edit') {
			console.log("EDIT Agreement");

			vm.agreement = {};
			vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));

			if ($stateParams.agreement != null) {
				vm.agreement = $stateParams.agreement;
				vm.agreement.self.agreementMode = "Update";
			}

			vm.updateAgreement = function(agreement) {
				console.log("Inside updateAgreement()");
				console.log(agreement);
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
			}

			vm.deleteAgreement = function(agreement) {
				console.log("Inside deleteAgreement()");
				console.log(agreement);
				agreementManager.deleteAgreement(agreement.agreementId);
			};
		}
	}
})();
