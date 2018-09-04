const fs = require('fs');
const _ = require('lodash')
const notes = require('./notes')
const yargs = require('yargs')

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
 }

const argv = yargs.command("add", "Add a new note", {
      title: titleOtions,
      body: {
        describe: "Body of note",
        demand: true,
        alias: "b"
      }
    })
    .command("list", "List all notes")
    .command("Read", "read a note", {
      title: {
        describe: "Title of note",
        demand: true,
        alias: "t"
      }
    })
    .commant("remove", "Remove Note", {
      title: titleOtions
    })
    .help()
    .argv
let command = argv._[0]

if(command === "add"){
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log("Note created");
    notes.logNote(note)
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  let allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} notes`);
  allNotes.forEach(note => console.log(note))
} else if (command === "read") {
  let note = notes.getNote(argv.title)
  if (note) {
    console.log("Note found");
    notes.logNote(note)
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? "Note was removed" : "Note not found"
  console.log(message);
} else {
console.log("command not recognized");
}
