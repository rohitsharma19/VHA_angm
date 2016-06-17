angular
	.module('shared')
	.controller('uiGridCtrl', function ($scope) {
	$scope.clicked = function(functionName, functionParam) {
		console.log('functionName :' + functionName);
		console.log($scope);
		var targetScope = $scope;
		while (!targetScope.vm) {
			targetScope = targetScope.$parent;
		}
		targetScope.vm[functionName](functionParam);
	};
})
