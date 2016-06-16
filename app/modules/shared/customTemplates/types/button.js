angular
	.module('shared')
	.controller('buttonController', function($scope) {
		$scope.clicked = function(functionName, functionParam) {
			var targetScope = $scope;
			while (!targetScope.vm) {
				targetScope = targetScope.$parent;
			}
			targetScope.vm[functionName](functionParam);
		};
	});
