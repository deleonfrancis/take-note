// require express
const express = require("express");

// bring in db.js
const connectDB = require("./config/db")

connectDB();

// initialize express as a variable called app
const app = express();

// bring in auth, notes, and users api routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/users", require("./routes/users"));

// home endpoint(route)
app.get("/", (req, res) => res.json({ message: "hello json" }));

// variable for port listening on. process.env.port will be used in deployment and 5000 will be used in production
const PORT = process.env.PORT || 7000;

// makes the server listen
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
