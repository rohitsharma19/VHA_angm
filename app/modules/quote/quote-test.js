(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:quoteTest
	 * @description
	 * # quoteTest
	 * Test of the app
	 */

	describe('quote test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('vha');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('QuoteCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
