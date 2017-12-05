// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    //get user survey.html file when they click on "go to survey" button
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //use is used when there is no specific path given by user (basically runs on all requests)
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}