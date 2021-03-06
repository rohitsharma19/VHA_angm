angular
	.module('shared')
	.controller('buttonCtrl', function($scope) {
		$scope.clicked = function(functionName, functionParam) {
			var targetScope = $scope;
			while (!targetScope.vm) {
				targetScope = targetScope.$parent;
			}
			targetScope.vm[functionName](functionParam);
		};
	});
