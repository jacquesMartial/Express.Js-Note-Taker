const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");
// GET route for notes
notes.get("/", (req, res) => {
  readFromFile("./public/assets/").then((data) => res.json(JSON.parse(data)));
});
// POST route for notes
notes.post("/", (req, res) => {
  console.log(req, res);
  const load = {
    time: Date.now(),
    error_id: uuidv4(),
    errors,
  };
  if (!isValid) {
    readAndAppend(load, "./db/db.json");
    res.json("notes succesfully added");
  } else {
    res.json({
      message: "object is valid does not log, check front end",
      error_id: load.error_id,
    });
  }
});
module.exports = notes;
