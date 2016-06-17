angular
	.module('shared')
	.controller('itemDetailCtrl', function ($scope, $mdBottomSheet) {

  var targetScope = $scope;
  while (!targetScope.vm) {
    targetScope = targetScope.$parent;
  }

  $scope.clicked = function(functionName, functionParam) {
    console.log('functionName :' + functionName);
    targetScope.vm[functionName](functionParam);
  };

  $scope.showBottomSheet = function(functionName, type, functionParam) {
    $scope.alert = '';

    var parentElement = document.querySelector('#' + type);
    console.log("parentElement");
    console.log(parentElement);

    $mdBottomSheet.show({
      // template: '<md-bottom-sheet class="md-list md-has-header" ng-cloak><input type=number ><md-button>Add</md-button></md-bottom-sheet>',
      template: '<md-bottom-sheet ng-cloak>\
                  <md-input-container style="margin-left:15%; margin-right:15%;" md-theme="">\
                  <label> Quanity </label>\
                    <input ng-model="item.quantity" type=number min=0 class="ng-pristine ng-valid md-input ng-touched" aria-disabled="false" aria-invalid="false" style="">\
                  </md-input-container>\
                  <md-button ng-click="addQuantity()" ng-disabled="!item.quantity" class="md-fab md-raised md-primary"> <md-icon aria-label="Add" class="md-secondary md-hue-3">done</md-icon> </md-button>\
                </md-bottom-sheet>',
      parent: parentElement,
      controller: function($scope, $mdBottomSheet) {
        $scope.item = functionParam;
        $scope.addQuantity = function() {
          targetScope.vm[functionName](functionParam);
          $mdBottomSheet.hide();
        }
      }
    }).then(function() {});
  };
})
