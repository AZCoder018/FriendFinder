// Load data; friends array

var friends 		= require('../data/friends.js');

// Routing; API Get and Post Requests

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

//API Post to array

	app.post('/api/friends', function(req, res){

// Object to hold the best match 

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

// Parse results of user's survey Post
		var userData 	= req.body;
		var userName 	= userData.name;
		var userPhoto 	= userData.photo;
		var userScores 	= userData.scores;

// Variable will calculate the difference between the user's scores and the scores of
		// each user in the database
		var totalDifference = 0;

//Loop through all the friend possibilities in the database

		for  (var i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			totalDifference = 0;

//Loop through all the scores of each friend

		for (var j=0; j< friends[i].scores[j]; j++){

//Calculate the difference between the scores and sum them into the totalDifference
				
		totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

// If the sum of differences is less then the differences of the current best match

		if (totalDifference <= bestMatch.friendDifference){

// Reset the bestMatch to be the new friend

			bestMatch.name = friends[i].name;
			bestMatch.photo = friends[i].photo;
			bestMatch.friendDifference = totalDifference;
			}
		}
	}

// Save the user's data to the database 
	
friends.push(userData);

// Return a JSON with the user's bestMatch
		
res.json(bestMatch);

	});

}