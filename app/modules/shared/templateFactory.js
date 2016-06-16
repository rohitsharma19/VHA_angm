angular
	.module('vha')
	.run(runBlock);

function runBlock($rootScope, $http, formlyConfig) {
	'use strict';

	$http.get('app/modules/shared/customTemplates/customTemplates.json')
		.then(
			function(response) {
				console.log("response.data");
				console.log(response.data);
				var customTemplates = response.data;

				angular.forEach(customTemplates, function(customTemplate) {

					if (customTemplate.category == "type") {
						var template = {};
						template.name = customTemplate.name;
						template.templateUrl = 'app/modules/shared/customTemplates/types/' + customTemplate.name + '.html';

						if (customTemplate.hasController) {
							template.controller = customTemplate.name + 'Controller';
						}
						formlyConfig.setType(template);
					}
					else if (customTemplate.category == "wrapper") {
						var template = {};
						template.name = customTemplate.name;
						template.templateUrl = 'app/modules/shared/customTemplates/wrappers/' + customTemplate.name + '.html';
						formlyConfig.setWrapper(template);
					}
				})
			},
			function(error) {

			});
	//
	// angular.forEach(template in customTemplates) {
	//
	// 		// var imported = document.createElement('script');
	// 		// imported.src = 'app/modules/shared/customTemplates/types/' + customTemplates[i] + '.js';
	// 		// document.body.appendChild(imported);
	// 		// console.log(window.buttonController);
	//
	// 		var typeObject = {};
	// 		typeObject.name = template;
	// 		typeObject.templateUrl = 'app/modules/shared/customTemplates/types/' + template + '.html';
	//
	// 		// var xhr = new XMLHttpRequest();
	// 		// xhr.open('HEAD', 'app/modules/shared/customTemplates/types/' + customTemplates[i] + '.js', false);
	// 		// xhr.send();
	// 		//
	// 		// if(xhr.status != "404")
	// 		// 		typeObject.controller = customTemplates[i] + 'Controller';
	//
	// 		formlyConfig.setType(typeObject);
	//
	// 	}
	//
	// console.log(window);

	// formlyConfig.setType({
	//   name: 'itemDetail',
	//   templateUrl: 'itemDetail.html',
	//   controller: function($scope, $mdBottomSheet) {
	//
	//     var targetScope = $scope;
	//     while (!targetScope.vm) {
	//       targetScope = targetScope.$parent;
	//     }
	//
	//     $scope.clicked = function(functionName, functionParam) {
	//       console.log('functionName :' + functionName);
	//       targetScope.vm[functionName](functionParam);
	//     };
	//
	//     $scope.showBottomSheet = function(functionName, type, functionParam) {
	//       $scope.alert = '';
	//
	//       var parentElement = document.querySelector('#' + type);
	//       console.log("parentElement");
	//       console.log(parentElement);
	//
	//       $mdBottomSheet.show({
	//         // template: '<md-bottom-sheet class="md-list md-has-header" ng-cloak><input type=number ><md-button>Add</md-button></md-bottom-sheet>',
	//         template: '<md-bottom-sheet ng-cloak>\
	//                     <md-input-container style="margin-left:15%; margin-right:15%;" md-theme="">\
	//                     <label> Quanity </label>\
	//                       <input ng-model="item.quantity" type=number min=0 class="ng-pristine ng-valid md-input ng-touched" aria-disabled="false" aria-invalid="false" style="">\
	//                     </md-input-container>\
	//                     <md-button ng-click="addQuantity()" ng-disabled="!item.quantity" class="md-fab md-raised md-primary"> <md-icon aria-label="Add" class="md-secondary md-hue-3">done</md-icon> </md-button>\
	//                   </md-bottom-sheet>',
	//         parent: parentElement,
	//         controller: function($scope, $mdBottomSheet) {
	//           $scope.item = functionParam;
	//           $scope.addQuantity = function() {
	//             targetScope.vm[functionName](functionParam);
	//             $mdBottomSheet.hide();
	//           }
	//         }
	//       }).then(function() {});
	//     };
	//   }
	// });

}
