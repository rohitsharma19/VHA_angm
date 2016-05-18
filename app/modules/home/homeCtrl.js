(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the app
	 */

	angular
		.module('vha')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, vha!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

		vm.line = {
			labels: ['Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15', 'Jan 16'],
			series: ['Need Analysis', 'Prospecting', 'Perception Analysis'],
			data: [
				[200, 220, 280, 180, 150, 300],
				[175, 200, 250, 177, 141, 265],
				[130, 100, 80, 99, 60, 30]
			],
			onClick: function(points, evt) {
				console.log(points, evt);
			}
		};

		vm.bar = {
			labels: ['14/12/2015', '21/12/2015', '28/12/2015', '4/1/2016', '11/1/2016'],
			/*labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],*/
			series: ['Call', 'Presentations', 'Meeting'],

			data: [
				[51, 4, 6, 11, 27],
				[15, 24, 62, 31, 17],
				[30, 48, 46, 59, 36]
			],

			colours: ['#e35b5a', '#FFA500', '#66B366']
		};

		vm.donut = {
			labels: ["High", "Medium", "Low"],
			data: [35, 10, 55],
			colours: ['#e35b5a', '#FFA500', '#66B366']
		};

	}

})();
