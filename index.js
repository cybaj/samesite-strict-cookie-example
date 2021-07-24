var express = require("express");
var cors = require("cors");
var app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", function (req, res, next) {
  console.log(req.cookies);
  res.setHeader("Set-Cookie", [
    "foo=bar2; Path=/; HttpOnly; SameSite=None; Secure;",
    "hot=dollor; Path=/; SameSite=Strict;",
  ]);
  console.log(res.getHeaders());
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/test", function (req, res, next) {
  console.log(req.rawHeaders);
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
