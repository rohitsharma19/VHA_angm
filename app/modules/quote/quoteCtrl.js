(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:quoteCtrl
	* @description
	* # quoteCtrl
	* Controller of the app
	*/

  	angular
		.module('quote')
		.controller('QuoteCtrl', Quote);

		Quote.$inject = ['$state','quoteManager','quoteSharedData'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Quote($state,quoteManager,quoteSharedData) {
			/*jshint validthis: true */
			var vm = this;

			if($state.current.name === 'home.quote.viewAll'){
				
				console.log("VIEW ALL QUOTES");
				
				vm = quoteManager.setUpUiGrid(vm);

				vm.openViewQuote = function(row) {
			    	console.log("Inside openViewQuote");
			    	quoteManager.openViewQuote(row.entity.quoteId);
			    };
			    
			    vm.openEditQuote = function(row) {
			    	console.log("inside openEditQuote");
			    	quoteManager.openEditQuote(row.entity.quoteId);
			    };

			    vm.openDeleteQuote = function(row) {
			    	console.log("inside openDeleteQuote");
			    	quoteManager.openDeleteQuote(row.entity.quoteId);
			    };

			    vm.openCreateQuote = function() {
			    	console.log("inside openCreateQuote");
			    	quoteManager.openCreateQuote();
			    };
			}

			if($state.current.name === 'home.quote.create'){
				console.log("CREATE QUOTE");
				vm.quoteMode = "Create";

				vm.createQuote = function(quote){
					console.log("Inside createQuote().");
					console.log(quote);
					quoteManager.createQuote(quote);
				};
			}

			if($state.current.name === 'home.quote.edit'){
				console.log("EDIT QUOTE");
				vm.quoteMode = "Update";

				vm.quote = quoteSharedData.getQuote();
				quoteSharedData.resetQuote();

				vm.updateQuote = function(quote){
					console.log("Inside updateQuote()");
					console.log(quote);
					quoteManager.updateQuote(quote);
				};
			}

			if($state.current.name === 'home.quote.view'){
				console.log("VIEW QUOTE");
				vm.quoteMode = "View";

				vm.quote = quoteSharedData.getQuote();
				quoteSharedData.resetQuote();
			}
			
			if($state.current.name === 'home.quote.delete'){
				console.log("DELETE QUOTE");
				vm.quoteMode = "Delete";

				vm.quote = quoteSharedData.getQuote();
				quoteSharedData.resetQuote();

				vm.deleteQuote = function(quote) {
					console.log("Inside deleteQuote()");
					console.log(quote);
		    		quoteManager.deleteQuote(quote.quoteId);
		        };
			}
		}
})();
