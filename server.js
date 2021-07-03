const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

const app = express();

// Log the API calls
app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.json({
    id: 1,
    username: "john",
    email: "john@doe.com",
    password: "password",
  });
});

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
