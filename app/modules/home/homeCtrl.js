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

	Home.$inject = ['homeService', 'parentModel', 'progressBarFactory', 'toastFactory'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Home(homeService, parentModel, progressBarFactory, toastFactory) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, vha!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		console.log("In HOME");

		//hiding progress bar intially
		progressBarFactory.hideProgressBar();

		var StageStatusTiles = [{
			"type": "stageStatusTiles",
			templateOptions: {
				"setOfFields": [{
					"class": "dashboard-stat blue-chambray",
					"iClass": "fa fa-tasks",
					"title": "Lead",
					"link": "#!/lead/viewAll",
					"mode":"leadCount"
				}, {
					"class": "dashboard-stat yellow-casablanca",
					"iClass": "fa fa-check-square-o",
					"title": "Opportunities",
					"link": "#!/opportunity/viewAll",
					"mode": "opportunityCount"
				}, {
					"class": "dashboard-stat blue-hoki",
					"iClass": "fa fa-tasks",
					"title": "Quotes",
					"link": "#!/quote/viewAll",
					"mode":"quoteCount"
				}, {
					"class": "dashboard-stat red-pink",
					"iClass": "fa fa-check-square-o",
					"title": "Agreement",
					"link": "#!/agreement/viewAll",
					"mode":"agreementCount"
				}]
			}
		}]

		vm.getLeadCount = function(){
			parentModel.getLeadCount().then(
				function(response){
					console.log(response.data.length);
					vm.model.leadCount = response.data.length;
				}
			);
		};
		vm.getOpportunityCount = function(){
			parentModel.getOpportunityCount().then(
				function(response){
					console.log(response.data.length);
					vm.model.opportunityCount = response.data.length;
				}
			);
		},
		vm.getQuoteCount = function(){
			parentModel.getQuoteCount().then(
				function(response){
					console.log(response.data.length);
					vm.model.quoteCount = response.data.length;
				}
			);
		},
		vm.getAgreementCount = function(){
			parentModel.getAgreementCount().then(
				function(response){
					console.log(response.data.length);
					vm.model.agreementCount = response.data.length;
				}
			);
		},

	vm.getLeadCount();
	vm.getOpportunityCount();
	vm.getQuoteCount();
	vm.getAgreementCount();



		vm.getLayout = function(view) {
			if (view === 'StageStatusTiles') {
				return JSON.stringify(StageStatusTiles);
			}
		}
			console.log("vm.model");
			console.log(vm.model);
			vm.fields = JSON.parse(vm.getLayout('StageStatusTiles'));




		vm.line = {
			labels: ['Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15', 'Jan 16'],
			series: ['Need Analysis', 'Prospecting', 'Perception Analysis'],
			data: [
				[200, 220, 280, 180, 150, 300],
				[175, 200, 250, 177, 141, 265],
				[130, 100, 80, 99, 60, 30]
			],
			colors: ["#ffe6e6", "#e6e6ff", "#f2f2f2", "#f2f5f2", "#f7f2f2", "#f2f2f5"],
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

		vm.line1 = {
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

		vm.bar1 = {
			labels: ['14/12/2015', '21/12/2015', '28/12/2015', '4/1/2016', '11/1/2016'],
			/*labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],*/
			series: ['Call', 'Presentations', 'Meeting'],

			data: [
				[51, 4, 6, 11, 27],
				[15, 24, 62, 31, 17],
				[30, 48, 46, 59, 36]
			],

			colors: ["#ffe6e6", "#e6e6ff", "#f2f2f2"]
		};

		vm.radar = {
			labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

			data: [
				[65, 59, 90, 81, 56, 55, 40],
				[28, 48, 40, 19, 96, 27, 100]
			],

			colors: ["#ffe6e6", "#e6e6ff", "#f2f2f2", "#f2f5f2", "#f7f2f2", "#f2f2f5"]
		};


		vm.map = {
			center: {
				latitude: 40,
				longitude: -99
			},
			zoom: 8,
			marker: {
				id: 0,
				coords: {
					latitude: 40.1451,
					longitude: -99.6680
				},
				options: {
					draggable: true
				}
			}
		};


}
	})();
