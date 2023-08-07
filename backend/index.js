const express = require("express");
const app = express();
const Query = require("./models/user")
const cors = require('cors')
require("./db/connection");
require('dotenv').config()
app.use(cors())
const port =process.env.PORT || 8000;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get("/", (req, res) => {
  res.send("Hello almora");
});
//create a new register in Database....
app.post("/user", async (req, res) => {
  const createUser = new Query({
    username: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  //save the data from the user into database
  const user = await createUser.save();
  console.log(user);
  res.status(201).send("Your query is sumbmited successfully");
});
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
