(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:leadService
	 * @description
	 * # leadService
	 * Service of the app
	 */

  	angular
		.module('lead')
		.factory('leadManager', Lead);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Lead.$inject = ['$http','leadModel'];

		function Lead ($http,leadModel) {


			var leadManager = {

		    		getLead: function(leadId) {
		    			
		    		},
		    		
				    getAllLeads: function() {
				    		return $http.get("http://203.200.67.15/VHAMW/webapi/Lead");
				    },
				    
					saveLead: function(leadData) {
						
						if( leadData==null  ){
							//modalFactory.OpenAlertModel(["All the fields are mandatory, kindly fill in the details."]);
							console.log(" leadData is null. ");	
						}
						else{
							//modalFactory.OpenLeadSummaryConfirmationModal([leadData.compName,leadData.abn,
							//                                               leadData.firstName,leadData.lastName,leadData.eMail,leadData.contactNum],
							//                                                     "leadSummaryConfirmationBox","leadSummaryModalInstanceCtrl").then(function(result){
							//	if(result)
							//	{
									leadData.leadId = "L" + Date.now();
									
									/* Creating formatted date */
								    var today = new Date();
								    var dd = today.getDate();
								    var mm = today.getMonth()+1; //January is 0!

								    var yyyy = today.getFullYear();
								    if(dd<10){
								        dd='0'+dd
								    } 
								    if(mm<10){
								        mm='0'+mm
								    } 
								    var today = yyyy+"-"+mm+"-"+dd;
								    
								    /* Date formation ends here */
									
									leadData.creationDate = today;
									
									var lead = new leadModel(leadData);
									lead.save();
									
							//	} 
							//});	
						}
		    		},
		    		
		    		updateLead: function(leadData) {
		    			return new leadModel(leadData).update();
		    		},
		    		
		    		deleteLead: function(leadId) {
		    			return new leadModel().remove(leadId);
		    		}
		    };
		    return leadManager;

		}

})();
