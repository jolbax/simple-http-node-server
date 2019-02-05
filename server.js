const logger = require("./logger");
const http = require("http");
const fs = require("fs");

var serverPort = 3000;
var data = "\n<h1>Hello to this great world</h1>";
var filePath = "htdocs/hello-world.txt";

//create a server object:
http
  .createServer(function(req, res) {
    if (req.url === "/hello") {
      res.writeHead(200, { "Content-Type": "text/html" });

      logger.log("info", req.url);
      fs.appendFileSync(filePath, data, "utf8", err => {
        if (err) throw err;
        logger.log("info", 'The "data to append" was appended to file! \n');
      });
      res.write(fs.readFileSync(filePath));
    } else {
      res.writeHead(204, { "Content-Type": "text/html" });
      res.write(`<h1>Wrong URI: ${req.url}</h1>`);
      res.write(
        '<h1>Try this one: <a href="http://localhost:3000/hello">/hello</a></h1>'
      );
      logger.log("error", `Unavailable URI ${req.url}`);
    }
    res.end();
  })
  .listen(serverPort);
