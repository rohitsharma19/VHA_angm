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
		.factory('quoteSharedData', Quote);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Quote.$inject = ['$http'];

		function Quote ($http) {

			//var quoteMode = null;
			var quoteSharedData = null;

			return{
				/*setQuoteMode : function(mode){
					quoteMode = mode;
				},
				getQuoteMode : function(){
					return quoteMode;
				},
				resetQuoteMode : function(){
					quoteMode = null;
				},*/
				setQuote : function(quoteData){
					quoteSharedData = quoteData;
				},
				getQuote : function(){
					return quoteSharedData;
				},
				resetQuote : function(){
					quoteSharedData = null;
				} 
			}
		}
})();
