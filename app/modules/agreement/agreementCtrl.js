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

		Agreement.$inject = ['$state','agreementManager','agreementSharedData'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Agreement($state,agreementManager,agreementSharedData) {
			/*jshint validthis: true */
			var vm = this;
			vm.agreement={};






			if ($state.current.name === 'home.agreement.viewAll') {

				console.log("VIEW ALL Agreement");
				vm.agreementList=[];

				vm.fields = JSON.parse(agreementSharedData.getLayout('agreement_viewAll'));
				agreementManager.inflateUiGrid(vm);


				vm.openViewAgreement = function(row) {

					console.log("Inside openViewAgreement");
					agreementManager.openViewAgreement(row.entity.agreementId);
				};

				vm.openCreateAgreement = function() {
					console.log("inside openCreateAgreement");
					agreementManager.openCreateAgreement();
				};
			}
			if (($state.current.name === 'home.agreement.create') || ($state.current.name === 'home.agreement.QuickCreate')) {


							vm.initSign=function(){
							angular.element(document).ready(function() {

										$("#signature").jSignature({width:589,height:250,Color:"#fff"})
												$("#signature").jSignature("clear")

										});
								}

							vm.initSign();

				if ($state.current.name === 'home.agreement.QuickCreate') {
					console.log("CREATE QUICK AGREEMENT");

					vm.agreement = {};

					vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
						vm.agreement.signature=$('#signature').jSignature("getData", "base30");
						console.log("sign "+vm.agreement.signature);
					vm.agreement.agreementMode = "QuickCreate";
				} else if ($state.current.name === 'home.agreement.create') {
					console.log("CREATE AGREEMENT");

					vm.agreement = {};

					vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));


					vm.agreement.agreementMode = "Create";
				}


				vm.createAgreement = function(agreement) {
					console.log("Inside creaAgreement().");
					console.log(agreement);
						vm.getSign=function(){
							return $('#signature').jSignature("getData", "base30")
						}
						vm.agreement.signature=vm.getSign();
						console.log("sign "+vm.agreement.signature);
						// vm.validate=function(){
						// 	if($('#check').checked==false){
						// 		console.log("gjhf");
						// 		alert("hgj");
						// 	}
						// }
					agreementManager.createAgreement(agreement);
				};
			}
			if ($state.current.name === 'home.agreement.view') {
				console.log("VIEW AGREEMENT");
				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				console.log("get agreement ");
				console.log(agreementSharedData.getAgreement());
				vm.agreement = agreementSharedData.getAgreement();
					// vm.agreement.agreementMode = "View";

				agreementSharedData.resetAgreement();
			}
		}
	})();




// <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
//
//
//
// vm.openViewAgreement = function(row) {
// 			    	console.log("Inside openViewAgreement");
// 			    	agreementManager.openViewAgreement(row.entity.agreementId);
// 			    };
//
// 			    vm.openEditAgreement = function(row) {
// 			    	console.log("inside openEditAgreement");
// 			    	agreementManager.openEditAgreement(row.entity.agreementId);
// 			    };
//
// 			    vm.openDeleteAgreement = function(row) {
// 			    	console.log("inside openDeleteAgreement");
// 			    	agreementManager.openDeleteAgreement(row.entity.agreementId);
// 			    };
//
// 			    vm.openCreateAgreement = function() {
// 			    	console.log("inside openCreateAgreement");
// 			    	agreementManager.openCreateAgreement();
// 			    };
// 			}
//
// 			if(($state.current.name === 'home.agreement.create')||($state.current.name === 'home.agreement.QuickCreate')){
//
// 				if($state.current.name === 'home.agreement.QuickCreate'){
// 					console.log("CREATE QUICK AGREEMENT");
// 					vm.agreementMode = "QuickCreate";
// 				}
// 				else if($state.current.name === 'home.agreement.create'){
// 					console.log("CREATE AGREEMENT");
// 					vm.agreementMode = "Create";
// 				}
//
// 				vm.createAgreement = function(agreement){
// 					console.log("Inside createAgreement().");
// 					console.log(agreement);
// 					agreementManager.createAgreement(agreement);
// 				};
// 			}
//
// 			if($state.current.name === 'home.agreement.edit'){
// 				console.log("EDIT AGREEMENT");
// 				vm.agreementMode = "Update";
//
// 				vm.agreement = agreementSharedData.getAgreement();
// 				agreementSharedData.resetAgreement();
//
// 				vm.updateAgreement = function(agreement){
// 					console.log("Inside updateAgreement()");
// 					console.log(agreement);
// 					agreementManager.updateAgreement(agreement);
// 				};
// 			}
//
// 			if($state.current.name === 'home.agreement.view'){
// 				console.log("VIEW AGREEMENT");
// 				vm.agreementMode = "View";
//
// 				vm.agreement = agreementSharedData.getAgreement();
// 				agreementSharedData.resetAgreement();
// 			}
//
// 			if($state.current.name === 'home.agreement.delete'){
// 				console.log("DELETE AGREEMENT");
// 				vm.agreementMode = "Delete";
//
// 				vm.agreement = agreementSharedData.getAgreement();
// 				agreementSharedData.resetAgreement();
//
// 				vm.deleteAgreement = function(agreement) {
// 					console.log("Inside deleteAgreement()");
// 					console.log(agreement);
// 		    		agreementManager.deleteAgreement(agreement.agreementId);
// 		        };
// 			}
// 		}
// })();
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-->
