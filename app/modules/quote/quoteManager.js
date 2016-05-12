(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:quoteService
	 * @description
	 * # quoteService
	 * Service of the app
	 */

  	angular
		.module('quote')
		.factory('quoteManager', Quote);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Quote.$inject = ['$state','quoteModel','quoteSharedData'];

		function Quote ($state,quoteModel,quoteSharedData) {


			var quoteManager = {

		    		getQuote: function(quoteId) {
		    			//return new quoteModel().get(quoteId);
		    			var quote = new quoteModel();
		    			return quote.get(quoteId);
		    		},

				    getAllQuotes: function() {
				    		//return $http.get("http://203.200.67.15/VHAMW/webapi/Quote");
				    		var quote = new quoteModel();
				    		return quote.getAll();
				    },

					createQuote: function(quoteData) {

						if( quoteData === null  ){
							console.log("quoteData is null.");
							alert('Please fill in the required details.');
						}
						else{

									var quote = new quoteModel(quoteData);
									quote.save().then(
							        	function (response) {
					        				alert('Quote '+ quote.quoteId + ' created successfully.' );

					        				if($state.current.name === 'home.quote.QuickCreate'){
												$state.go('home.agreement.QuickCreate');
											}
											else if($state.current.name === 'home.quote.create'){
												$state.go('home.quote.viewAll');
											}
					        			},
									    function (error) {
									    	alert('Error While creating Quote: '+ error.message );
									    }
							        );
						}
					},

		    		updateQuote: function(quoteData) {
		    			var quote = new quoteModel(quoteData);
		    			quote.update().then(
				        	function (response) {
		        				alert('Quote '+ quoteData.quoteId + ' updated successfully.' );
		        				$state.go('home.quote.viewAll');
		        			},
						    function (error) {
						    	alert('Error While deleting Quote: '+ error.message );
						    }
				        );
		    		},

		    		deleteQuote: function(quoteId) {
		    			if(confirm('Are you sure you want to delete this quote?')){
		    				var quote = new quoteModel();
		    				quote.remove(quoteId).then(
					        	function (response) {
			        				alert('Quote '+ quoteId + ' deleted successfully.' );
			        				$state.go('home.quote.viewAll');
			        			},
							    function (error) {
							    	alert('Error While deleting Quote: '+ error.message );
							    }
					        );
		    			}
		    			else{
				        	console.log("Quote deletion cancelled by User");
				        }
		    		},

		    		setUpUiGrid: function(vm) {

						vm.gridOptions = {};
						vm.gridOptions.enableHorizontalScrollbar = 2;
						vm.gridOptions.enableVerticalScrollbar = 2;
						vm.gridOptions.enableFiltering=true;

						vm.gridOptions.columnDefs = [
								{ field: 'quoteId',
									cellTemplate:'<md-button class="md-primary" aria-label="quoteId" ng-click="grid.appScope.vm.openViewQuote(row)" style="margin: 0px 0px; font-size: 12px;">{{row.entity.quoteId}}</md-button>'
								},
								{ field: 'modificationDate' },
								{ field: 'creationDate' },
								{ field: 'name' },
								/*{ field: 'quoteVersion' },*/
								{ field: 'stage' },
								{ field: 'currency' },
								/*{ field: 'territoryCode' },
								{ field: 'value' },
								{ field: 'discountedPrice' },
								{ field: 'quoteCreatedBy' },
								{ field: 'assignedGroup' },
								{ field: 'assignedUser' },
								{ field: 'quoteLineId' },
								{ field: 'quoteLineVrsn' },
								{ field: 'listPrice' },
								{ field: 'originalPrice' },
								{ field: 'revisedPrice' },*/
								{ field: 'approvedPrice' },
								{ field: 'discount' },
								{ field: 'discountPrcnt' },
								/*{ field: 'approver' },
								{ field: 'approvedStatus' },
								{ field: 'nextlevel' },
								{ field: 'quantity' },*/
								{ name:  'Actions',
									cellTemplate: '<md-button class="md-icon-button" ng-click="grid.appScope.vm.openEditQuote(row)" style="min-width: 0px;"><md-icon style="color:green; vertical-align: baseline;">edit</md-icon></md-button><md-button class="md-icon-button md-primary" ng-click="grid.appScope.vm.openDeleteQuote(row)" style="min-width: 0px;"><md-icon style="vertical-align: baseline;">delete</md-icon></md-button>',
									enableFiltering:false
								}
		                ];

		                quoteManager.getAllQuotes().then(
							function (response) {
								console.log("getAllQuotes SUCCESS");
								console.log("data received");
								console.log(response.data);

								vm.gridOptions.data = response.data;
							},
						    function (error) {
						        console.log("getAllQuotes ERROR : " + error.message);
						});

						return vm;
					},

					openViewQuote: function(quoteId) {
						new quoteModel().get(quoteId).then(
				    		function (response) {
				    			console.log("getQuote SUCCESS");
				    			console.log(response.data);

				    			quoteSharedData.setQuote(response.data);

				    			$state.go('home.quote.view');
		        			},
						    function (error) {
						    	console.log("getQuote ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openEditQuote: function(quoteId) {
						new quoteModel().get(quoteId).then(
				    		function (response) {
				    			console.log("getQuote SUCCESS");
				    			console.log(response.data);

				    			quoteSharedData.setQuote(response.data);

				    			$state.go('home.quote.edit');
		        			},
						    function (error) {
						    	console.log("getQuote ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openDeleteQuote: function(quoteId) {
						new quoteModel().get(quoteId).then(
				    		function (response) {
				    			console.log("getQuote SUCCESS");
				    			console.log(response.data);

				    			quoteSharedData.setQuote(response.data);

				    			$state.go('home.quote.delete');
		        			},
						    function (error) {
						    	console.log("getQuote ERROR");
						    	console.log(error);
						    }
				    	);
					},

					openCreateQuote: function() {
						$state.go('home.quote.create');
					}
		    };
		    return quoteManager;
		}
})();
