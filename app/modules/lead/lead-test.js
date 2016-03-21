(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:leadTest
	 * @description
	 * # leadTest
	 * Test of the app
	 */

	describe('lead test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('vha');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('LeadCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
