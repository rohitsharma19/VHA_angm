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
		.factory('quoteModel', Quote);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Quote.$inject = ['$http'];

		function Quote ($http) {

			var quoteModel = function(quoteData){
				if(quoteData){
					angular.extend(this,quoteData);
				}
			};
			
			quoteModel.prototype = {
				save: function(){
					return $http.post("http://203.200.67.15/VHAMW/webapi/Quote",this);
				},
				get: function(quoteId){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Quote/"+quoteId);
				},
				remove: function(quoteId){
					return $http.delete("http://203.200.67.15/VHAMW/webapi/Quote/"+quoteId);
				},
				update: function(){
					return $http.put("http://203.200.67.15/VHAMW/webapi/Quote/",this);
				},
				getAll: function(){
					return $http.get("http://203.200.67.15/VHAMW/webapi/Quote");
				}
			};
			return quoteModel;
		}
})();
