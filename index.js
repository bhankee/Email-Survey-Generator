const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const app = express();

passport.use(new GoogleStrategy());

app.get("/", (req, res) => {
  res.send({ hi: "Brad" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//client id: 158792368460-hkbski8b5mauciqu5eu6vno19d8mrtv1.apps.googleusercontent.com
//client secret: ffRPWJ4pkfuCUxG4Wyk0JBmO
