// require express
const express = require("express");

// bring in db.js
const connectDB = require("./config/db");

const path = require("path");

connectDB();

// initialize express as a variable called app
const app = express();

// allows the body to receive data
app.use(express.json({ extended: false }));

// bring in auth, notes, and users api routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/users", require("./routes/users"));

// Serve static assests in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// home endpoint(route)
// app.get("/", (req, res) => res.json({ msg: "hello json" }));

// variable for port listening on. process.env.port will be used in deployment and 5000 will be used in production
const PORT = process.env.PORT || 7000;

// makes the server listen
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
