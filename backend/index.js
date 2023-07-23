const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db"); // Import the database connection pool
const cors = require("cors");
const routes = require("./routes")

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api",routes)
// Your routes and other server logic can go here

// Start the server
const PORT = 3001;

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
