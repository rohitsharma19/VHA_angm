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

			vm.resetSign=function(){
				var canvas = angular.element(document.getElementById('canvas'))[0];
				var context = canvas.getContext('2d');

				context.clearRect(0, 0, canvas.width, canvas.height);
			}





			if ($state.current.name === 'home.agreement.viewAll') {

				console.log("VIEW ALL Agreement");
				vm.agreementList=[];

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

					vm.agreement = {};

					vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
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
						var canvas = angular.element(document.getElementById('canvas'))[0];
						agreement.signature=canvas.toDataURL();
						console.log(agreement.signature);

					agreementManager.createAgreement(agreement);
				};
			}
			if ($state.current.name === 'home.agreement.view') {


				console.log("VIEW AGREEMENT");
				vm.viewSign=function(value){
						angular.element(document).ready(function() {
					var canvas = angular.element(document.getElementById('canvas'))[0];
					var context = canvas.getContext('2d');
					var img=new Image();
					img.src=value;
					context.drawImage(img,0,0);
					var canvas = angular.element(document.getElementById('canvas'));
					canvas.unbind();
						});
				}


				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				console.log("get agreement ");
				console.log(agreementSharedData.getAgreement());
				vm.agreement = agreementSharedData.getAgreement();
				console.log("image "+vm.agreement.signature);
				vm.viewSign(vm.agreement.signature);

				vm.agreement.agreementMode = "View";


				agreementSharedData.resetAgreement();
			}
			if ($state.current.name === 'home.agreement.edit') {
				console.log("EDIT Agreement");
				vm.viewSign=function(value){
						angular.element(document).ready(function() {
					var canvas = angular.element(document.getElementById('canvas'))[0];
					var context = canvas.getContext('2d');
					var img=new Image();
					img.src=value;
					context.drawImage(img,0,0);


						});
				}
				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				vm.agreement = agreementSharedData.getAgreement();
					vm.viewSign(vm.agreement.signature);
				vm.agreement.agreementMode = "Update";
				agreementSharedData.resetAgreement();

				vm.updateAgreement = function(agreement) {
					console.log("Inside updateAgreement()");
					console.log(agreement);
							var canvas = angular.element(document.getElementById('canvas'))[0];
						agreement.signature=canvas.toDataURL();
					agreementManager.updateAgreement(agreement);
				};
			}
			if ($state.current.name === 'home.agreement.delete') {
				vm.viewSign=function(value){
						angular.element(document).ready(function() {
					var canvas = angular.element(document.getElementById('canvas'))[0];
					var context = canvas.getContext('2d');
					var img=new Image();
					img.src=value;
					context.drawImage(img,0,0);
					var canvas = angular.element(document.getElementById('canvas'));
					canvas.unbind();
						});
				}
				console.log("DELETE Agreement");
				vm.agreementFields = JSON.parse(agreementSharedData.getLayout('agreement_CRUD'));
				vm.agreement = agreementSharedData.getAgreement();
					vm.viewSign(vm.agreement.signature);
				vm.agreement.agreementMode = "Delete";
				agreementSharedData.resetAgreement();

				vm.deleteAgreement = function(agreement) {
					console.log("Inside deleteAgreement()");
					console.log(agreement);
					agreementManager.deleteAgreement(agreement.agreementId);
				};
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
