//* example of a url call getting network count which is the fork count.

	var templateString = $("#repoTemplate").html()
	var templateFunction = Handlebars.compile ( tamplateString )

	var successFunction = function(repoArray){
			var chanceRepo=repoArray[15] //*This is for 1 individual repo star count 
			_.each(repoArray, function(repo){

			}
	}



$.ajax({
	  url: "https://api.github.com/users/shkoo25/repos",
	  method: "GET",
	  data: {
	    access_token: "dccaa9355d791d0e31b70f3542318e6daee56eb3"
	  },
	  success: function(sourceUrlData){
	  	console.log(data.network_count) //*this lets us know the amount of forks which is with the network count.
	  	name :chanceRepo.name
	  	stars: chanceRepo.starsgazers_count
	  	forks: sourceUrlData.network_count
	  })
	  