const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");
const fs = require("fs");
// GET route for notes
notes.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});
// POST route for notes
notes.post("/", (req, res) => {
  console.log(req, res);
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  if (newNote) {
    readAndAppend(newNote, "./db/db.json");
    res.json("notes succesfully added");
  } else {
    res.json({
      message: "object is valid does not log, check front end",
      error_id: load.error_id,
    });
  }
});
module.exports = notes;
