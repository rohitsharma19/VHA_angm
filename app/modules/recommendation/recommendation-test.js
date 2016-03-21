(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:recommendationTest
	 * @description
	 * # recommendationTest
	 * Test of the app
	 */

	describe('recommendation test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('vha');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RecommendationCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
