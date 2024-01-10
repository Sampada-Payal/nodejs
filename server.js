//1.10.45 = day 57
// port to be run on http protocol as it is thirdparty we used require statement
const http = require("http");

// port number for server
// cons indicates cons ->> constant (idw chhange value)
//                 var ->> i can change value 
const port = 5500;

// server work req and reponse
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h6>Hey we got our server here...</h6>");
    res.end();
})
// listen statement for that server should listen to that port number
.listen(port, () => {
    console.log(`NodeJs server started running on port ${port}`);
})

//http://localhost:5500
