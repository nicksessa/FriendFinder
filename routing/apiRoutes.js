
var friendData = require("../app/data/friends.js")

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.

    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // This function receives an array, which is the results of the survey.

        console.log("Name passed: " + req.userName)
        console.log("link to photo: " + req.userPhoto)




var compatibility = [];


for (var i = 0; i < friendList.length; i++ ) {
  var obj = friendList[i];
  var name = obj.name
  //console.log("Name: " + name)

  var overallScore = 0

  var answers = obj.scores
  for (var x = 0; x < answers.length; x++) {
    var friendAnswer = answers[x]
    //console.log("answer [" + x + "] --> " + answers[x])

    var userAnswer = req.scores[x]
    //console.log("  User Answer [" + x + "] --> " + req.scores[x])
    
    theDiff = Math.abs(friendAnswer - userAnswer)
    //console.log("The Difference: " + theDiff )


    console.log(name + " ans[" + x + "] " + friendAnswer + " u_ans: " + userAnswer + " diff: " + theDiff )

    overallScore += theDiff
  }
  console.log("overall Score: " + overallScore)
  console.log("---------------------------------")

  compatibility.push([name, overallScore]);

}

// sort the array

compatibility.sort(function(a, b) {
  return a[1] - b[1]
})

for (var i = 0; i < compatibility.length; i++) {
  for (var j = 0; j < compatibility[i].length; j++) {
    console.log('[' + i + ',' + j + '] = ' + compatibility[i][j])
  }
}

var bestMatchName = compatibility[0][0]
console.log("Best Match: " + bestMatchName)

var bestMatch = friendList.filter(function(x) { 
  return x.name == bestMatchName;
});

console.log("Photo URL: " + bestMatch[0].photo)








        //friendList.push(req.body);   There is no need to push anything to the friendList array.
        //  need this?  res.json(false);  // we could return true if a match is found or false if not

    });
}
