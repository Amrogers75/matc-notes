/**
 * Created by anthonyrogers on 10/11/16.
 */
var http = require("http");

var server = http.createServer(function (req, res) {
    res.end("it works!! hello" + req.url);
});
server.listen(8000, function () {
    console.log("listening on port 8000")

});