// DEPENDENCIES
const express = require('express');
const app = express();

// PORT
const port = 3000;

// run `npm install` to install dependencies in package.json -- done

// * Your mission is to complete the app
// * The app will need routes for index and show --ok
// * The app will need views for index and show --ok
//
// * MAIN GOALS:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page -- done
// * User should be able to click a link on the show page that takes them back to the index page -- done
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed - done
// views folder has not been created -- done

// DATA - put into marsMissions.js file inside of a models folder, don't forget to module.exports it -- done
// remember to require it in the server -- done

let marsMissions = require('./models/marsMissions.js')

app.get('/missions', (req, res) => {
  res.render("index.ejs", {
    missions: marsMissions
  })
})
// missions showing up at /missions


// INDEX Route
// send data to 'index.ejs' view -- done
// the view should display just the names of each mission - done (linked)
// display the mission names as <li> in a <ul> with the class name "missions" -- done

app.get("/missions/:index", (req, res) => {
  res.render('show.ejs', {
    theMission: marsMissions[req.params.index]
  })
})


// SHOW Route
// send data to 'show.ejs' view -- done
// the view should display all the data for a single mission


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
