# Friend Finder - A Node Application Using an Express Server

### Overview

"FriendFinder" is a full-stack application that will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express handles the routing and it is also deployed on Heroku here: https://fierce-savannah-90675.herokuapp.com/


### Instructions

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.

5. The application's data is saved inside `app/data/friends.js` as an array of objects. Each of these objects follows the format below.

```json
{
  "name":"Grace Kelly",
  "photo":"http://d3v3hv0xzfxuou.cloudfront.net/wp-content/uploads/2018/07/19130031/grace-kelly-princesa-com-joias-1-953x715.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. The user's most compatible friend is determined using the following formula:

   * Each user's results are converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`) which is stored into an object which is itself stored in an array.
   * Once the data is stored, it is compared to the difference between current user's scores against those from other users, question by question. The differences are added up and stored in a `totalDifference` variable.
     * For Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**

   * The closest match is the user with the least amount of difference.

7. Once the current user's most compatible friend is found, the result is displayed as a modal pop-up.
   * The modal displays both the name and picture of the closest match. (it is up to users to supply a valid http URL)

