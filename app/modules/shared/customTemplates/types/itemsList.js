angular
	.module('shared')
	.controller('itemsListCtrl', function($scope) {
		$scope.clicked = function(functionName, functionParam) {
			console.log('functionName :' + functionName);
			var targetScope = $scope;
			while (!targetScope.vm) {
				targetScope = targetScope.$parent;
			}
			targetScope.vm[functionName](functionParam);
		};
	})
