(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:agreementTest
	 * @description
	 * # agreementTest
	 * Test of the app
	 */

	describe('agreement test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('vha');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AgreementCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
