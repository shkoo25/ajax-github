var access_token = "dccaa9355d791d0e31b70f3542318e6daee56eb3"

$(document).on("ready", function(){

	var templateLeft = Handlebars.compile( $("#leftSide").html() );
	

		
			$.ajax({
			  url: "https://api.github.com/users/shkoo25",
			  method: "GET",
			  data: {
			    access_token: access_token
			  },
			  success: function(data) {
			  	data.created_at = moment(data.created_at).format("MMM Do YY");
		
			  	var htmlString = templateLeft(data)
			  	$("#left-spot").append(htmlString)
			  }
		
	})
	

	var templateRight= Handlebars.compile( $("#rightSide").html() );

	$.ajax({
	  url: "https://api.github.com/users/shkoo25/repos",
	  method: "GET",
	  data: {
	    access_token: access_token
	  },
	  	success: function(data) {
	  		
	  		_.each(data, function(repos) {
	  		repos.updated_at = moment(repos.updated_at).fromNow();

	  		var htmlRightString = templateRight(repos)
	  		
	  		$("#right-spot").append(htmlRightString)
	  		})
	  		

		}
	})
})	
