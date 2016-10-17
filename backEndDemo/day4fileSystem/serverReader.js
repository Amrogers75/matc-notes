
var http = require("http");

var server = http.createServer(function (req, res) {
    // res.end("it works!! hello" + req.url);
    var fs = require('fs');
    var filePath = './mustbebigger.txt';

    fs.readFile(filePath, 'utf8',function (err, data) {

        if(err){
            console.log('something is wrong\n' + err.toString());
        }

        else {
            console.log('Reading file\n' + data.toString());
            res.end(data.toString());
        }
    });
});
server.listen(8000, function () {
    console.log("listening on port 8000")

});

