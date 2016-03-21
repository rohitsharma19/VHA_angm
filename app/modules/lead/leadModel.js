Lead_Module.factory('leadModel',['$http',function ($http) 
{
	var leadModel = function(leadData){
		if(leadData){
			//this.setData(leadData);
			angular.extend(this,leadData);
		}
	};
	
	leadModel.prototype = {
		save: function(){
			
		   		$http.post("http://203.200.67.15/VHAMW/webapi/Lead",this)
		   		.success(function(response, status, headers, config) 
		   			{
		   			  console.log("Inside success of http POST");
		   		})
		   		.error(function(error)
					{
					  alert("HTTP POST failed with status : "+error.status);
				});

		},
		get: function(){
			/*var scope = this;
			$http.get(){
				scope.setData(leadData);
			}*/
		},
		remove: function(leadId){
			//$http.delete('/Lead/' + leadId);
			return $http.delete("http://203.200.67.15/VHAMW/webapi/Lead/"+leadId);
		},
		update: function(){
			//$http.put('/Lead/' + leadId, this);
			return $http.put("http://203.200.67.15/VHAMW/webapi/Lead/",this);
		}
	};
	
	return leadModel;
	
}]);