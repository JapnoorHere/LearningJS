const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/write") {
    var data = "Hello \nData is written";
    fs.writeFile("Creating server using Node JS/write.txt", data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end("Data " + data);
    });
  }
});
fs.writeFileSync()
const port = 5000;
server.listen(port, () => {
  console.log("listening");
});
